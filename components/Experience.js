'use client';

import { useEffect, useRef, useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const ITEMS = [
  {
    id: 'exp-shosthy',
    title: 'Shosthy',
    role: 'Web Developer',
    when: '1+ year · Chattogram',
    link: ['shosthy.com', 'https://shosthy.com'],
    points: [
      'Developed and maintain shosthy.com, a live doctor-booking platform, using Next.js and React.',
      'Worked on a product with real users: doctor search, open slots, online payment and instant serial booking.',
      'Handle ongoing website updates, page design and content changes.',
    ],
    tags: ['Next.js', 'React', 'Live product'],
  },
  {
    id: 'exp-design',
    title: 'Design & video',
    role: 'Visual designer',
    when: 'Alongside the web work',
    points: [
      'Design the visuals that go on the sites I build: offer banners and ad posters.',
      'Edit promo videos and make motion graphics for campaigns.',
    ],
    tags: ['Offer banners', 'Ad posters', 'Promo videos', 'Motion graphics'],
  },
  {
    id: 'exp-youtube',
    title: 'YouTube · @Cosmora-Zzz',
    role: 'Creator',
    when: 'Ongoing',
    link: ['youtube.com/@Cosmora-Zzz', 'https://www.youtube.com/@Cosmora-Zzz'],
    points: ['Run the channel @Cosmora-Zzz and edit and animate every video myself.'],
    tags: ['Video editing', 'Animation'],
  },
  {
    id: 'exp-edu',
    title: 'Sermon School and College',
    role: 'Diploma in Computer Science',
    when: 'Ongoing',
    points: ['Studying computer science while working on live projects.'],
    tags: ['Education'],
  },
];

/** Left: the list, sticky on desktop. Right: details. The list follows whichever detail you are reading. */
export default function Experience() {
  const [active, setActive] = useState(ITEMS[0].id);
  const refs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = (id) => {
    const el = refs.current[id];
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.3;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="exp">
      <ol className="exp-list">
        {ITEMS.map((it) => (
          <li key={it.id}>
            <button type="button" data-on={active === it.id} onClick={() => jump(it.id)}>
              <i aria-hidden />
              <span>
                <b>{it.title}</b>
                <small>
                  {it.role} · {it.when}
                </small>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="exp-details">
        {ITEMS.map((it) => (
          <article
            key={it.id}
            id={it.id}
            ref={(el) => (refs.current[it.id] = el)}
            className="exp-card"
            data-on={active === it.id}
          >
            <header>
              <h3>{it.title}</h3>
              <p>
                {it.role} <span>· {it.when}</span>
              </p>
            </header>
            <ul>
              {it.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="exp-foot">
              <span className="chips">
                {it.tags.map((t) => (
                  <span key={t} className="chip chip-sm">
                    {t}
                  </span>
                ))}
              </span>
              {it.link && (
                <a className="text-link" href={it.link[1]} target="_blank" rel="noopener noreferrer">
                  {it.link[0]} <LuArrowUpRight aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
