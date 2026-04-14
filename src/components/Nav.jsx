import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/kontakt',   label: 'Kontakt' },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY.current || y < 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to) => location.pathname === to

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 300,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 16,
          pointerEvents: visible ? 'auto' : 'none',
        }}
        animate={{ y: visible ? 0 : -90, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <ul className="pill-nav">

          {/* Logo */}
          <li className="pill-item pill-logo">
            <Link
              to="/"
              style={{
                background: isActive('/') ? 'var(--ink)' : 'transparent',
                color: isActive('/') ? 'var(--bg)' : 'var(--ink)',
                borderRadius: 100,
                transition: 'background .2s, color .2s',
              }}
            >
              OL
            </Link>
          </li>

          {/* Links */}
          {LINKS.map(link => (
            <li key={link.to} className="pill-item pill-hide-mob">
              <Link
                to={link.to}
                style={{
                  background: isActive(link.to) ? 'var(--ink)' : 'transparent',
                  color: isActive(link.to) ? 'var(--bg)' : 'var(--ink)',
                  borderRadius: 100,
                  transition: 'background .2s, color .2s',
                }}
                onMouseEnter={e => {
                  if (!isActive(link.to)) e.currentTarget.style.background = 'rgba(0,0,0,0.07)'
                }}
                onMouseLeave={e => {
                  if (!isActive(link.to)) e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Hamburger */}
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
      </motion.nav>

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