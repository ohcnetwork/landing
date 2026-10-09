'use client'

import { ArrowUpRight, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import styles from './build-on-care.module.css'
import { walkthrough } from './resources'

export function Walkthrough() {
  const [loaded, setLoaded] = useState(false)
  const playerRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (loaded) playerRef.current?.focus()
  }, [loaded])

  return (
    <div>
      <div
        className={styles.videoFrame}
        style={{ aspectRatio: `${walkthrough.width} / ${walkthrough.height}` }}
      >
        {loaded ? (
          <iframe
            ref={playerRef}
            tabIndex={0}
            src={walkthrough.embed}
            title={walkthrough.title}
            width={walkthrough.width}
            height={walkthrough.height}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className={styles.videoButton}
            onClick={() => setLoaded(true)}
            aria-label="Load the Care walkthrough video"
          >
            <span className={styles.videoLabel}>
              CARE / DEVELOPER WALKTHROUGH
            </span>
            <span className={styles.playCircle}>
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
            <span className={styles.videoTitle}>
              See where your idea begins.
            </span>
            <span className={styles.videoHint}>
              Load the walkthrough <ArrowUpRight size={15} aria-hidden="true" />
            </span>
            <span className={styles.videoCorner} aria-hidden="true">
              ↳
            </span>
          </button>
        )}
      </div>
      <div className={styles.videoCaption}>
        <span>
          {loaded
            ? 'Player not loading? Open the video on Loom.'
            : 'Loads Loom only when you choose to watch.'}
        </span>
        <a href={walkthrough.href} target="_blank" rel="noopener noreferrer">
          Watch on Loom <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
