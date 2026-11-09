'use client';

import { useRef } from 'react';
import { useCountUp, useInView, useReducedMotion } from './hooks';

export default function CountUp({ to, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.6, once: true });
  const reduced = useReducedMotion();
  const n = useCountUp(to, inView && !reduced, duration);
  return (
    <span ref={ref} className="countup">
      {reduced ? to : n}
      {suffix}
    </span>
  );
}
