import { motion } from 'framer-motion'
import { useMemo } from 'react'

function PathGroup({ position }) {
  const paths = useMemo(() =>
    Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i*5*position} -${189 + i*6}` +
         `C-${380 - i*5*position} -${189 + i*6}` +
         ` -${312 - i*5*position} ${216 - i*6}` +
         ` ${152 - i*5*position} ${343 - i*6}` +
         `C${616 - i*5*position} ${470 - i*6}` +
         ` ${684 - i*5*position} ${875 - i*6}` +
         ` ${684 - i*5*position} ${875 - i*6}`,
      width:    0.5 + i * 0.03,
      opacity:  Math.min(0.05 + i * 0.012, 0.18),
      duration: 18 + (i % 7) * 2.1,
      delay:    -(i * 0.85),
    }))
  , [position])

  return (
    <>
      {paths.map(p => (
        <motion.path
          key={p.id}
          d={p.d}
          stroke="currentColor"
          fill="none"
          strokeWidth={p.width}
          strokeOpacity={p.opacity}
          strokeDasharray="3000"
          animate={{ strokeDashoffset: [3000, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </>
  )
}

export default function FloatingPaths() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none', overflow: 'hidden',
      color: '#15130e',   
    }}>
      <svg
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <PathGroup position={1} />
        <PathGroup position={-1} />
      </svg>
    </div>
  )
}
