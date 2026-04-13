import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {                          
    document.title = 'Privatpolitik – Oliver Løbel'
  }, [])

  return (
    <main>
      <header className="ph">
        <div className="ph-in">
          <p className="eyebrow">Jura</p>
          <h1 className="ph-t" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>Privatpolitik<span className="ac">.</span></h1>
          <p className="ph-s">Sidst opdateret: april 2026</p>
        </div>
      </header>
      <div className="prose">
        <h2>Hvem er vi?</h2>
        <p>Hjemmesiden drives af Oliver Løbel (Oliver Loebel), softwarestuderende og freelance developer. Kontakt: <a href="mailto:oliver.lobel@yahoo.dk">oliver.lobel@yahoo.dk</a>.</p>
        <h2>Hvilke data indsamler vi?</h2>
        <p>Vi indsamler kun data du aktivt giver os, samt anonymiserede brugsdata via Google Analytics:</p>
        <ul>
          <li>Kontaktformular: navn, e-mail og besked - bruges kun til at besvare henvendelsen.</li>
          <li>Google Analytics: anonymiserede sidevisninger og trafikkilder. IP anonymiseres inden lagring.</li>
        </ul>
        <h2>Cookies</h2>
        <ul>
          <li>Google Analytics, statistikcookies, levetid op til 2 år. Kan afvises via banneret.</li>
          <li><strong>cookie_ok</strong> – gemmer din cookieindstilling i localStorage. Ingen persondata.</li>
        </ul>
        <h2>Deling af data</h2>
        <ul>
          <li><strong>Formspree</strong> – modtager kontaktformularbeskeder sikkert. <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener">Privatpolitik →</a></li>
          <li><strong>Google Analytics</strong> – anonymiserede data i overensstemmelse med EU's standardkontraktbestemmelser.</li>
        </ul>
        <h2>Dine rettigheder</h2>
        <ul>
          <li>Indsigt i hvilke oplysninger vi har om dig.</li>
          <li>Berigtigelse af ukorrekte oplysninger.</li>
          <li>Sletning ("retten til at blive glemt").</li>
          <li>Klage til Datatilsynet (<a href="https://www.datatilsynet.dk" target="_blank" rel="noopener">datatilsynet.dk</a>).</li>
        </ul>
        <p>Kontakt mig på <a href="mailto:oliver.lobel@yahoo.dk">oliver.lobel@yahoo.dk</a> for at udøve dine rettigheder.</p>
        <h2>Ændringer</h2>
        <p>Denne privatpolitik kan opdateres løbende. Den seneste version er altid tilgængelig her.</p>
      </div>
    </main>
  )
}
