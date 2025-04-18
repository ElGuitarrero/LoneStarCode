import nodemailer from "nodemailer";

// Map para controlar submissions por IP
const ipSubmissionCounts = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: Request) {
	try {
		// Obtener IP del cliente
		const ip = req.headers.get('x-forwarded-for') || "unknown";

		// Rate Limiting - permitir 1 submission por minuto
		const now = Date.now();
		const submission = ipSubmissionCounts.get(ip);

		if (submission && now - submission.timestamp < 60_000) {
			// Si mandaron en menos de 60 segundos
			return new Response("Too many requests. Please wait a minute before trying again.", { status: 429 });
		}

		// Actualizar el timestamp de la IP
		ipSubmissionCounts.set(ip, { count: 1, timestamp: now });

		// Parsear el body del request
		const body = await req.json();
		const { name, cellphone, email, service, package: selectedPackage, message } = body;

		if (!name || !email || !message) {
			return new Response("Missing required fields", { status: 400 });
		}

		const transporter = nodemailer.createTransport({
			host: "smtp.zoho.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.MAIL_USER!,
				pass: process.env.MAIL_PASS!,
			},
		});

		// 📩 Email para TI (el dueño)
		await transporter.sendMail({
			from: process.env.MAIL_USER!,
			to: process.env.MAIL_USER!,
			replyTo: email,
			subject: `New Contact Form Submission from ${name}`,
			html: `
				<h2>New Message from Website</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Phone:</strong> ${cellphone}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Service:</strong> ${service}</p>
				<p><strong>Package:</strong> ${selectedPackage}</p>
				<p><strong>Message:</strong><br/>${message}</p>
			`,
		});

		// 📬 Email para el CLIENTE
		await transporter.sendMail({
			from: process.env.MAIL_USER!,
			to: email,
			subject: "Thank you for contacting Lone Star Code!",
			html: `
				<h2>Thank you for reaching out!</h2>
				<p>Hi ${name},</p>
				<p>We have received your message and will get back to you shortly.</p>
				<p><strong>Your Request:</strong></p>
				<ul>
					<li><strong>Service:</strong> ${service}</li>
					<li><strong>Package:</strong> ${selectedPackage}</li>
				</ul>
				<p>If you have any urgent questions, feel free to reply to this email.</p>
				<br/>
				<p>Best,</p>
				<p><strong>The Lone Star Code Team</strong></p>
			`,
		});

		return new Response("Emails sent successfully", { status: 200 });

	} catch (error) {
		console.error(error);
		return new Response("Something went wrong", { status: 500 });
	}
}