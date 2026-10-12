import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  FileCheck2,
  Info,
  Monitor,
  Tablet,
} from 'lucide-react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ArticleActions, ArticleNavigation } from './article-navigation'
import {
  requirementGroups,
  specification,
  type RequirementGroup,
} from './requirements'
import s from './system-requirements.module.css'

const title = 'CARE system requirements & procurement specification'
const description =
  'Minimum and recommended device specifications, OS and browser versions, network planning and supplier acceptance criteria for CARE. Versioned proposed procurement baseline.'

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
        alt: 'CARE system requirements and procurement specification',
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

function Note({ children }: { children: ReactNode }) {
  return (
    <div className={s.note}>
      <Info size={19} aria-hidden="true" />
      <div>{children}</div>
    </div>
  )
}

function ComparisonTable({ group }: { group: RequirementGroup }) {
  const versionTable =
    group.id === 'web-browsers' || group.id === 'operating-systems'
  const minimumLabel = versionTable
    ? 'Minimum proposed version'
    : 'Minimum baseline'
  const recommendedLabel =
    group.id === 'acceptance' ? 'Recommended acceptance' : 'Recommended'
  return (
    <>
      <p className={s.scope}>{group.scope}</p>
      <p className={s.groupBasis}>{group.basis}</p>
      <p className={s.tableScrollHint}>
        Scroll the table to compare minimum and recommended specifications.
      </p>
      <div
        className={s.tableWrap}
        tabIndex={0}
        role="region"
        aria-label={`${group.title} comparison table`}
      >
        <table className={s.table}>
          <caption className="sr-only">
            {group.title}: {minimumLabel} and {recommendedLabel}. {group.basis}
          </caption>
          <colgroup>
            <col className={s.itemColumn} />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Specification</th>
              <th scope="col">{minimumLabel}</th>
              <th scope="col">{recommendedLabel}</th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">
                  <span className={s.requirementId}>{row.id}</span>
                  {row.item}
                </th>
                <td data-label={minimumLabel}>{row.minimum}</td>
                <td data-label={recommendedLabel}>{row.recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <details className={s.tableNotes} data-print-expand open>
        <summary>
          Specification notes &amp; conditions{' '}
          <span>{group.rows.filter((row) => row.notes).length} notes</span>
        </summary>
        <dl>
          {group.rows
            .filter((row) => row.notes)
            .map((row) => (
              <div key={row.id}>
                <dt>{row.id}</dt>
                <dd>{row.notes}</dd>
              </div>
            ))}
        </dl>
      </details>
    </>
  )
}

function AdditionalGuidance({ id }: { id: string }) {
  if (id === 'hardware')
    return (
      <p className={s.smallText}>
        Use the recommended column for new clinical and administrative
        workstations. Suppliers may propose equivalent processors, provided they
        disclose the exact model and pass the same{' '}
        <a href="#acceptance">acceptance workload</a>. Thin clients and shared
        virtual desktops need separate session-capacity testing.
      </p>
    )
  if (id === 'mobile-devices')
    return (
      <p className={s.smallText}>
        Choose a role first, then a device. A phone that passes an outreach form
        does not qualify automatically for pharmacy, billing or full-shift
        clinical documentation. iPad models are evaluated by OS eligibility and
        demonstrated performance rather than an assumed RAM specification.
      </p>
    )
  if (id === 'operating-systems')
    return (
      <Note>
        <strong>Support must last beyond delivery.</strong>
        <p>
          Require the supplier to state the security-support end date and
          upgrade plan for the exact model and OS edition. A version available
          today may not cover a three- or five-year contract. The
          three-/five-year support periods are proposed purchasing terms.
        </p>
      </Note>
    )
  if (id === 'web-browsers')
    return (
      <>
        <Note>
          <strong>A versioned snapshot, with an update policy.</strong>
          <p>
            These channel versions were reviewed on{' '}
            <time dateTime={specification.reviewedOn}>12 October 2026</time>.
            Require the latest security patch in a maintained channel at
            delivery. When a channel reaches end of support, move to a
            maintained successor and recheck the affected workflows.
          </p>
        </Note>
        <p className={s.smallText}>
          Enable JavaScript, cookies/site storage and trusted HTTPS. Test PDF
          viewing, downloads, printing, camera/microphone permissions and
          enabled apps on each offered browser/OS combination. CARE’s
          browser-detection rule and an individual library’s browser floor do
          not establish end-to-end compatibility.
        </p>
      </>
    )
  if (id === 'network')
    return (
      <div className={s.calculation}>
        <p className={s.eyebrow}>FACILITY CAPACITY EXAMPLE</p>
        <h3>20 active users. 2 devices on calls.</h3>
        <p>
          Calculate upload and download separately, including an additional
          media allowance for each on-site device on a call. Two local devices
          joining the same meeting count as two endpoints.
        </p>
        <div className={s.formula}>
          Reserved Mbps = 1.25 × (active users × browser allowance + calling
          endpoints × media allowance)
        </div>
        <div className={s.calculationResults}>
          <div>
            <span>Minimum planning allocation</span>
            <strong>60 ↓ / 35 ↑ Mbps</strong>
            <p>
              1.25 × (20 × 2 + 2 × 4) down
              <br />
              1.25 × (20 × 1 + 2 × 4) up
            </p>
          </div>
          <div>
            <span>Recommended allocation</span>
            <strong>145 ↓ / 70 ↑ Mbps</strong>
            <p>
              1.25 × (20 × 5 + 2 × 8) down
              <br />
              1.25 × (20 × 2 + 2 × 8) up
            </p>
          </div>
        </div>
        <p className={s.smallText}>
          This example includes 25% planning headroom and excludes other
          facility traffic. Add those workloads, bulk transfers and actual
          stream/service requirements, then round up to a service tier with
          sufficient measured usable capacity. These allocations are proposed
          budgets, not CARE traffic measurements.
        </p>
      </div>
    )
  if (id === 'peripherals')
    return (
      <p className={s.smallText}>
        Specify quantities by role and location, connectors, drivers,
        consumables and maintenance. Include any adapters in the quoted
        configuration. TeleICU cameras, medical devices, diagnostic imaging and
        local AI require separate integration and performance specifications.
      </p>
    )
  if (id === 'deployment')
    return (
      <>
        <Note>
          <strong>Server capacity needs a deployment annex.</strong>
          <p>
            There is no substantiated universal CARE “users per CPU” ratio. Have
            the supplier submit a priced capacity schedule and demonstrate it
            against the agreed workload. Do not interpret a container resource
            limit or a reference database version as a production sizing
            guarantee.
          </p>
        </Note>
        <p className={s.smallText}>
          The inspected Compose reference selects PostgreSQL 17 and Redis 8; a
          separate Kubernetes reference selects PostgreSQL 18.1. These are
          observed configurations, not a support matrix. The selected CARE
          release and complete dependency manifest must be validated together.
        </p>
        <div className={s.clinicNote}>
          <h3>CARE Clinic is a separate host profile</h3>
          <p>
            This page’s workstation figures are for browser access. If you are
            installing CARE Clinic on a local host, include its installation,
            backup and local-network requirements in the deployment annex.
          </p>
          <Link href="/solutions/care-clinics">
            CARE Clinic installation information{' '}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </>
    )
  if (id === 'acceptance')
    return (
      <div className={s.acceptanceRecord}>
        <FileCheck2 size={22} aria-hidden="true" />
        <div>
          <h3>Attach the evidence to the purchase.</h3>
          <p>
            The acceptance record should identify the supplier, facility, device
            models, exact software builds, test data volume, concurrency,
            measured results, deviations, tester and approving deployment owner.
            Preserve it alongside this specification version.
          </p>
          <a
            href="/system-requirements/procurement.csv"
            download={`care-system-requirements-v${specification.version}.csv`}
          >
            Download the supplier response sheet{' '}
            <Download size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  return null
}

export default function SystemRequirements() {
  const printFooter = `CARE system requirements · Version ${specification.version}`

  return (
    <div className={s.page} id="top">
      <style>{`@media print { @page { @bottom-left { content: ${JSON.stringify(printFooter)}; } } }`}</style>
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
          <span aria-current="page">System requirements</span>
        </nav>
        <div className={s.layout}>
          <aside className={s.sidebar}>
            <ArticleNavigation />
          </aside>
          <article id="article" className={s.article} tabIndex={-1}>
            <header className={s.articleHeader}>
              <p className={s.eyebrow}>
                <span /> CARE · TECHNICAL SPECIFICATION
              </p>
              <h1>
                System requirements
                <br />
                <span>for CARE.</span>
              </h1>
              <p className={s.lede}>
                Minimum and recommended specifications for the devices, software
                and connectivity your care teams rely on. Built for procurement,
                deployment planning and supplier evaluation.
              </p>
              <p className={s.version}>Version {specification.version}</p>
              <div className={s.articleMeta}>
                <a
                  className={s.download}
                  href="/system-requirements/procurement.csv"
                  download={`care-system-requirements-v${specification.version}.csv`}
                >
                  <Download size={15} aria-hidden="true" /> Supplier response
                  sheet <span>CSV</span>
                </a>
                <ArticleActions />
              </div>
            </header>

            <div className={s.quickLinks} aria-label="Quick links">
              <a href="#hardware">
                <Monitor aria-hidden="true" />
                <span>
                  Workstations<span>Minimum vs recommended</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#mobile-devices">
                <Tablet aria-hidden="true" />
                <span>
                  Mobile devices<span>Tablets &amp; phones</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#acceptance">
                <FileCheck2 aria-hidden="true" />
                <span>
                  Supplier acceptance<span>Evidence &amp; sign-off</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <Section
              id="general-requirements"
              number="01"
              title="How to use this specification"
            >
              <p>
                Applies to general CARE browser workflows across hospitals,
                outpatient services, palliative care and other deployments.
                Choose the profile for each role and procure the complete
                working configuration, including required peripherals and
                support.
              </p>
              <div className={s.definitionGrid}>
                <div>
                  <h3>Minimum baseline</h3>
                  <p>
                    The proposed lower purchase specification for the named
                    routine workflows. All applicable minimum conditions and
                    acceptance checks must be met.
                  </p>
                </div>
                <div>
                  <h3>Recommended</h3>
                  <p>
                    The preferred configuration for new purchases, longer
                    service life and multitasking. Retains every applicable
                    minimum requirement and condition. State explicitly if a
                    recommended item is mandatory in your tender.
                  </p>
                </div>
              </div>
              <p className={s.smallText}>
                Hardware, network and performance figures are proposed planning
                targets. Confirm the configuration against the selected CARE
                release and your expected workload before purchase.
              </p>
              <h3 className={s.subsectionTitle}>
                Complete the procurement scope before issue
              </h3>
              <ul className={s.checklist}>
                {[
                  'Record the exact CARE frontend/backend releases or commits, enabled apps and required workflows.',
                  'Specify device quantities by role, peak concurrent active users, expected record volumes and attachment sizes.',
                  'Choose the OS/browser combinations, support period, peripheral models and site connectivity.',
                  'Agree the acceptance workload, server annex where relevant, recovery targets and approving owner.',
                ].map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={s.smallText}>
                Specification notes are part of each requirement. The CSV
                includes every row’s conditions, evidence basis, version and
                supplier response fields. Print/save as PDF includes the notes
                and conditions.
              </p>
            </Section>

            {requirementGroups.map((group, index) => (
              <Section
                key={group.id}
                id={group.id}
                number={String(index + 2).padStart(2, '0')}
                title={group.title}
              >
                <ComparisonTable group={group} />
                <AdditionalGuidance id={group.id} />
              </Section>
            ))}

            <div className={s.helpPanel}>
              <div>
                <span className={s.eyebrow}>PLAN YOUR DEPLOYMENT</span>
                <h2>Match the specification to your facility.</h2>
                <p>
                  Work with your implementation team to qualify devices, size
                  infrastructure and approve the acceptance plan.
                </p>
              </div>
              <Link href="/ecosystem/implementation-partners">
                Find a partner <ArrowUpRight size={17} aria-hidden="true" />
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
