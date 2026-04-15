
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const PROJECTS = [
  {
    img: '/Kvitra.png',
    date: 'April 2026',
    title: 'Kvitra – Under udvikling',
    desc: 'Det nyeste skud på stammen er Kvitra — en løsning under udvikling, der gør det nemmere at samle, organisere og finde digitale kvitteringer. Projektet har fokus på en enkel og brugervenlig oplevelse, hvor brugeren både kan få overblik over sit forbrug, følge sine forbrugsmønstre og sammenligne dem med andres.',
    tags: ['TypeScript', 'JavaScript', 'CSS', 'AI', 'Supabase'],
    links: [
      { href: 'https://github.com/Bilmpz/Projekt-Kvitra', label: '↗ GitHub', primary: false },
    ],
  },
    {
    img: '/energi.png',
    date: '15 april 2026',
    title: 'Grønspot - Overblik energipriser',
    desc: 'GrønSpot er et dansk elspot-værktøj der viser realtidspriser på strøm time for time. Priserne hentes direkte fra Energi Data Services åbne API og præsenteres i et rent, moderne interface — ingen login, ingen abonnement, bare data.',
    tags: ['React', 'Typescript', 'Vercel', 'Api Calls'],
    links: [
      { href: 'https://gr-nspot.vercel.app/today', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/Gr-nspot', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/itnemt.png',
    date: '10 april 2026',
    title: 'Website til Itnemt.dk',
    desc: 'ITNemt.dk er udviklet som en moderne og brugervenlig hjemmeside til en IT-support virksomhed med fokus på hurtig hjælp og tydelig kommunikation. Løsningen er bygget med henblik på at præsentere ydelser klart, skabe tillid og gøre det nemt for besøgende at tage kontakt.',
    tags: ['React', 'JavaScript', 'CSS', 'Vite', 'Vercel', 'Nodemailer'],
    links: [
      { href: 'https://itnemt.vercel.app/', label: '↗ Live', primary: true },
    ],
  },
  {
    img: '/BA- DMI.png',
    date: '06 april 2026',
    title: 'Hente live data fra DMI',
    desc: "Frontend og automatiseret dataløsning udviklet til at hente live målinger fra DMI's vejrstation 06154. Projektet indsamler temperatur- og luftfugtighedsdata, behandler dem i C# og publicerer dem i et simpelt dashboard, hvor brugeren nemt kan følge de nyeste observationer og downloade data som CSV.",
    tags: ['C#', 'HTML', 'CSS', 'API Calls'],
    links: [
      { href: 'https://bilmpz.github.io/DMI/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/DMI', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/kvickly.png',
    date: '31 marts 2026',
    title: 'Ansøgningsformular til Kvickly',
    desc: 'Ansøgningsside udviklet til Kvickly med fokus på en enkel og brugervenlig oplevelse for nye medarbejdere. Løsningen indeholder en præsentationsside om butikken samt en trin-for-trin ansøgningsformular, hvor ansøgeren besvarer relevante spørgsmål og sender sin ansøgning direkte til butikkens mail.',
    tags: ['TypeScript', 'Next.js', 'CSS', 'Nodemailer'],
    links: [
      { href: 'https://kvickly-ansoegningsformular.vercel.app/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/kvickly-ansoegningsformular', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/smile.png',
    date: '10 marts 2026',
    title: 'Onepage for smilebrandingstudio.dk',
    desc: 'Webside udviklet til Smile Branding Studio som en del af deres rebranding til Formatet ApS. Siden fungerer som en klar og brugervenlig overgang mellem det gamle og nye brand med fokus på enkel kommunikation og et roligt visuelt udtryk.',
    tags: ['TypeScript', 'JavaScript', 'CSS'],
    links: [
      { href: 'https://smilebrandingstudio.dk/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/smilestudio', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/oliverlobel1.0.png',
    date: '26 feb. 2026',
    title: 'Min Personlige Hjemmeside 1.0',
    desc: 'Webbaseret lommeregner udviklet med fokus på præcis inputhåndtering, beregningslogik og et responsivt design. Projektet demonstrerer arbejde med JavaScript-funktionalitet, eventhåndtering og brugerflade.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { href: 'https://bilmpz.github.io/oliverlobel.com/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/oliverlobel.com', label: '↗ GitHub', primary: false },
    ], 
  },
  {
    img: '/Stroemlybillede.png',
    date: '02 feb. 2026',
    title: 'Onepage for strømly.dk',
    desc: 'Onepage-website lavet som et hurtigt og enkelt landingpage-udkast for strømly.dk. Fokus på rent design, klar kommunikation og hurtig loading.',
    tags: ['Node.js', 'React'],
    links: [
      { href: 'https://stromly.dk/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/Stroemly', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/BPtech.png',
    date: '17 jan. 2026',
    title: 'Kundeplatform for BA Technologies',
    desc: 'Udkast til kundeplatform – en platform som via API-kald viser data fra målere. Bygget med JavaScript/TypeScript og sat op med Supabase. Stadig under udvikling.',
    tags: ['JavaScript', 'TypeScript', 'Supabase'],
    links: [
      { href: 'https://github.com/Bilmpz/customer-dashboard', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/pngegg.png',
    date: '22 dec. 2025',
    title: '1. Semester projekt',
    desc: 'Vores første semesterprojekt handler om at optimere boardingprocessen i fly. Vi undersøger, hvordan forskellige boardingstrategier påvirker tiden og effektiviteten ved ombordstigning. Projektet bygger på simulationer og modeller, hvor vi sammenligner metoder som random, back-to-front og WilMA.',
    tags: ['C'],
    contain: true,
    links: [
      { href: 'https://github.com/Bilmpz/1.-Semester-projekt---AAU-CPH', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/aqualink.png',
    date: '12 dec. 2025',
    title: 'Forbrugerportal m. SQL',
    desc: 'Webapp i HTML, CSS og JavaScript, hvor brugere kan oprette sig og logge ind via en SQL-styret database. Projektet viser en simpel, men realistisk login-flow med fokus på struktur, sikkerhed og en god brugeroplevelse.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    links: [
      { href: 'https://github.com/Bilmpz/Aqualog', label: '↗ GitHub', primary: false },
    ],
  },
  {
    img: '/sanne p.png',
    date: '1 sep. 2025',
    title: 'Website: Coach For Business',
    desc: 'Designet og udviklet en moderne, responsiv hjemmeside til Sanne Pedersen, hvor formålet er at give ledere og organisationer adgang til førsteklasses coaching og lederudvikling. Klar visuel kommunikation med fokus på ro, nærvær og lederskab.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    links: [
      { href: 'https://sannepedersen.dk/', label: '↗ Live', primary: true },
      { href: 'https://github.com/Bilmpz/SannePedersen', label: '↗ GitHub', primary: false },
    ],
  },
]

export function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio – Oliver Løbel | Software Developer'
  }, [])

  return (
    <main>
      <header className="ph">
        <div className="ph-in">
          <p className="eyebrow">Projekter</p>
          <h1 className="ph-t">Portfolio<span className="ac">.</span></h1>
          <p className="ph-s">
            Tag et kig på min{' '}
            <a
              href="https://github.com/Bilmpz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', fontWeight: 500 }}
            >
              GitHub
            </a>
            {' '}for et bedre indblik – her ser du kun udvalgte demoer
          </p>
        </div>
      </header>

      <section className="surface-bg">
        <div className="w">
          <div className="pg">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <article className="pc" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                  {/* Billede */}
                  <div className="pc-img">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      style={p.contain
                        ? { objectFit: 'contain', padding: 14, background: 'var(--off)' }
                        : {}}
                    />
                  </div>

                  {/* Indhold */}
                  <div className="pc-b" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

                    <p style={{
                      fontSize: 12,
                      color: 'var(--ink-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 8,
                    }}>
                      {p.date}
                    </p>

                    <h3>{p.title}</h3>

                    <p style={{ marginBottom: 16 }}>{p.desc}</p>

                    <div className="pt-row" style={{ marginTop: 'auto', marginBottom: 16 }}>
                      {p.tags.map(t => (
                        <span key={t} className="pt">{t}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {p.links.map(l => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={l.primary ? {
                            background: '#3b82f6',
                            color: '#fff',
                            padding: '8px 16px',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: 'none',
                            border: '1px solid #3b82f6',
                          } : {
                            background: 'transparent',
                            color: 'var(--ink-mid)',
                            padding: '7px 14px',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: 'none',
                            border: '1px solid rgba(0,0,0,.18)',
                          }}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>

                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div className="w" style={{ textAlign: 'center', paddingTop: 72, paddingBottom: 72 }}>
          <Reveal><span className="eyebrow">Har du et projekt?</span></Reveal>
          <Reveal delay={60}>
            <h2 className="sh" style={{ margin: '12px 0 14px' }}>
              Lad os snakke<span className="ac">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', fontWeight: 300, marginBottom: 32 }}>
              Åben for freelanceopgaver, studiejobs og samarbejder.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/kontakt" className="btn btn-d">Kontakt mig →</Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
