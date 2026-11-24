'use client'

import { ArrowUpRight, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import styles from './build-on-care.module.css'
import { walkthrough } from './resources'

export type WalkthroughLabels = {
  videoTitle: string
  load: string
  label: string
  title: string
  hint: string
  captionIdle: string
  captionLoaded: string
  watchOnLoom: string
}

export function Walkthrough({ labels }: { labels: WalkthroughLabels }) {
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
            title={labels.videoTitle}
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
            aria-label={labels.load}
          >
            <span className={styles.videoLabel}>{labels.label}</span>
            <span className={styles.playCircle}>
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
            <span className={styles.videoTitle}>{labels.title}</span>
            <span className={styles.videoHint}>
              {labels.hint} <ArrowUpRight size={15} aria-hidden="true" />
            </span>
            <span className={styles.videoCorner} aria-hidden="true">
              ↳
            </span>
          </button>
        )}
      </div>
      <div className={styles.videoCaption}>
        <span>{loaded ? labels.captionLoaded : labels.captionIdle}</span>
        <a href={walkthrough.href} target="_blank" rel="noopener noreferrer">
          {labels.watchOnLoom} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
