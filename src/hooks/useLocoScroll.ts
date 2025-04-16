'use client';

import { useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocoScroll = () => {
  useEffect(() => {
    const LocomotiveScroll = require('locomotive-scroll').default;

    const scrollEl = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.06, // más bajo = más "pesado"
    });

    return () => {
      scroll.destroy();
    };
  }, []);
};