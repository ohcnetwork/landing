'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Marker({
  top,
  offset,
  delay,
}: {
  top: number
  offset: number
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="idle"
      animate={isInView ? 'active' : 'idle'}
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
      className="absolute left-[calc(50%+var(--offset))] size-[28px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-green-500/50"
        />
      </svg>
    </motion.div>
  )
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="absolute inset-0 bg-[url(/map.png)] mask-[linear-gradient(to_bottom,black_50%,transparent)] bg-size-[360px_360px] bg-position-[center_-25px] bg-no-repeat" />
      <div className="absolute inset-0">
        <Marker top={240} offset={-64} delay={0.15} /> {/* Kerala */}
        <Marker top={200} offset={-72} delay={0.15} /> {/* Karnataka */}
        <Marker top={220} offset={-36} delay={0.15} /> {/* Puducherry */}
        <Marker top={190} offset={-40} delay={0.15} /> {/* Andhra Pradesh */}
        <Marker top={70} offset={90} delay={0.15} /> {/* Sikkim */}
        <Marker top={80} offset={110} delay={0.15} /> {/* Assam */}
        <Marker top={85} offset={140} delay={0.15} /> {/* Nagaland */}
        <Marker top={110} offset={110} delay={0.15} /> {/* Meghalaya */}
        <Marker top={115} offset={145} delay={0.15} /> {/* Manipur */}
        <Marker top={150} offset={50} delay={0.15} /> {/* Jharkhand */}
      </div>
    </div>
  )
}
