'use client';

import { useRef } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';
import { WHATSAPP } from '@/lib/content';
import Clock from './Clock';

const CELL = 72; // grid size in px, matches the CSS background

function Letters({ word, start }) {
  return (
    <span className="name-line" aria-hidden>
      {[...word].map((ch, i) => (
        <span key={i} className="ch" style={{ '--i': start + i }}>
          <span>{ch}</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const cellRef = useRef(null);
  const gridRef = useRef(null);

  // A yellow square follows the pointer, snapped to the background grid.
  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || !cellRef.current || !gridRef.current) return;
    const r = gridRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - r.left) / CELL) * CELL;
    const y = Math.floor((e.clientY - r.top) / CELL) * CELL;
    cellRef.current.style.transform = `translate(${x}px, ${y}px)`;
    cellRef.current.dataset.on = 'true';
  };
  const onLeave = () => {
    if (cellRef.current) cellRef.current.dataset.on = 'false';
  };

  return (
    <section id="top" className="hero" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div ref={gridRef} className="hero-grid" aria-hidden>
        <span ref={cellRef} className="hero-cell" data-on="false" />
      </div>

      <div className="wrap hero-in">
        <p className="label hero-label">
          <LuMapPin aria-hidden /> Chattogram, Bangladesh <span className="label-line" />
        </p>

        <h1 className="name">
          <span className="sr-only">Muhammad Sami</span>
          <Letters word="MUHAMMAD" start={0} />
          <Letters word="SAMI" start={8} />
        </h1>

        <p className="hero-sub">
          Web developer building fast, clean websites with <b>React and Next.js</b>, and the{' '}
          <b className="mark">banners and videos</b> that go on them.
        </p>

        <div className="hero-ctas">
          <a href="#work" className="btn btn-lg">
            See the work
            <span className="btn-dot">
              <LuArrowRight />
            </span>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="avail">
            <i className="dot" aria-hidden />
            Available for work
            <span className="avail-tag">
              <SiWhatsapp aria-hidden /> Message me
            </span>
          </a>
        </div>

        <p className="hero-time">
          It&rsquo;s <Clock /> in Chattogram right now.
        </p>
      </div>
    </section>
  );
}
