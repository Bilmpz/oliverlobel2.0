import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FloatingPaths from '../components/FloatingPaths'
import Reveal from '../components/Reveal'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const LOGOS = [
  { src: `${CDN}/javascript/javascript-original.svg`,       name: 'JavaScript' },
  { src: `${CDN}/typescript/typescript-original.svg`,       name: 'TypeScript' },
  { src: `${CDN}/react/react-original.svg`,                 name: 'React' },
  { src: `${CDN}/csharp/csharp-original.svg`,               name: 'C#' },
  { src: `${CDN}/c/c-original.svg`,                         name: 'C' },
  { src: `${CDN}/html5/html5-original.svg`,                 name: 'HTML5' },
  { src: `${CDN}/css3/css3-original.svg`,                   name: 'CSS3' },
  { src: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg`, name: 'SQL' },
  { src: `${CDN}/docker/docker-original.svg`,               name: 'Docker' },
  { src: `${CDN}/git/git-original.svg`,                     name: 'Git' },
  { src: `${CDN}/supabase/supabase-original.svg`,           name: 'Supabase' },
  { src: `${CDN}/vercel/vercel-original.svg`,               name: 'Vercel', invert: true },
  { src: `${CDN}/datagrip/datagrip-original.svg`,           name: 'DataGrip' },
]

const TABS = {
  frontend: {
    label: ' Frontend',
    h3: 'Design der fungerer',
    p: 'Jeg bygger interfaces der er intuitive, responsive og hurtige. Fra ren HTML/CSS til React-komponenter - jeg fokuserer på detaljen og brugeroplevelsen.',
    chips: ['HTML5','CSS3','JavaScript','TypeScript','React','Tailwind CSS'],
    cards: [
      { img:`${CDN}/react/react-original.svg`,      l:'React',      s:'Komponent-baseret UI' },
      { img:`${CDN}/css3/css3-original.svg`,        l:'CSS/Tailwind',s:'Responsivt design' },
      { img:`${CDN}/typescript/typescript-original.svg`, l:'TypeScript', s:'Typesikker kode' },
      { img:`${CDN}/apple/apple-original.svg`, l:'Mobile First',s:'Alle enheder' },
    ],
  },
  backend: {
    label: ' Backend',
    h3: 'Solid logik i baggrunden',
    p: 'Databasedesign, API\'er og serverlogik er fundamentet under ethvert produkt. Jeg sikrer at data er struktureret og sikkert.',
    chips: ['C#','SQL','Supabase','REST API','Docker'],
    cards: [
      { img:`${CDN}/azuresqldatabase/azuresqldatabase-original.svg`, l:'SQL',     s:'Relationelle databaser' },
      { img:`${CDN}/supabase/supabase-original.svg`,                 l:'Supabase',s:'Backend as a Service' },
      { img:`${CDN}/fastapi/fastapi-original.svg`,                                                  l:'REST API',s:'Datakommunikation' },
      { img:`${CDN}/docker/docker-original.svg`,                     l:'Docker',  s:'Containerisering' },
    ],
  },
  deploy: {
    label: ' Deploy',
    h3: 'Fra lokal til live',
    p: 'At sende et projekt i luften er ikke slutningen, det er begyndelsen. Moderne cloud-platforme giver hurtige deploys og nem vedligeholdelse, endda mange af dem gratis',
    chips: ['GitHub','Vercel','Git Flow','VS Code'],
    cards: [
      { img:`${CDN}/git/git-original.svg`,     l:'GitHub',   s:'Versionsstyring' },
      { img:`${CDN}/vercel/vercel-original.svg`,l:'Vercel',  s:'Instant deployment', invert: true },
      { img:`${CDN}/githubactions/githubactions-original.svg`,l:'Git Flow', s:'Struktureret arbejde' },
      { img:`${CDN}/gitter/gitter-plain.svg`,l:'Analytics',s:'Mål og optimer' },
    ],
  },
  research: {
    label: ' Research',
    h3: 'Forstå problemet først',
    p: 'Inden jeg skriver en eneste linje kode, sætter jeg mig ind i dit behov og projektets mål. En god løsning starter med de rigtige spørgsmål.',
    chips: ['Kravspecifikation','Wireframes','Figma','Brugerflows'],
    cards: [
      { icon:'', l:'Brugerflow',   s:'Kortlæg rejsen' },
      { icon:'', l:'Wireframe',    s:'Skitser hurtige idéer' },
      { icon:'', l:'Kravliste',    s:'Prioritér funktioner' },
      { icon:'', l:'Sparring',     s:'Feedback tidligt' },
    ],
  },
}

const TESTIMONIALS = [
  { q: 'Oliver har bidraget med en unik og gennemtænkt idé til, hvordan butikken kan udvikles og forbedres. Jeg har kun positive ting at sige om hans arbejde.', name: 'Kevin Handberg', role: 'Varehuschef, Kvickly', initials: 'KH', color: '#c4875c' },
  { q: 'Da jeg ikke kendte Oliver på forhånd, var det en tillidssag - men det viste sig hurtigt at være det rigtige valg. Han agerer med integritet og eksekverer hurtigt.', name: 'Sanne Pedersen', role: 'Konsulent', initials: 'SP', color: '#4a8a74' },
  { q: 'Han har lavet en flot og professionel hjemmeside - moderne, overskuelig og brugervenlig. Høj kvalitet og sans for detaljen er tydelig.', name: 'Lukas Abel', role: 'IT-Virksomhed', initials: 'LA', color: '#5a5a6a' },
  { q: 'Som studentermedhjælper viser Oliver en imponerende evne til hurtigt og selvstændigt at sætte sig ind i ny teknologi og omsætte idéer til handling.', name: 'Formatet ApS', role: 'SaaS-virksomhed', initials: 'F', color: '#7a4a8a' },
]

export default function Home() {
  useEffect(() => {                           
    document.title = 'Oliver Løbel – Software Developer | React, TypeScript, C#'
    window.scrollTo(0, 30)
  }, [])

  const [activeTab, setActiveTab] = useState('frontend')
  const tab = TABS[activeTab]

  return (
    <main>
      <section className="hero">
        <FloatingPaths />
        <div className="hero-in">
          <div className="hero-top">
            <span className="badge">SOFTWARE DEVELOPER</span>
            <span className="status-pill"><span className="dot" />Åben for projekter</span>
          </div>
          <div className="hero-name">
            <span>Oliver</span>
            <span>Løbel<span className="ac">.</span></span>
          </div>
          <div className="hero-bot">
          <div className="hero-copy">
            <p className="hero-bio">
              En ung, nysgerrig{' '}
              <span style={{ color: 'var(--accent)', fontWeight: '700' }}>softwarestuderende</span>
              {' '}med fokus på projekter, der skaber værdi.
            </p>
              <p className="hero-alias">Mit navn skrives både <strong>Oliver Løbel</strong> og <strong>Oliver Loebel</strong></p>
              <div className="hero-ctas">
                <Link to="/kontakt" className="btn btn-d">Skriv til mig</Link>
                <Link to="/portfolio" className="btn btn-o">Se projekter →</Link>
              </div>
            </div>
            <div className="photo-col">
              <div className="photo-fr">
                <img src="/mig.png" alt="Oliver Løbel" loading="eager" />
              </div>
              <div className="photo-pip"><span className="dot" />Aktiv 2026</div>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="band-in">
          {[['AAU','Software Civilingeniør'],['12+','Teknologier'],['10+','Tilfredse kunder'],['2026','Aktivt Developer']].map(([v,k],i) => (
            <Reveal key={k} delay={i*70}>
              <div className="bstat">
                <div className="bval">{v}</div>
                <div className="bkey">{k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="tech-section">
        <div className="tech-section-in">
          <Reveal>
            <div className="tech-copy">
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,.38)' }}>Teknologier</span>
              <h2>Mit nuværende<br />techstack<span className="ac">.</span></h2>
              <p style={{ marginTop: 14 }}>"Always open to new things" - men disse er dem jeg arbejder med lige nu.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="tech-grid">
              {LOGOS.map(logo => (
                <div key={logo.name} className="tl">
                  <img src={logo.src} alt={logo.name} style={logo.invert ? { filter: 'invert(.8)' } : {}} />
                  <span className="tl-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-bg">
        <div className="w">
          <Reveal><span className="eyebrow">Sådan arbejder jeg</span></Reveal>
          <Reveal delay={50}><h2 className="sh">Mit workflow</h2></Reveal>
          <Reveal delay={100} style={{ marginTop: 48 }}>
            <div className="tab-btns">
              {Object.entries(TABS).map(([key, t]) => (
                <button key={key} className={`tb${activeTab === key ? ' active' : ''}`} onClick={() => setActiveTab(key)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="tp-grid">
              <div className="tp-text">
                <h3>{tab.h3}</h3>
                <p>{tab.p}</p>
                <div className="chip-row">
                  {tab.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
              <div className="tp-vis">
                {tab.cards.map(card => (
                  <div key={card.l} className="vc">
                    {card.img
                      ? <img src={card.img} alt={card.l} style={card.invert ? { filter: 'invert(.7)' } : {}} />
                      : <div className="vc-icon">{card.icon}</div>
                    }
                    <div className="vc-l">{card.l}</div>
                    <div className="vc-s">{card.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="off-bg">
        <div className="w">
          <Reveal><span className="eyebrow">Hvad andre siger</span></Reveal>
          <Reveal delay={50}><h2 className="sh">Udtalelser</h2></Reveal>
          <div className="tcg" style={{ marginTop: 48 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <article className="tc">
                  <div className="tc-q">"</div>
                  <p>{t.q}</p>
                  <div className="tc-footer">
                    <div className="av" style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <span className="tc-name">{t.name}</span>
                      <span className="tc-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-bg" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div className="w">
          <div className="cta-g">
            <Reveal>
              <span className="eyebrow">Kontakt</span>
              <h2 className="cta-h">Har du et projekt<br />i tankerne?</h2>
              <p className="cta-p">Jeg er altid interesseret i spændende opgaver og samarbejder - store som små.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/kontakt" className="btn btn-d">Send en mail</Link>
                <Link to="/portfolio" className="btn btn-o">Se portfolio →</Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="cta-deco">
                <div className="cdi">oliver.lobel@yahoo.dk</div>
                <div className="cdi">linkedin.com/in/oliver-løbel</div>
                <div className="cdi">github.com/Bilmpz</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
