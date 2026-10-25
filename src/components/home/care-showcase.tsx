'use client'

import styles from '@/app/home.module.css'
import { ArrowUpRight, Hospital, Laptop, Microscope } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, type KeyboardEvent } from 'react'

const workflows = [
  {
    id: 'clinical',
    label: 'Clinical care',
    icon: Hospital,
    image: '/screenshots/hmis-encounter-overview.jpeg',
    alt: 'CARE clinical encounter interface showing patient notes, observations, and care workflows.',
    title: 'The whole picture. In one place.',
    description:
      'Bring patient records, encounters, and clinical notes into a connected workspace.',
    href: '/solutions/hospital-management',
  },
  {
    id: 'labs',
    label: 'Labs & diagnostics',
    icon: Microscope,
    image: '/core/posters/lab_management.jpg',
    alt: 'CARE laboratory management interface for diagnostic workflows.',
    title: 'From request to result.',
    description:
      'Connect laboratory requests and results with the people delivering care.',
    href: '/product/apps-integrations',
  },
  {
    id: 'clinic',
    label: 'Your own clinic',
    icon: Laptop,
    image: '/care-desktop/control-panel.webp',
    alt: 'CARE Clinic desktop control panel with local installation and service controls.',
    title: 'Your practice. Your infrastructure.',
    description:
      'Run CARE on your own computer, with a simple control panel to manage your clinic system.',
    href: '/solutions/care-clinics',
  },
]

export function CareShowcase() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % workflows.length
    else if (event.key === 'ArrowLeft')
      next = (index - 1 + workflows.length) % workflows.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = workflows.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }
  return (
    <div className={styles.showcase}>
      <div className={styles.showcaseToolbar}>
        <div className={styles.windowDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div
          className={styles.workflowTabs}
          role="tablist"
          aria-label="Explore CARE workflows"
        >
          {workflows.map(({ id, label, icon: Icon }, index) => (
            <button
              key={id}
              ref={(node) => {
                tabs.current[index] = node
              }}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={active === index}
              aria-controls={`panel-${id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <span className={styles.showcaseBrand}>
          CARE <span>↗</span>
        </span>
      </div>
      {workflows.map((workflow, index) => (
        <div
          key={workflow.id}
          role="tabpanel"
          id={`panel-${workflow.id}`}
          aria-labelledby={`tab-${workflow.id}`}
          tabIndex={0}
          hidden={active !== index}
        >
          <div
            className={`${styles.productImage} ${index === 2 ? styles.clinicImage : ''}`}
          >
            <img
              key={workflow.id}
              src={workflow.image}
              alt={workflow.alt}
              width="1600"
              height="1000"
              loading="lazy"
            />
          </div>
          <div className={styles.showcaseDescription}>
            <div>
              <h3>{workflow.title}</h3>
              <p>{workflow.description}</p>
            </div>
            <Link href={workflow.href}>
              Explore workflow <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
