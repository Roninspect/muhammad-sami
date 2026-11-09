import {
  SiCpanel,
  SiCss,
  SiFirebase,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiVercel,
  SiWhatsapp,
  SiWordpress,
  SiYoutube,
} from 'react-icons/si';
import {
  LuArrowRight,
  LuArrowUpRight,
  LuClapperboard,
  LuImage,
  LuMail,
  LuLayoutTemplate,
  LuMonitorSmartphone,
  LuPenTool,
  LuSparkles,
} from 'react-icons/lu';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Experience from '@/components/Experience';
import CountUp from '@/components/CountUp';
import Clock from '@/components/Clock';
import CopyButton from '@/components/CopyButton';
import { EMAIL, MYSPEND, PHONE, PHONE_RAW, WHATSAPP, YOUTUBE } from '@/lib/content';

const SKILLS = [
  {
    group: 'Frontend',
    items: [
      [SiReact, 'React', '#149eca'],
      [SiNextdotjs, 'Next.js', '#000'],
      [SiJavascript, 'JavaScript', '#d6b300'],
      [SiHtml5, 'HTML', '#e34f26'],
      [SiCss, 'CSS', '#663399'],
    ],
  },
  {
    group: 'Web design & CMS',
    items: [
      [LuMonitorSmartphone, 'Responsive layouts'],
      [LuLayoutTemplate, 'UI design'],
      [SiWordpress, 'WordPress', '#21759b'],
    ],
  },
  {
    group: 'Databases & hosting',
    items: [
      [SiMysql, 'MySQL', '#00758f'],
      [SiSupabase, 'Supabase', '#3ecf8e'],
      [SiFirebase, 'Firebase', '#f5820d'],
      [SiVercel, 'Vercel', '#000'],
      [SiCpanel, 'cPanel', '#ff6c2c'],
    ],
  },
  {
    group: 'Design & video',
    items: [
      [LuImage, 'Ad & marketing posters'],
      [LuPenTool, 'Offer banners'],
      [LuClapperboard, 'Video editing'],
      [LuSparkles, 'Motion graphics'],
    ],
  },
];

const MARQUEE = ['React', 'Next.js', 'WordPress', 'Offer banners', 'Ad posters', 'Promo videos', 'Motion graphics', 'Supabase'];

const WORK = [
  {
    n: '01',
    kind: 'Live · Web app',
    title: 'Shosthy',
    tagline: 'Book the right doctor in Bangladesh, online.',
    body: 'A doctor-appointment platform built with Next.js. Patients find BMDC-verified doctors, see open slots, pay online and get a clinic serial instantly. I built and maintain it.',
    tags: ['Next.js', 'React', 'Online payment'],
    href: 'https://shosthy.com',
    domain: 'shosthy.com',
    img: '/work/shosthy.webp',
    badge: 'Real users, 1+ year in production',
  },
  {
    n: '02',
    kind: 'Content site',
    title: 'GardenSpect',
    tagline: 'A gardening guide with 370+ articles.',
    body: 'A WordPress site covering container gardening, composting and balcony gardening.',
    tags: ['WordPress', 'Content'],
    href: 'https://gardenspect.com',
    domain: 'gardenspect.com',
    img: '/work/gardenspect.webp',
  },
  {
    n: '03',
    kind: 'Content site',
    title: 'Fireside Folks',
    tagline: 'Camping guides that keep it simple.',
    body: 'A WordPress camping guide covering tent camping, car camping, gear and packing checklists.',
    tags: ['WordPress', 'Content'],
    href: 'https://firesidefolks.com',
    domain: 'firesidefolks.com',
    img: '/work/firesidefolks.webp',
  },
];

function Label({ children }) {
  return (
    <p className="label">
      {children} <span className="label-line" />
    </p>
  );
}

function Star() {
  return (
    <svg className="star" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k} className="marquee-set">
                {MARQUEE.map((m) => (
                  <span key={m} className="marquee-item">
                    {m} <Star />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className="section">
          <Reveal className="wrap about">
            <div className="id-card rv">
              <div className="id-top">
                <span className="id-mono">MS</span>
                <span className="id-status">
                  <i className="dot" aria-hidden /> Available
                </span>
              </div>
              <p className="id-name">
                Muhammad Sami
                <span lang="bn">মুহাম্মদ সামি</span>
              </p>
              <dl className="id-stats">
                <div>
                  <dt>
                    <CountUp to={1} suffix="+" />
                  </dt>
                  <dd>year on a live product</dd>
                </div>
                <div>
                  <dt>
                    <CountUp to={370} suffix="+" duration={1800} />
                  </dt>
                  <dd>articles published</dd>
                </div>
                <div>
                  <dt>
                    <CountUp to={4} />
                  </dt>
                  <dd>projects</dd>
                </div>
              </dl>
              <p className="id-foot">
                Chattogram · <Clock />
              </p>
            </div>

            <div className="about-text">
              <div className="rv" style={{ '--d': '80ms' }}>
                <Label>About</Label>
                <h2 className="h2">
                  Hi, I&rsquo;m Sami. I build the website <em>and</em> make what goes on it.
                </h2>
              </div>
              <p className="rv" style={{ '--d': '160ms' }}>
                I&rsquo;m a web developer from Chittagong with more than a year of hands-on work on{' '}
                <a href="https://shosthy.com" target="_blank" rel="noopener noreferrer" className="inline-link">
                  Shosthy
                </a>
                , a live doctor-booking platform built with Next.js.
              </p>
              <p className="rv" style={{ '--d': '220ms' }}>
                I build fast, clean websites with React and Next.js, and I design the visuals that go on them: offer
                banners, ad posters and promo videos. I also run a YouTube channel, @Cosmora-Zzz, where I edit and
                animate every video myself.
              </p>
              <p className="about-meta rv" style={{ '--d': '280ms' }}>
                <span>Diploma in Computer Science, ongoing</span>
                <span>Bangla (native), English</span>
              </p>
            </div>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-alt">
          <div className="wrap">
            <Reveal className="rv-head">
              <div className="rv">
                <Label>Toolbox</Label>
                <h2 className="h2">What I build with</h2>
              </div>
            </Reveal>
            <div className="skills">
              {SKILLS.map((g) => (
                <Reveal key={g.group} className="skill-row" threshold={0.4}>
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map(([Icon, name, color], i) => (
                      <li key={name} className="chip rv" style={{ '--d': `${i * 60}ms` }}>
                        <Icon aria-hidden style={color ? { color } : undefined} />
                        {name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="wrap">
            <Reveal className="rv-head">
              <div className="rv">
                <Label>Experience</Label>
                <h2 className="h2">Where I&rsquo;ve been</h2>
              </div>
            </Reveal>
            <Experience />
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section section-alt">
          <div className="wrap">
            <Reveal className="rv-head">
              <div className="rv">
                <Label>Selected work</Label>
                <h2 className="h2">Things I&rsquo;ve built</h2>
              </div>
            </Reveal>

            <div className="projects">
              {WORK.map((p, i) => (
                <Reveal key={p.title} className="project" data-flip={i % 2 === 1} threshold={0.25}>
                  <div className="project-text">
                    <p className="project-kind rv">
                      {p.n} / {p.kind}
                    </p>
                    <h3 className="project-title rv" style={{ '--d': '60ms' }}>
                      {p.title}
                    </h3>
                    <p className="project-tagline rv" style={{ '--d': '120ms' }}>
                      {p.tagline}
                    </p>
                    <p className="project-body rv" style={{ '--d': '160ms' }}>
                      {p.body}
                    </p>
                    {p.badge && (
                      <p className="badge rv" style={{ '--d': '200ms' }}>
                        <i className="dot dot-red" aria-hidden /> {p.badge}
                      </p>
                    )}
                    <ul className="chips rv" style={{ '--d': '220ms' }}>
                      {p.tags.map((t) => (
                        <li key={t} className="chip chip-sm">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="btn btn-lg rv"
                      style={{ '--d': '260ms' }}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {p.domain}
                      <span className="btn-dot">
                        <LuArrowUpRight />
                      </span>
                    </a>
                  </div>

                  <a
                    className="shot rv-shot"
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.domain}`}
                  >
                    <span className="shot-bar">
                      <i />
                      <i />
                      <i />
                      <span>{p.domain}</span>
                    </span>
                    <img src={p.img} alt={`Home page of ${p.domain}`} width="1440" height="900" loading="lazy" />
                  </a>
                </Reveal>
              ))}

              <Reveal className="project" data-flip="true" threshold={0.25}>
                <div className="project-text">
                  <p className="project-kind rv">04 / Mobile app · Android</p>
                  <h3 className="project-title rv" style={{ '--d': '60ms' }}>
                    MySpend
                  </h3>
                  <p className="project-tagline rv" style={{ '--d': '120ms' }}>
                    AI expense tracker, budget planner and subscription manager.
                  </p>
                  <p className="project-body rv" style={{ '--d': '160ms' }}>
                    Say what you spent or snap a receipt, and the AI fills in the details. It tracks expenses, income,
                    loans, subscriptions and product warranties in one app, with reports and renewal reminders.
                  </p>
                  <p className="badge rv" style={{ '--d': '200ms' }}>
                    <i className="dot dot-red" aria-hidden /> Live on Google Play
                  </p>
                  <ul className="chips rv" style={{ '--d': '220ms' }}>
                    <li className="chip chip-sm">Mobile app</li>
                    <li className="chip chip-sm">AI assistant</li>
                    <li className="chip chip-sm">Voice & receipt input</li>
                  </ul>
                  <a
                    className="btn btn-lg rv"
                    style={{ '--d': '260ms' }}
                    href={MYSPEND}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGoogleplay aria-hidden style={{ color: '#01875f' }} /> Get it on Google Play
                    <span className="btn-dot">
                      <LuArrowUpRight />
                    </span>
                  </a>
                </div>
                <a
                  className="shot-fan rv-shot"
                  href={MYSPEND}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open MySpend on Google Play"
                >
                  <img src="/work/myspend/s2.webp" alt="MySpend AI expense assistant screen" width="554" height="1200" loading="lazy" />
                  <img src="/work/myspend/s1.webp" alt="MySpend dashboard with balance, income and expense" width="554" height="1200" loading="lazy" />
                  <img src="/work/myspend/s4.webp" alt="MySpend reports and income overview chart" width="554" height="1200" loading="lazy" />
                  <span className="fan-tag">
                    <img src="/work/myspend/icon.webp" alt="" width="28" height="28" /> MySpend on Google Play
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <Reveal className="wrap contact-in">
            <Label>Contact</Label>
            <h2 className="contact-title rv">
              Let&rsquo;s build
              <br />
              something.
            </h2>
            <p className="contact-text rv" style={{ '--d': '100ms' }}>
              Need a website, or the banners and videos that go on it? Email me or message me on WhatsApp.
            </p>
            <div className="big-links">
              <a className="big-link rv" style={{ '--d': '160ms' }} href={`mailto:${EMAIL}`}>
                <LuMail aria-hidden className="big-link-icon" />
                {EMAIL}
                <LuArrowRight aria-hidden />
              </a>
              <a
                className="big-link big-link-sm rv"
                style={{ '--d': '200ms' }}
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp aria-hidden className="big-link-icon" style={{ color: '#1faa53' }} />
                {PHONE}
                <LuArrowRight aria-hidden />
              </a>
            </div>
            <div className="contact-btns rv" style={{ '--d': '260ms' }}>
              <CopyButton text={EMAIL}>Copy email</CopyButton>
              <CopyButton text={PHONE_RAW}>Copy number</CopyButton>
              <a className="btn" href={YOUTUBE} target="_blank" rel="noopener noreferrer">
                <SiYoutube aria-hidden style={{ color: '#e62117' }} /> YouTube <LuArrowUpRight aria-hidden />
              </a>
            </div>
          </Reveal>
          <footer className="wrap foot">
            <span>© {new Date().getFullYear()} Muhammad Sami</span>
            <span>Designed and built by me with Next.js</span>
          </footer>
        </section>
      </main>
    </>
  );
}
