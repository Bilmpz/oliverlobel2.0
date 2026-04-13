// Footer.jsx
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="ft">
      <div className="ft-in">
        <span>© 2026 Oliver Løbel</span>
        <div className="ft-ls">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/privatpolitik">Privatpolitik</Link>
        </div>
        <span>Bygget med <span className="fa">React & Vite</span></span>
      </div>
    </footer>
  )
}

export default Footer
