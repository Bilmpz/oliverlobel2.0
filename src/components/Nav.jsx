import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: '/portfolio',  label: 'Portfolio' },
  { to: '/kontakt',    label: 'Kontakt' },
]

export default function Nav() {
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 })
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const onEnter = (e) => {
    const el = e.currentTarget
    setCursor({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 })
  }

  return (
    <>
      <nav className="nav-wrap">
        <ul
          className="pill-nav"
          onMouseLeave={() => setCursor(p => ({ ...p, opacity: 0 }))}
        >
          
          <motion.div
            className="pill-cursor"
            animate={cursor}
            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
          />

          <li className="pill-item pill-logo" onMouseEnter={onEnter}>
            <Link to="/">OL</Link>
          </li>

          {LINKS.map(link => (
            <li key={link.to} className="pill-item pill-hide-mob" onMouseEnter={onEnter}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}

          <li className="pill-item pill-ham">
            <button
              className={open ? 'open' : ''}
              onClick={() => setOpen(p => !p)}
              aria-label="Åbn menu"
            >
              <span /><span /><span />
            </button>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
