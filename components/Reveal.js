'use client';

import { useRef } from 'react';
import { useInView } from './hooks';

/**
 * Adds data-inview="true" the first time this block scrolls into view.
 * CSS (.rv children) handles the actual motion.
 */
export default function Reveal({ as: Tag = 'div', threshold = 0.2, children, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold, once: true });
  return (
    <Tag ref={ref} data-inview={inView} {...rest}>
      {children}
    </Tag>
  );
}
