import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cookie() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_ok')) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => { localStorage.setItem('cookie_ok', 'yes'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookie_ok', 'no');  setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <p className="ck-t">
            Vi bruger cookies til at analysere trafik via Google Analytics.{' '}
            <Link to="/privatpolitik">Læs mere</Link>
          </p>
          <div className="ck-bs">
            <button className="ck-y" onClick={accept}>Acceptér</button>
            <button className="ck-n" onClick={decline}>Afvis</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
