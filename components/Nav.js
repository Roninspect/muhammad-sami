'use client';

import { useEffect, useState } from 'react';
import { LuMenu, LuX, LuArrowUp, LuMessageCircle } from 'react-icons/lu';

const LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [far, setFar] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setFar(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Underline the link for whichever section sits in the middle of the screen.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const hero = document.getElementById('top');
    if (hero) io.observe(hero);

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-menu', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="nav" data-scrolled={scrolled} data-open={open}>
        <div className="nav-in">
          <a href="#top" className="logo" aria-label="Muhammad Sami, back to top" onClick={() => setOpen(false)}>
            MS
          </a>

          <nav className="nav-links" aria-label="Main">
            {LINKS.map(([id, label]) => (
              <a key={id} href={`#${id}`} data-active={active === id} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <a className="btn btn-sm nav-cta" href="#contact" onClick={() => setOpen(false)}>
            <LuMessageCircle aria-hidden /> Contact me
          </a>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </header>

      <a href="#top" className="to-top" data-show={far} aria-label="Back to top">
        <LuArrowUp />
      </a>
    </>
  );
}
