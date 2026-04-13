import { useRef, useState, useLayoutEffect } from 'react'


export default function Reveal({ children, delay = 0, as: Tag = 'div', style = {}, className = '' }) {
  const ref = useRef()
  const [phase, setPhase] = useState('idle')

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 60) {
      setPhase('skip')
      return
    }

    setPhase('hidden')

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPhase('show')
        obs.disconnect()
      }
    }, { rootMargin: '60px' })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const revealStyle =
    phase === 'hidden'
      ? { opacity: 0, transform: 'translateY(26px)', ...style }
      : phase === 'show'
      ? {
          opacity: 1,
          transform: 'none',
          transition: `opacity 0.72s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.72s cubic-bezier(.22,1,.36,1) ${delay}ms`,
          ...style,
        }
      : style  

  return (
    <Tag ref={ref} style={revealStyle} className={className}>
      {children}
    </Tag>
  )
}
