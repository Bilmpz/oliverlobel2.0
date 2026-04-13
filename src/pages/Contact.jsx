import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const FAQ = [
  { q:'Hvem er Oliver Løbel?',    a:'Jeg er en ung, nysgerrig softwarestuderende fra Aalborg Universitet  med en ægte interesse for at bygge ting, der virker - og ser godt ud. Jeg går op i detaljen, hvad enten det er et rent stykke kode eller et interface, brugeren rent faktisk forstår.' },
  { q:'Er du åben overfor nye ting?',           a:'Altid. Teknologi bevæger sig hurtigt, og det gør jeg gerne med. Mit nuværende techstack er det, jeg arbejder med til daglig - men listen ændrer sig, efterhånden som jeg møder nye problemstillinger og bedre løsninger.' },
  { q:'Laver du freelancearbejde?',           a:'Ja! Jeg tager freelanceopgaver løbende, primært websites, webapps og korte udviklingssprint.' },
  { q:'Hvad koster det?',                     a:'Det afhænger af opgavens omfang. Skriv til mig med en beskrivelse, så laver jeg gerne et uforpligtende tilbud.' },
  { q:'Arbejder du remote?',                  a:'Ja, primært remote. Jeg er baseret i Danmark og tilpasser mig gerne til dit setup.' },
  { q:'Kan du hjælpe med et eksisterende projekt?', a:'Absolut. Jeg hopper gerne ind på halvfærdige projekter.' },
]

export default function Contact() {
  useEffect(() => {    
    document.title = 'Kontakt – Oliver Løbel | Freelance Developer'
  }, [])

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess]       = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      
      const res = await fetch('https://formspree.io/f/xjgjvpbb', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSuccess(true)
      else setSubmitting(false)
    } catch { setSubmitting(false) }
  }
  return (
    <main>
      <header className="ph">
        <div className="ph-in">
          <p className="eyebrow">Kontakt</p>
          <h1 className="ph-t">Lad os snakke<span className="ac">.</span></h1>
          <p className="ph-s">Har du et projekt, et spørgsmål så kontakt mig nedenfor</p>
        </div>
      </header>

      <section className="surface-bg">
        <div className="w">
          <div className="cg">
            {/* Form */}
            <Reveal>
              {success ? (
                <div className="f-ok"> &nbsp;Tak for din besked! Jeg vender tilbage inden for 1-2 hverdage.</div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <input type="hidden" name="_subject" value="Ny besked fra oliverlobel.com" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="ff">
                      <label htmlFor="navn">Navn</label>
                      <input id="navn" name="navn" type="text" placeholder="Dit navn" required autoComplete="name" />
                    </div>
                    <div className="ff">
                      <label htmlFor="email">E-mail</label>
                      <input id="email" name="email" type="email" placeholder="din@email.dk" required autoComplete="email" />
                    </div>
                  </div>

                  <div className="ff">
                    <label htmlFor="emne">Emne</label>
                    <select id="emne" name="emne" required defaultValue="">
                      <option value="" disabled>Vælg et emne…</option>
                      <option>Freelanceopgave</option>
                      <option>Studiejob / samarbejde</option>
                      <option>Spørgsmål om et projekt</option>
                      <option>Andet</option>
                    </select>
                  </div>

                  <div className="ff">
                    <label htmlFor="besked">Besked</label>
                    <textarea id="besked" name="besked" placeholder="Fortæl mig lidt om dit projekt…" required />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <button type="submit" className="btn btn-d" disabled={submitting}>
                      {submitting ? 'Sender…' : 'Send besked →'}
                    </button>
                    <p className="f-note">Svar inden for 1-2 hverdage. Ingen spam.</p>
                  </div>
                </form>
              )}
            </Reveal>

            {/* Info cards */}
            <Reveal delay={100}>
              <div className="ic-stack">
                <div className="ic"><div className="ic-ico"></div><h4>E-mail</h4><a href="mailto:oliver.lobel@yahoo.dk">oliver.lobel@yahoo.dk</a></div>
                <div className="ic"><div className="ic-ico"></div><h4>LinkedIn</h4><a href="https://www.linkedin.com/in/oliver-l%C3%B8bel-6a7435369/" target="_blank" rel="noopener">linkedin.com/in/oliver-løbel</a></div>
                <div className="ic"><div className="ic-ico"></div><h4>GitHub</h4><a href="https://github.com/Bilmpz" target="_blank" rel="noopener">github.com/Bilmpz</a></div>
                <div className="ic" style={{ background: 'var(--bg)' }}><div className="ic-ico"></div><h4>Svartid</h4><p style={{ fontSize: 14, color: 'var(--ink-mid)', marginTop: 4 }}>Typisk 1-2 hverdage.<br />Altid åben for et nyt projekt</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="off-bg">
        <div className="w">
          <Reveal><span className="eyebrow">Hvad kan jeg hjælpe med</span></Reveal>
          <Reveal delay={50}><h2 className="sh" style={{ marginBottom: 40 }}>Ofte stillede spørgsmål<span className="ac">?</span></h2></Reveal>
          <div className="tcg">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="tc" style={{ padding: 24 }}>
                  <h4 style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{f.q}</h4>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
