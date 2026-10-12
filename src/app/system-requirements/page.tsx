import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe,
  Info,
  Monitor,
  Wifi,
} from 'lucide-react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ArticleActions, ArticleNavigation } from './article-navigation'
import {
  practicalSpecifications,
  requirementGroups,
  type RequirementGroup,
} from './requirements'
import s from './system-requirements.module.css'

const title = 'CARE browser requirements'
const description =
  'Practical browser, processor, RAM and connection specifications for using CARE on your device, including alongside video calls.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/system-requirements' },
  openGraph: {
    title,
    description,
    url: '/system-requirements',
    type: 'website',
    siteName: 'Open Healthcare Network',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 1920,
        height: 1080,
        alt: 'CARE browser requirements',
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: '@ohcnetwork',
    images: ['/og/ohc-landing-cover.png'],
  },
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className={s.section} aria-labelledby={`${id}-title`}>
      <div className={s.sectionHeading}>
        <span aria-hidden="true">{number}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function RequirementsTable({ group }: { group: RequirementGroup }) {
  return (
    <>
      <p>{group.description}</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <caption className="sr-only">{group.title}: what you need</caption>
          <thead>
            <tr>
              <th scope="col">Requirement</th>
              <th scope="col">What you need</th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.item}</th>
                <td>
                  {row.requirement}
                  {row.guidance && (
                    <p className={s.tableGuidance}>{row.guidance}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function PracticalSpecificationsTable() {
  return (
    <div className={s.comparisonWrap}>
      <table className={s.comparisonTable} role="table">
        <caption className="sr-only">
          Practical specifications for CARE browser use and video calls
        </caption>
        <thead role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">
              Component
            </th>
            <th scope="col" role="columnheader">
              Practical baseline
            </th>
            <th scope="col" role="columnheader">
              Recommended for CARE alongside video calls
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {practicalSpecifications.map((row) => (
            <tr key={row.id} role="row">
              <th scope="row" role="rowheader">
                {row.component}
              </th>
              <td data-label="Practical baseline" role="cell">
                {row.baseline}
              </td>
              <td data-label="Recommended with video calls" role="cell">
                {row.recommended}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SystemRequirements() {
  return (
    <div className={s.page} id="top">
      <a className={s.skipLink} href="#article">
        Skip to article
      </a>
      <div className={s.siteHeader}>
        <Container>
          <Navbar />
        </Container>
      </div>
      <main className={s.shell}>
        <nav aria-label="Breadcrumb" className={s.breadcrumb}>
          <Link href="/">Home</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <Link href="/product/care-core">CARE</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page">Browser requirements</span>
        </nav>
        <div className={s.layout}>
          <aside className={s.sidebar}>
            <ArticleNavigation />
          </aside>
          <article id="article" className={s.article} tabIndex={-1}>
            <header className={s.articleHeader}>
              <p className={s.eyebrow}>
                <span /> CARE · BROWSER GUIDE
              </p>
              <h1>
                Browser requirements
                <br />
                <span>for CARE.</span>
              </h1>
              <p className={s.lede}>
                What you need on your computer, tablet or phone to use CARE in a
                web browser. Check your browser, device, connection and settings
                before you start.
              </p>
              <div className={s.articleMeta}>
                <ArticleActions />
              </div>
            </header>

            <div className={s.quickLinks} aria-label="Quick links">
              <a href="#web-browsers">
                <Globe aria-hidden="true" />
                <span>
                  Browsers<span>Compatibility &amp; updates</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#practical-specifications">
                <Monitor aria-hidden="true" />
                <span>
                  Device specs<span>Processor, RAM &amp; video calls</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#network">
                <Wifi aria-hidden="true" />
                <span>
                  Connection<span>Access while you work</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <Section
              id="general-requirements"
              number="01"
              title="Using CARE in your browser"
            >
              <p>
                Open your organisation’s CARE address in your browser and sign
                in with your CARE account. For everyday records and forms, you
                need a current browser, a suitable device and a reliable
                connection.
              </p>
              <div className={s.note}>
                <Info size={19} aria-hidden="true" />
                <div>
                  <strong>Start with an updated browser.</strong>
                  <p>
                    Chrome is recommended. Keep your device software up to date
                    and allow JavaScript and CARE’s site storage. Printers,
                    cameras and microphones are needed only for features that
                    use them.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="practical-specifications"
              number="02"
              title="Practical specifications"
            >
              <p>
                Suggested specifications for the computer you use to access
                CARE. The recommended configuration gives you more room to use
                CARE while keeping a video call open.
              </p>
              <PracticalSpecificationsTable />
              <div className={s.note}>
                <Info size={19} aria-hidden="true" />
                <div>
                  <strong>
                    Compare processor performance, not just clock speed.
                  </strong>
                  <p>
                    The 2.0 GHz and 2.5 GHz figures are performance guidance,
                    not strict base-frequency requirements. A capable modern
                    laptop processor may have a lower base clock. Check the
                    model, generation, base frequency and maximum boost
                    frequency together.{' '}
                    <a href="https://www.intel.com/content/www/us/en/support/articles/000055639/processors.html">
                      Intel explains why base frequency alone cannot compare
                      processors across generations.
                    </a>
                  </p>
                </div>
              </div>
              <p className={s.smallText}>
                The internet figures are planning targets with spare capacity
                for each device on a video call. On a shared connection, allow
                upload and download capacity for every simultaneous call plus
                CARE, uploads and other traffic. Validate these practical
                targets with your CARE setup and chosen calling service.
              </p>
              <p className={s.smallText}>
                For reference,{' '}
                <a href="https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058323">
                  Zoom’s browser requirements
                </a>{' '}
                list 3.8 Mbps upload and 3.0 Mbps download for 1080p video, and
                recommend at least 8 GB RAM on Windows and macOS. The figures
                above are suggested device and connection targets, not measured
                CARE minimums.
              </p>
            </Section>

            {requirementGroups.map((group, index) => (
              <Section
                key={group.id}
                id={group.id}
                number={String(index + 3).padStart(2, '0')}
                title={group.title}
              >
                <RequirementsTable group={group} />
              </Section>
            ))}

            <Section id="getting-started" number="07" title="Ready to use CARE">
              <p>Check these on the device you will use for your work:</p>
              <ul className={s.checklist}>
                {[
                  'Update your browser and open your organisation’s CARE address.',
                  'Sign in and check that the pages and forms you need are readable and easy to use.',
                  'Check document viewing, downloads and printing if your role uses them.',
                  'Check camera and microphone permissions if you use audio or video features.',
                ].map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <div className={s.helpPanel}>
              <div>
                <span className={s.eyebrow}>NEED HELP?</span>
                <h2>Get help using CARE in your browser.</h2>
                <p>
                  If a page does not load or a feature does not work, contact
                  your organisation’s CARE support team with your device,
                  browser version and the issue you are seeing.
                </p>
              </div>
              <Link href="/contact">
                Contact OHC <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className={s.articleEnd}>
              <a href="#top">Back to top ↑</a>
            </div>
          </article>
        </div>
      </main>
      <Footer showCallToAction={false} />
    </div>
  )
}
