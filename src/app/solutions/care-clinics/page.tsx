import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { clsx } from 'clsx'
import {
  AlignLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Database,
  FileText,
  Key,
  Lock,
  QrCode,
  Server,
  Shield,
  User,
  Wifi,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import { AutoplayVideo } from './autoplay-video'
import s from './care-desktop.module.css'
import { ClinicDownloadButton, ClinicDownloadProvider } from './download-button'
import { CLINIC_RELEASES_URL, CLINIC_REPO_URL } from './release-download'

const pageTitle = 'CARE Clinic: Free, Open-Source Clinic Management Software'
const pageDescription =
  'CARE Clinic is free, open-source clinic management software for small clinics: patient records, appointments, prescriptions, billing and encrypted backups on your own computer. Core workflows run on the clinic network after online setup.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'CARE Clinic',
    'free clinic management software',
    'open source clinic software',
    'clinic EMR',
    'offline clinic software',
    'OPD management software',
    'small clinic software',
    'clinic billing software',
    'patient records software',
    'self-hosted EMR',
  ],
  alternates: {
    canonical: '/solutions/care-clinics',
  },
  openGraph: {
    title: pageTitle,
    description:
      'The whole clinic on one computer. No licence fees, no subscription, and patient records on a computer your clinic controls.',
    url: '/solutions/care-clinics',
    images: [
      {
        url: '/og/care-desktop.jpg',
        width: 1200,
        height: 630,
        alt: 'CARE Clinic: free clinic software. Your data. Your control.',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description:
      'Free, open-source clinic software that runs on your clinic’s own computer.',
    images: ['/og/care-desktop.jpg'],
  },
}

const REPO_URL = CLINIC_REPO_URL
const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`
const DOCS_URL = `${REPO_URL}/blob/main/docs/README.md`

const highlights = [
  '₹0 for the software',
  'Open source, MIT licence',
  'Works offline after setup',
  'Encrypted automatic backups',
  'Every desk on the clinic Wi-Fi',
  'No telemetry',
  'Mac and Windows',
]

const overviewTiles: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Server,
    title: 'Records on your computer',
    text: 'Your clinic holds the database and the backups.',
  },
  {
    icon: Wifi,
    title: 'Every desk connected',
    text: 'Staff computers join over the clinic Wi-Fi.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    text: 'After setup, core workflows need a running host and clinic network, not internet.',
  },
  {
    icon: Database,
    title: 'Backed up every 24 hours',
    text: 'While the backup service runs and its storage is accessible. Restore is built in.',
  },
]

const careSteps = [
  {
    label: 'Consultation',
    title: 'Notes that keep up with you.',
    text: 'Clinical notes, vitals, diagnoses, observations and advice, on forms configured for your clinic and specialty.',
    video: 'clinical_data_capture',
    poster: '/core/posters/clinical_data_capture.jpg',
    caption:
      'Structured forms, observations, notes, terminology and clinical context captured inside the longitudinal record',
  },
  {
    label: 'Forms and questionnaires',
    title: 'Forms that fit your practice.',
    text: 'Configure questionnaires and clinical forms for your clinic and specialty, without changing Care’s core.',
    video: 'Customizable_EMR_Forms',
    poster: '/core/posters/Customizable_EMR_Forms.jpg',
    caption:
      'Clinic teams shaping forms and workflows in Care without forking the product',
  },
  {
    label: 'Investigations',
    title: 'Orders and results, on the record.',
    text: 'Lab orders and results linked to the visit, so a report is never lost in a drawer.',
    video: 'lab_management',
    poster: '/core/posters/lab_management.jpg',
    caption:
      'Orders, samples, diagnostic reports, values, units and results flowing back into the same patient timeline',
  },
  {
    label: 'Pharmacy and stock',
    title: 'Dispense and count.',
    text: 'Dispensing linked to prescriptions, with stock levels, expiry review and alerts.',
    video: 'pharmacy_and_inventory',
    poster: '/care-desktop/posters/pharmacy_and_inventory.jpg',
    caption:
      'Prescriptions connecting to dispensing, stock movement, substitutions, alerts and inventory visibility',
  },
  {
    label: 'Billing',
    title: 'Bill at the desk.',
    text: 'Service charges, invoices, payments and receipts connected to the visit.',
    video: 'billing_and_accounting',
    poster: '/care-desktop/posters/billing_and_accounting.jpg',
    caption:
      'Invoices, payments, coverage and reconciliation staying connected to real care activity',
  },
  {
    label: 'Reports',
    title: 'Reports, from the same record.',
    text: 'Generate reports from recorded clinical data using the templates configured for your clinic. Available reports depend on your setup.',
    video: 'dynamic_reports',
    poster: '/care-desktop/report-templates.webp',
    caption:
      'Clinical and operational reports generated from the same structured workflows',
  },
]

const boxItems: {
  icon: LucideIcon
  label: string
  title: string
  text: string
}[] = [
  {
    icon: Calendar,
    label: 'Appointments',
    title: 'The day, at a glance.',
    text: 'Appointment slots, walk-ins and a visit queue, so reception always knows who is next.',
  },
  {
    icon: User,
    label: 'Registration',
    title: 'Every patient, one record.',
    text: 'Demographics, identifiers, contact details and patient search, with each visit added to the same timeline.',
  },
  {
    icon: FileText,
    label: 'Prescriptions',
    title: 'Clear and complete.',
    text: 'Medication requests with dosage instructions, ready to print or hand to dispensing.',
  },
  {
    icon: Clock,
    label: 'Follow-up',
    title: 'The next visit, already planned.',
    text: 'Record follow-up advice and plan the next appointment. Patient SMS or push reminders need compatible plugins and configured services; they are not included by default.',
  },
]

const plugins: {
  icon: LucideIcon
  name: string
  title: string
  text: string
  note: string
}[] = [
  {
    icon: AlignLeft,
    name: 'CARE Onboarding',
    title: 'A guided start for your clinic.',
    text: 'Walks a new clinic through its location, facility, departments, staff, numbering, questionnaires and report templates.',
    note: 'On by default for new clinics; needs internet',
  },
]

const dataPoints: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: 'No telemetry.',
    text: 'CARE Clinic itself has no usage analytics or crash reporting. Installation downloads and automatic update checks use internet. Dependencies, hosted plugins and configured providers have their own network activity and privacy policies.',
  },
  {
    icon: Lock,
    title: 'Encrypted across the clinic.',
    text: 'After device setup, staff reach CARE over HTTPS using a clinic-issued certificate. Connect only on a trusted clinic network and complete certificate approval. A web application firewall adds another layer of protection.',
  },
  {
    icon: Database,
    title: 'Backed up every 24 hours.',
    text: 'Backups run at a 24-hour interval while the backup service is running, not at a fixed nightly time. Keep the chosen destination accessible. Set retention, back up now or restore from a file; keep an off-device copy and test a restore.',
  },
  {
    icon: Key,
    title: 'Two recovery materials. Different jobs.',
    text: 'Save and verify the private PEM recovery file to decrypt backups. Six single-use codes reset the CARE Clinic admin password, not staff logins, and cannot decrypt backups. Keep both secure and separate from the host and backups. Protected settings, restore and uninstall require the admin password.',
  },
]

const setupSteps = [
  {
    title: 'Download.',
    text: 'Get CARE Clinic for Mac or Windows.',
    image: '/care-desktop/first-run.webp',
    width: 2190,
    height: 1370,
    alt: 'The first-run choice: start setup or connect to an existing clinic, with earlier CARE Desktop branding',
  },
  {
    title: 'Set up the clinic computer.',
    text: 'Choose a clinic address and backup folder, save and verify the PEM backup recovery file, then set an admin password and save six recovery codes before installation. Setup downloads required software and builds CARE; keep the computer online and follow any permission prompts.',
    image: '/care-desktop/setup-review.webp',
    width: 2296,
    height: 1606,
    alt: 'Setup review with verified backup recovery file and saved admin recovery codes before installation; personal backup path redacted',
  },
  {
    title: 'Connect the team.',
    text: 'On a trusted clinic network, choose “Connect to an existing server on the local network” and find the clinic by its address. Review it, choose Connect and approve certificate setup. Phones and tablets use the QR setup page and follow its certificate instructions.',
    image: '/care-desktop/client-connect.webp',
    width: 2188,
    height: 1370,
    alt: 'CARE Clinic client discovery screen asking for the clinic address before connecting',
  },
  {
    title: 'Set up your clinic.',
    text: 'With internet access, open CARE Onboarding in the CARE web app. It guides facility, department, staff, numbering, clinical form and report-template setup before you start seeing patients.',
    image: '/care-desktop/onboarding.webp',
    width: 2070,
    height: 1398,
    alt: 'CARE Onboarding Get started screen showing the ten clinic setup steps, before facility setup begins',
  },
]

const comparisonRows: [string, string, string][] = [
  [
    'Best for',
    'One small clinic on one computer',
    'Clinic networks, hospitals and programmes across sites',
  ],
  [
    'Where it runs',
    'Your clinic’s own computer',
    'Cloud, on-premise or hybrid, run with an implementation partner',
  ],
  [
    'Software price',
    '₹0, MIT licence',
    'Open source; deployment, hosting and support arranged with a partner',
  ],
  [
    'Internet',
    'For setup, updates, hosted plugins and online services; local care needs the running host and LAN',
    'Depends on deployment: cloud access needs internet; on-premise workflows may use a local network',
  ],
  [
    'Team access',
    'Staff computers, phones and tablets on the clinic network',
    'Devices and remote access depend on deployment, network and access controls',
  ],
  [
    'Backups',
    'Encrypted backups every 24 hours while the service runs, on accessible storage you choose',
    'Managed by the deployment',
  ],
]

const specs: [string, React.ReactNode][] = [
  ['Platforms', 'macOS (Apple Silicon and Intel), Windows 64-bit'],
  [
    'Installers',
    '.dmg for macOS, -setup.exe for Windows. In v0.1.9: macOS notarized; Windows unsigned. Check each release’s manifest.',
  ],
  [
    'Staff devices',
    'Mac and Windows computers running CARE Clinic in client mode; iOS and Android through the browser on the clinic network',
  ],
  [
    'Network',
    <>
      One clinic Wi-Fi or wired network; the clinic is reached at{' '}
      <span className={clsx('font-mono', 'text-[13.5px] font-semibold')}>
        https://&lt;clinic&gt;.local
      </span>
    </>,
  ],
  [
    'Internet',
    'Installation, updates, hosted plugins and configured online services',
  ],
  [
    'Backups',
    'Encrypted, every 24 hours while the service runs and storage is accessible; configurable retention, backup-now and restore',
  ],
  [
    'Security',
    'HTTPS after clinic certificate setup, web application firewall, admin password, six reset codes and a separate PEM backup recovery file',
  ],
  [
    'System requirements',
    'Recommended: 8 GB RAM, 4-core processor and 30 GB free storage.',
  ],
  [
    'Telemetry',
    'None in CARE Clinic itself; dependencies, plugins and providers have separate policies',
  ],
  ['Licence', 'MIT'],
  [
    'Updates',
    'Separate CARE software and CARE Clinic application updates in Updates; plugin changes in Plugins',
  ],
  [
    'Source',
    <a
      key="source"
      href={REPO_URL}
      className={clsx(
        'font-mono',
        'text-[13.5px] font-semibold text-[#046c4e] hover:text-[#014737]',
      )}
    >
      github.com/ohcnetwork/care_clinic
    </a>,
  ],
]

const faqs = [
  {
    question: 'Is CARE Clinic really free?',
    answer:
      'Yes. The CARE Clinic software is free to download and use under the MIT licence. There is no software subscription, no licence fee and no trial period that ends.',
  },
  {
    question: 'Why is it free?',
    answer:
      'CARE is built as open-source healthcare infrastructure. Open Healthcare Network Foundation releases CARE Clinic under the MIT licence so clinics and their technical partners can use and adapt the software without buying a licence.',
  },
  {
    question: 'What might still cost money?',
    answer:
      'A suitable computer, backup storage, installation help, support and external services such as SMS or email may cost money. Those costs are separate from the software. Check the terms and prices of any service you choose to add.',
  },
  {
    question: 'Where are my patient records stored?',
    answer:
      'The clinic database and files are stored on the computer that hosts CARE Clinic, and backups go to the location you choose. Your clinic manages access and backups. Services you switch on, such as SMS or email, send information to the provider you configured, so review each one before using it.',
  },
  {
    question: 'Does open source mean patient records are public?',
    answer:
      'No. Open source refers to the software’s code, which anyone can read on GitHub. Your clinic’s patient records stay on your clinic’s computer, and your clinic still needs to set up access properly and protect its computers, network and backups.',
  },
  {
    question: 'Can my whole team use it?',
    answer:
      'Yes. One computer hosts the clinic, and other staff computers connect over the clinic’s local network using CARE Clinic in client mode. Phones and tablets connect through a setup page on the clinic network and complete certificate trust. There is no per-user licence fee; capacity depends on the host computer, network and configuration.',
  },
  {
    question: 'Does CARE Clinic work without internet?',
    answer:
      'Core workflows run without internet after setup while the host is awake, running CARE and reachable over the clinic network. Staff devices are not independent offline replicas. Installation, updates, hosted plugins and configured online services need internet.',
  },
  {
    question: 'Which computers does it run on?',
    answer:
      'The host computer runs Windows 64-bit or macOS (Apple Silicon or Intel). Staff computers run the same app in client mode on Windows or macOS, and phones and tablets connect through a browser on the clinic network.',
  },
  {
    question: 'Where do I download CARE Clinic?',
    answer:
      'The Mac and Windows buttons use JavaScript and the public GitHub API to request the matching latest installer. If the API is unavailable, JavaScript is disabled or the browser blocks the download, use “Download from GitHub releases” beside the buttons and select the installer there.',
  },
  {
    question: 'Who is responsible for backups?',
    answer:
      'Your clinic or its technical partner. Encrypted backups run every 24 hours while the backup service runs and the destination is accessible, not at a fixed time of night. Keep backups and the private PEM recovery file safely off-device, separately from each other, and test a restore. Admin reset codes cannot decrypt backups.',
  },
  {
    question: 'Can I move my records to another system later?',
    answer:
      'Local access to the database, open-source code and your own backups give your clinic control over its system. Moving records into a different product is a separate migration task that depends on the formats and workflows involved.',
  },
  {
    question: 'Is CARE Clinic the same as CARE?',
    answer:
      'CARE Clinic packages the open-source CARE platform for a single clinic computer. Partner-managed CARE deployments also serve hospitals and community-care programmes. CARE Clinic brings the platform to a small clinic without a hosted account or a software licence fee; available workflows depend on configuration.',
  },
  {
    question: 'Does CARE Clinic collect usage data?',
    answer:
      'CARE Clinic itself has no telemetry, analytics or crash reporting. It makes installation downloads and automatic update checks. Dependencies, hosted frontend plugins and configured online providers have separate network activity and privacy policies; this is not a no-telemetry promise for the entire stack.',
  },
  {
    question: 'Is CARE Clinic OPD management software?',
    answer:
      'Yes, in the sense that it covers outpatient clinic work: registration, appointments, consultations, prescriptions and billing. It is built for a small clinic running on one computer. Hospitals with wards and multiple departments should look at the hosted Care platform.',
  },
  {
    question: 'What are plugins?',
    answer:
      'Plugins extend CARE. The updated source catalog contains CARE Onboarding only, enabled by default for new clinics and loaded from an internet host. The latest published release checked on 4 October 2026, v0.1.9, still has the older catalog. Previously saved and custom plugins are preserved, not automatically uninstalled. A technical partner can configure compatible plugins and their required dependencies or services.',
  },
  {
    question: 'How do updates and plugin changes work?',
    answer:
      'Updates separates CARE backend/frontend builds from CARE Clinic application releases. CARE builds follow configured source branches: Install now may interrupt staff; Later queues the prepared update for the next clinic start. App updates can leave CARE running and may open an OS installer. The plugin catalog ships with the app; after an upgrade, catalog source changes reach saved plugins on their next Save and apply. Staff browsers fetch hosted plugin bundles separately.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CARE Clinic',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'macOS, Windows',
    url: 'https://ohc.network/solutions/care-clinics',
    downloadUrl: 'https://ohc.network/solutions/care-clinics#download',
    description: pageDescription,
    license: 'https://opensource.org/license/mit/',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Patient registration, appointments and visit queues',
      'Consultation notes, configurable forms and prescriptions',
      'Lab orders and results, pharmacy and stock',
      'Billing, invoices, payments and receipts',
      'Encrypted backups every 24 hours while the backup service runs and storage is accessible',
      'Core workflows on the local network after setup, with the host awake and running CARE',
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Open Healthcare Network Foundation',
      url: 'https://ohc.network',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

const h2Class =
  'text-[clamp(36px,4.4vw,64px)] leading-[1.02] font-medium tracking-normal text-balance'
const leadClass =
  'text-[clamp(18px,1.5vw,21px)] leading-[1.6] text-pretty text-[#374151]'
const eyebrowClass =
  'font-mono text-xs font-semibold tracking-[0.18em] text-[#046c4e] uppercase'
const tileHover =
  'transition duration-400 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(1,71,55,0.35)]'
const paneHover =
  'transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5'
const mintButton =
  'inline-flex items-center gap-2.5 rounded-[14px] bg-white font-semibold text-[#014737] no-underline shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-colors hover:bg-[#def7ec]'
const glassButton =
  'inline-flex items-center gap-2.5 rounded-[14px] border border-white/25 bg-white/10 font-bold text-white no-underline transition-colors hover:bg-white/20'

const gridLines = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
}

const shineText =
  'bg-[linear-gradient(90deg,#84e1bc_0%,#ffffff_40%,#31c48d_60%,#84e1bc_100%)] bg-clip-text text-transparent'

function Shell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="px-6 lg:px-8">
      <div className={clsx('mx-auto max-w-7xl', className)}>{children}</div>
    </div>
  )
}

function Glow({
  className,
  strength = 0.28,
}: {
  className?: string
  strength?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx('pointer-events-none absolute', className)}
      style={{
        background: `radial-gradient(ellipse at 50% 70%, rgba(49,196,141,${strength}), rgba(49,196,141,0) 68%)`,
      }}
    />
  )
}

function Blob({
  className,
  color = '49,196,141',
  strength = 0.4,
}: {
  className?: string
  color?: string
  strength?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx('pointer-events-none absolute rounded-full', className)}
      style={{
        background: `radial-gradient(circle, rgba(${color},${strength}), rgba(${color},0) 65%)`,
      }}
    />
  )
}

function Chip({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'absolute flex items-center gap-2.5 rounded-full bg-white/96 px-3.5 py-2.5 text-[13.5px] font-bold whitespace-nowrap text-[#014737] shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

function LiveDot({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        s.pulse,
        'block size-2.5 rounded-[3px] bg-[#0d9f6e]',
        className,
      )}
    />
  )
}

function IconBadge({
  icon: Icon,
  dark = false,
  className,
}: {
  icon: LucideIcon
  dark?: boolean
  className?: string
}) {
  return (
    <span
      className={clsx(
        'flex shrink-0 items-center justify-center',
        dark
          ? 'size-12 rounded-[14px] bg-[#014737] text-[#84e1bc]'
          : 'size-11 rounded-xl bg-[#def7ec] text-[#046c4e]',
        className,
      )}
    >
      <Icon className="size-[22px]" strokeWidth={2} aria-hidden="true" />
    </span>
  )
}

function ArrowLink({
  href,
  children,
  icon: Icon = ArrowUpRight,
  className,
}: {
  href: string
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}) {
  return (
    <a
      href={href}
      className={clsx(
        'inline-flex items-center gap-1.5 font-bold text-[#046c4e] no-underline hover:text-[#014737]',
        className,
      )}
    >
      {children}
      <Icon className="size-[15px]" strokeWidth={2.4} aria-hidden="true" />
    </a>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(180deg, #031f17 0%, #014737 58%, #052a20 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Blob
          strength={0.55}
          className={clsx(
            s.blob,
            '-top-[220px] -left-40 size-[720px] blur-[40px]',
          )}
        />
        <Blob
          color="132,225,188"
          strength={0.38}
          className={clsx(
            s.blobAlt,
            'top-40 -right-[260px] size-[820px] blur-[50px]',
          )}
        />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_30%,#000_10%,transparent_70%)]"
          style={gridLines}
        />
      </div>

      <Shell className="relative z-[1] flex flex-col items-center gap-14 pt-16 pb-24 sm:pt-20 lg:gap-16 lg:pb-28">
        <div className="flex max-w-[1080px] flex-col items-center gap-6 text-center">
          <p
            className={clsx(
              s.intro,
              s.delay1,
              'inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 py-2 pr-3.5 pl-2.5 text-[13.5px] font-semibold text-[#def7ec]',
            )}
          >
            <span
              className={clsx(
                s.pulse,
                'block size-[9px] rounded-full bg-[#31c48d]',
              )}
            />
            CARE Clinic
            <span
              aria-hidden="true"
              className="hidden text-[#84e1bc] sm:inline"
            >
              ·
            </span>
            <span className="hidden sm:inline">
              The open-source Care platform, on your clinic’s own computer
            </span>
          </p>
          <h1
            className={clsx(
              s.intro,
              s.delay2,
              'font-display text-[clamp(44px,6vw,88px)] leading-[0.94] font-bold tracking-normal text-balance text-white',
            )}
          >
            Free clinic software.{' '}
            <span className={clsx(s.shine, shineText, 'block')}>
              Your data. Your control.
            </span>
          </h1>
          <p
            className={clsx(
              s.intro,
              s.delay3,
              'max-w-[700px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-pretty text-[#bdf0d9]',
            )}
          >
            The whole clinic on one computer. No licence fees, no subscription,
            and patient records on a computer your clinic controls.
          </p>
          <div
            className={clsx(
              s.intro,
              s.delay4,
              'mt-2.5 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center',
            )}
          >
            <ClinicDownloadButton
              platform="mac"
              className={clsx(
                mintButton,
                'h-14 justify-center px-7 text-[17px]',
              )}
            >
              Download for Mac
            </ClinicDownloadButton>
            <ClinicDownloadButton
              platform="windows"
              className={clsx(
                glassButton,
                'h-14 justify-center px-4 text-base sm:px-6',
              )}
            >
              Download for Windows
            </ClinicDownloadButton>
          </div>
          <a
            href={CLINIC_RELEASES_URL}
            className="text-sm text-[#bdf0d9] underline underline-offset-4 hover:text-white"
          >
            Download from GitHub releases
          </a>
          <p
            className={clsx(
              s.intro,
              s.delay4,
              'text-sm font-semibold tracking-[0.02em] text-[#84e1bc]',
            )}
          >
            Free. Open source. Built on Care.
          </p>
        </div>

        <div
          className={clsx(s.intro, s.delay5, 'relative w-full max-w-[1100px]')}
        >
          <Glow
            strength={0.4}
            className="-inset-[60px] rounded-[60px] blur-[34px]"
          />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[18px] border border-white/15 bg-[#04241b] shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)] sm:rounded-[26px]',
            )}
          >
            <img
              src="/care-desktop/control-panel.webp"
              width={2296}
              height={1606}
              fetchPriority="high"
              alt="CARE Clinic Overview: clinic status, local address, phone connection and encrypted backup summary"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              Overview screenshot from version 0.1.8, with earlier CARE Desktop
              branding.
            </figcaption>
          </figure>
          <Chip
            className={clsx(s.floaty, '-top-[22px] left-3 sm:-left-[18px]')}
          >
            <LiveDot />
            Clinic address:{' '}
            <span className={clsx('font-mono', 'font-semibold')}>
              care.local
            </span>
          </Chip>
          <Chip
            className={clsx(
              s.floatyAlt,
              'right-3 -bottom-[22px] sm:-right-[14px]',
            )}
          >
            <Database className="size-4" strokeWidth={2.4} aria-hidden="true" />
            Encrypted backups · your storage
          </Chip>
        </div>
        <p className="max-w-[760px] text-center text-sm leading-relaxed text-[#bdf0d9]">
          Screenshots include version 0.1.8 with the earlier CARE Desktop name.
          Interface details vary by version; personal file paths are redacted.
        </p>
      </Shell>
    </section>
  )
}

function Ticker() {
  return (
    <section
      aria-label="Highlights"
      className={clsx(
        s.tickerWrap,
        'relative overflow-hidden border-y border-white/8 bg-[#031f17] text-[#def7ec]',
      )}
    >
      <div
        className={clsx(
          s.ticker,
          'flex w-max items-center py-[18px] text-[15px] font-semibold whitespace-nowrap',
        )}
      >
        {[...highlights, ...highlights].map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= highlights.length ? true : undefined}
            className="flex items-center gap-3.5 pr-12"
          >
            <span className="block size-2 rounded-[2px] bg-[#31c48d]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section id="overview" className="bg-white">
      <Shell className="flex flex-col gap-12 py-20 lg:gap-14 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2 lg:items-start',
          )}
        >
          <h2 className={h2Class}>The whole clinic. One computer.</h2>
          <p className={leadClass}>
            CARE Clinic is free, open-source clinic management software for
            small clinics. One installer sets up the whole system on a clinic
            computer, from patient records, appointments, prescriptions and
            billing to the database, file storage and automatic encrypted
            backups. Staff connect from other computers on the clinic Wi-Fi, and
            the core clinic keeps working without internet after online setup,
            while the host stays awake, runs CARE and is reachable on the local
            network.
          </p>
        </div>

        <div
          className={clsx(
            s.reveal,
            'grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          <div
            className={clsx(
              tileHover,
              'relative flex flex-col justify-end gap-2 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#014737,#03543f)] p-7 text-white sm:col-span-2',
            )}
          >
            <span
              aria-hidden="true"
              className="absolute -top-[30px] right-2.5 font-display text-[200px] leading-none font-bold text-white/8"
            >
              ₹0
            </span>
            <span className="relative text-[22px] font-semibold">
              ₹0 for the software
            </span>
            <span className="relative text-[15.5px] leading-[1.5] text-[#bdf0d9]">
              No licence fee. No subscription.
            </span>
          </div>
          {overviewTiles.map((tile) => (
            <div
              key={tile.title}
              className={clsx(
                tileHover,
                'flex flex-col justify-between gap-[18px] rounded-[22px] bg-[#f4f7f5] p-[26px]',
              )}
            >
              <IconBadge icon={tile.icon} />
              <span className="flex flex-col gap-1.5">
                <span className="text-[19px] font-semibold">{tile.title}</span>
                <span className="text-[15px] leading-[1.5] text-[#5b6660]">
                  {tile.text}
                </span>
              </span>
            </div>
          ))}
          <div
            className={clsx(
              tileHover,
              'flex flex-col justify-between gap-[18px] rounded-[22px] bg-[#111827] px-7 py-[26px] text-white sm:col-span-2',
            )}
          >
            <span className="flex flex-col gap-1.5">
              <span className="text-[19px] font-semibold">Open source</span>
              <span className="text-[15px] leading-[1.5] text-[#b0aea5]">
                MIT licence. Source on GitHub.
              </span>
            </span>
            <span
              className={clsx(
                'font-mono',
                'flex items-center gap-3 overflow-hidden rounded-xl bg-white/8 px-4 py-3 text-[13.5px] font-medium whitespace-nowrap text-[#84e1bc]',
              )}
            >
              <span className="text-[#5e5d59]">$</span>
              <span className="truncate">
                git clone github.com/ohcnetwork/care_clinic
              </span>
            </span>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function Price() {
  return (
    <section
      id="price"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #031f17, #014737 70%)' }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[200px] -right-[100px] size-[700px] blur-[50px]',
        )}
      />
      <Shell className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <h2
          className={clsx(
            s.reveal,
            'flex flex-col gap-2 leading-[0.92] font-medium tracking-normal',
          )}
        >
          <span
            className={clsx(
              s.shine,
              shineText,
              'font-display text-[clamp(120px,15vw,220px)] font-bold',
            )}
          >
            ₹0
          </span>
          <span className="text-[clamp(30px,3.4vw,50px)] text-white">
            for the software.
          </span>
        </h2>
        <div className={clsx(s.reveal, 'flex flex-col gap-6')}>
          <p className="text-[19px] leading-[1.6] text-pretty text-[#def7ec]">
            Free clinic management software, in the plain sense: nothing to pay
            to download, install or keep using. There is no licence fee, no
            software subscription and no trial that ends. Open Healthcare
            Network Foundation releases it under the MIT licence.
          </p>
          <p className="rounded-[14px] border border-white/18 bg-white/6 px-[18px] py-4 text-sm leading-[1.55] text-[#bdf0d9]">
            The software is free. A computer, backup storage, installation help,
            support and connected services such as SMS may cost money.
          </p>
        </div>
      </Shell>
    </section>
  )
}

function CareInMotion() {
  return (
    <section id="care" className="bg-white">
      <Shell className="flex flex-col gap-16 py-20 lg:gap-24 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-5 text-center',
          )}
        >
          <p className="inline-flex items-center rounded-full bg-[#def7ec] px-3.5 py-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#046c4e] uppercase">
            Care, in motion
          </p>
          <h2
            className={clsx(
              h2Class,
              'max-w-[900px] text-[clamp(36px,4.6vw,68px)]',
            )}
          >
            From booking to bill. One record.
          </h2>
          <p className={clsx(leadClass, 'max-w-[720px]')}>
            Every step of the visit lands on the same patient timeline, so the
            front desk, the consulting room and the billing counter see one
            record.
          </p>
          <p className="max-w-[760px] text-sm leading-relaxed text-[#5b6660]">
            These are general CARE platform demos, not recordings of the default
            Clinic installation. Screens, forms and reports vary by version and
            configuration. Hospital workflows and integrations shown may need
            additional setup, plugins or online services.
          </p>
        </div>

        {careSteps.map((step, index) => {
          const flip = index % 2 === 1
          return (
            <article
              key={step.video}
              className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2"
            >
              <div
                className={clsx(
                  flip ? s.fromRight : s.fromLeft,
                  'flex max-w-[480px] flex-col gap-4',
                  flip && 'lg:order-2 lg:justify-self-end',
                )}
              >
                <span
                  className={clsx(
                    'font-mono',
                    'text-[13px] font-semibold text-[#0d9f6e]',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}{' '}
                  <span className="text-[#8a948f]">
                    / {String(careSteps.length).padStart(2, '0')}
                  </span>
                </span>
                <h3 className={eyebrowClass}>{step.label}</h3>
                <p className="text-[clamp(30px,3vw,44px)] leading-[1.08] font-medium tracking-normal text-balance text-[#111827]">
                  {step.title}
                </p>
                <p className="text-[17px] leading-[1.6] text-pretty text-[#5b6660]">
                  {step.text}
                </p>
              </div>
              <div className={clsx(s.zoom, 'relative', flip && 'lg:order-1')}>
                <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
                <figure
                  className={clsx(
                    paneHover,
                    'relative m-0 aspect-[1920/1268] overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-[#04241b] shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
                  )}
                >
                  {step.video === 'dynamic_reports' ? (
                    <img
                      src={step.poster}
                      width={1920}
                      height={1268}
                      loading="lazy"
                      alt="Illustration of configured report templates, not a CARE application screenshot"
                      className="absolute inset-0 size-full object-contain"
                    />
                  ) : (
                    <AutoplayVideo
                      src={`/core/${step.video}.mp4`}
                      poster={step.poster}
                      label={`General CARE demo: ${step.caption}. Configuration-dependent.`}
                      className="absolute inset-0 size-full object-contain"
                    />
                  )}
                  <figcaption className="sr-only">
                    {step.video === 'dynamic_reports'
                      ? 'Report-template illustration'
                      : 'General CARE platform demo'}
                    : {step.caption}
                  </figcaption>
                </figure>
                <p className="relative mt-3 text-sm leading-relaxed text-[#5b6660]">
                  {step.video === 'dynamic_reports'
                    ? 'Illustration only. Choose report templates during clinic setup.'
                    : 'General CARE demo · features depend on configuration.'}
                </p>
              </div>
            </article>
          )
        })}
      </Shell>
    </section>
  )
}

function AlsoInTheBox() {
  return (
    <section id="also" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-9 py-20 lg:py-24">
        <div className={clsx(s.reveal, 'flex flex-col gap-2.5')}>
          <p className={eyebrowClass}>Also in the box</p>
          <h2 className="max-w-[760px] text-[clamp(24px,2.4vw,34px)] leading-[1.15] font-medium tracking-normal text-balance text-[#111827]">
            The front desk and the follow-up, on the same record as the
            consulting room.
          </h2>
        </div>
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {boxItems.map((item) => (
            <article
              key={item.label}
              className={clsx(
                tileHover,
                'flex flex-col gap-3.5 rounded-[20px] border border-[#dfe6e2] bg-white p-[26px]',
              )}
            >
              <IconBadge
                icon={item.icon}
                className="size-[42px] rounded-[11px]"
              />
              <h3 className={eyebrowClass}>{item.label}</h3>
              <p className="text-[22px] leading-[1.1] font-semibold">
                {item.title}
              </p>
              <p className="text-[15px] leading-[1.55] text-[#5b6660]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function ClinicSection() {
  return (
    <section
      id="desktop"
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #031f17, #014737 60%, #052a20)',
      }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[260px] left-[30%] size-[800px] blur-[50px]',
        )}
      />
      <Shell className="relative flex flex-col items-center gap-14 py-20 lg:py-28">
        <div
          className={clsx(
            s.reveal,
            'flex max-w-[880px] flex-col items-center gap-[18px] text-center',
          )}
        >
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#84e1bc] uppercase">
            CARE Clinic
          </p>
          <h2 className="text-[clamp(34px,4.4vw,62px)] leading-[1.02] font-medium tracking-normal text-balance text-white">
            CARE is the platform. CARE Clinic is how one clinic runs it.
          </h2>
          <p className="max-w-[680px] text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-pretty text-[#bdf0d9]">
            The same open-source Care platform that hospitals and public-health
            programmes run, packaged for a single clinic computer, with a
            control panel that keeps it running, backed up and up to date.
          </p>
        </div>
        <div className={clsx(s.zoom, 'relative w-full max-w-[1000px]')}>
          <Glow
            strength={0.38}
            className="-inset-[50px] rounded-[60px] blur-[34px]"
          />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[18px] border border-white/15 bg-[#f4f7f5] shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)] sm:rounded-[24px]',
            )}
          >
            <img
              src="/care-desktop/control-panel.webp"
              width={2296}
              height={1606}
              loading="lazy"
              decoding="async"
              alt="Overview with six control-panel tabs, clinic status, local address and encrypted backup summary; version 0.1.8 with earlier CARE Desktop branding"
              className="h-auto w-full"
            />
          </figure>
          <Chip
            className={clsx(s.floaty, '-top-[22px] right-3 sm:-right-[14px]')}
          >
            <LiveDot />
            Core care on your local network
          </Chip>
          <Chip
            className={clsx(
              s.floatyAlt,
              '-bottom-[22px] left-3 sm:-left-[14px]',
            )}
          >
            <Lock className="size-4" strokeWidth={2.4} aria-hidden="true" />
            Encrypted backups · restore built in
          </Chip>
        </div>
      </Shell>
    </section>
  )
}

function PluginsSection() {
  return (
    <section id="plugins" className="bg-white">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[840px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>Add what your clinic needs.</h2>
          <p className={leadClass}>
            Plugins extend CARE without changing its core. The updated catalog
            focuses on CARE Onboarding, enabled by default for new clinics.
            Manage compatible additions in the control panel’s Plugins tab.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className={clsx(s.reveal, 'grid grid-cols-1 gap-5')}>
            {plugins.map((plugin) => (
              <article
                key={plugin.name}
                className={clsx(
                  tileHover,
                  'flex flex-col gap-3 rounded-[22px] bg-[#f4f7f5] px-[30px] pt-[30px] pb-[26px]',
                )}
              >
                <IconBadge icon={plugin.icon} />
                <h3 className={eyebrowClass}>{plugin.name}</h3>
                <p className="text-[26px] leading-[1.1] font-semibold text-[#111827]">
                  {plugin.title}
                </p>
                <p className="text-base leading-[1.55] text-[#5b6660]">
                  {plugin.text}
                </p>
                <p className="mt-auto border-t border-[#dfe6e2] pt-4 text-[13.5px] font-semibold text-[#5b6660]">
                  {plugin.note}
                </p>
              </article>
            ))}
          </div>
          <p className="text-[15px] leading-[1.55] text-[#5b6660]">
            CARE Onboarding is hosted online, so staff browsers need internet to
            load it. Connected services may have separate terms and costs.
            Existing saved and custom plugins are preserved, not automatically
            uninstalled when the catalog changes.
          </p>
          <p className="text-sm leading-relaxed text-[#5b6660]">
            Release note, checked 4 October 2026: the{' '}
            <a
              href={`${REPO_URL}/blob/main/app/internal/plugins/catalog.yml`}
              className="font-semibold underline underline-offset-4"
            >
              updated source catalog
            </a>{' '}
            contains only CARE Onboarding. The latest published release,{' '}
            <a
              href={`${REPO_URL}/releases/tag/v0.1.9`}
              className="font-semibold underline underline-offset-4"
            >
              v0.1.9
            </a>
            , still includes the older catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 pt-4 lg:grid-cols-2">
          <div
            className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-3.5')}
          >
            <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
              Beyond the catalog
            </h3>
            <p className="text-[17px] leading-[1.6] text-pretty text-[#374151]">
              The Care platform’s{' '}
              <a
                href="/product/apps-integrations"
                className="font-bold text-[#046c4e] underline decoration-[#046c4e]/30 underline-offset-4 hover:text-[#014737]"
              >
                plugin ecosystem
              </a>{' '}
              reaches national rails, AI documentation, labs, pharmacy, imaging,
              payments and messaging. A technical partner can add compatible
              CARE plugins as custom plugins, with the configuration,
              dependencies and external services they require.
            </p>
            <p className="text-[15px] leading-[1.6] text-[#5b6660]">
              Save and apply needs a healthy, running clinic. Backend changes
              can rebuild and restart CARE, briefly interrupting staff;
              frontend-only changes sync registrations for the next page load.
              Plugins does not ask for the CARE Clinic admin password, so
              restrict access to trusted staff.
            </p>
            <p className="text-[15px] leading-[1.6] text-[#5b6660]">
              Install only trusted plugins and keep backups. Recovery can
              restore configuration and images, but cannot undo arbitrary
              database migrations or changes in external services.
            </p>
          </div>
          <div className={clsx(s.zoom, 'relative')}>
            <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
            <figure
              className={clsx(
                paneHover,
                'relative m-0 flex flex-col gap-3.5 rounded-[22px] border border-[#dfe6e2] bg-white px-[18px] pt-[18px] pb-5 shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
              )}
            >
              <span
                className={clsx(
                  'font-mono',
                  'flex items-center gap-2 text-xs font-semibold text-[#5b6660]',
                )}
              >
                <span>Control panel</span>
                <span aria-hidden="true">›</span>
                <span className="text-[#046c4e]">Plugins</span>
              </span>
              <div className="relative overflow-hidden rounded-xl bg-[#f4f7f5]">
                <img
                  src="/care-desktop/plugins.webp"
                  width={2296}
                  height={1606}
                  loading="lazy"
                  decoding="async"
                  alt="Top-level Plugins tab showing CARE Onboarding and Save and apply, with earlier CARE Desktop branding"
                  className="h-auto w-full"
                />
              </div>
            </figure>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function UpdatesSection() {
  return (
    <section id="updates" className="bg-[#f4f7f5]">
      <Shell className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div className={clsx(s.reveal, 'flex flex-col gap-5')}>
          <p className={eyebrowClass}>Updates</p>
          <h2 className={h2Class}>Choose when to make a change.</h2>
          <p className="text-[17px] leading-[1.6] text-[#374151]">
            CARE software updates follow your configured backend and frontend
            source branches, with builds prepared in the background. Install now
            may interrupt staff; Later queues a prepared update for the next
            clinic start. Plan changes outside consultation hours.
          </p>
          <p className="text-[17px] leading-[1.6] text-[#374151]">
            CARE Clinic application updates are separate. The clinic can keep
            running while the desktop app updates, and the app may hand off to
            an operating-system installer. Follow its prompts and confirm the
            result; opening an installer is not proof that it finished.
          </p>
          <p className="text-[15px] leading-[1.6] text-[#5b6660]">
            The plugin catalog comes with the desktop app. After upgrading,
            catalog source changes reach existing plugin settings on the next
            Save and apply in Plugins. Hosted frontend bundles are fetched
            separately by staff browsers. There is no single update-everything
            action.
          </p>
          <ArrowLink
            href={`${REPO_URL}/blob/main/docs/desktop-workflows.md#updates-and-running-work`}
          >
            Read the update workflow
          </ArrowLink>
        </div>
        <figure
          className={clsx(
            s.zoom,
            'm-0 overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-white shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
          )}
        >
          <img
            src="/care-desktop/updates.webp"
            width={2296}
            height={1606}
            loading="lazy"
            decoding="async"
            alt="Updates tab separating CARE software from the desktop application; screenshot retains version 0.1.8 and CARE Desktop branding"
            className="h-auto w-full"
          />
        </figure>
      </Shell>
    </section>
  )
}

function DataSection() {
  return (
    <section id="data" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2 lg:items-end',
          )}
        >
          <h2 className={h2Class}>Your records. On your computer.</h2>
          <p className={leadClass}>
            The clinic database, files and backups live on the computer you
            choose. Your clinic decides who has access and where the backups go.
            There is no Care-hosted account between your clinic and its records.
          </p>
        </div>
        <div
          className={clsx(s.reveal, 'grid grid-cols-1 gap-5 md:grid-cols-2')}
        >
          {dataPoints.map((point) => (
            <div
              key={point.title}
              className={clsx(
                tileHover,
                'flex gap-5 rounded-[22px] border border-[#dfe6e2] bg-white p-6 sm:p-[30px]',
              )}
            >
              <IconBadge icon={point.icon} dark />
              <span className="flex flex-col gap-2">
                <h3 className="text-2xl leading-[1.1] font-semibold">
                  {point.title}
                </h3>
                <p className="text-base leading-[1.55] text-[#5b6660]">
                  {point.text}
                </p>
              </span>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function TeamSection() {
  return (
    <section id="team" className="bg-white">
      <Shell className="grid grid-cols-1 items-center gap-x-16 gap-y-14 py-20 lg:grid-cols-2 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>One clinic. Every desk.</h2>
          <p className={leadClass}>
            Host the clinic on one computer. Reception, the consulting rooms and
            the billing counter connect from their own Mac or Windows computers
            over the clinic Wi-Fi. First find the clinic, then choose Connect
            and approve certificate installation and any operating-system
            prompts. Clients do not need Docker or Git, but do need this device
            setup and a trusted clinic network.
          </p>
          <p className="text-sm leading-[1.55] text-[#5b6660]">
            No per-user licence. Capacity depends on the host computer and the
            network.
          </p>
        </div>
        <div className={clsx(s.zoom, 'relative flex flex-col gap-4')}>
          <Glow className="-inset-[30px] rounded-[50px] blur-[30px]" />
          <figure
            className={clsx(
              paneHover,
              'relative m-0 overflow-hidden rounded-[22px] border border-[#dfe6e2] bg-[#f4f7f5] shadow-[0_40px_80px_-40px_rgba(1,71,55,0.5)]',
            )}
          >
            <img
              src="/care-desktop/client-connect.webp"
              width={2188}
              height={1370}
              loading="lazy"
              decoding="async"
              alt="CARE Clinic client discovery screen: enter the clinic address and find the server before connecting"
              className="h-auto w-full"
            />
          </figure>
          <div className="relative flex items-center gap-4 rounded-2xl border border-[#dfe6e2] bg-[#f4f7f5] px-4 py-3.5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-[#dfe6e2] bg-white text-[#374151]">
              <QrCode className="size-7" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="text-sm leading-[1.5] text-[#5b6660]">
              <span className="font-bold text-[#111827]">
                Phones and tablets.
              </span>{' '}
              “Connect phone or tablet” in the control panel shows a QR code
              that opens{' '}
              <span
                className={clsx(
                  'font-mono',
                  'text-[13px] font-semibold text-[#374151]',
                )}
              >
                http://&lt;clinic&gt;.local/setup
              </span>
              . Follow the device’s certificate installation and trust steps
              before opening CARE over HTTPS. Scanning the QR code alone does
              not establish trust.
            </p>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function OfflineSection() {
  return (
    <section
      id="offline"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #031f17, #014737 70%)' }}
    >
      <Blob
        className={clsx(
          s.blob,
          '-top-[200px] -right-[100px] size-[640px] blur-[50px]',
        )}
      />
      <Shell className="relative">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-5 py-20 text-center lg:py-24',
          )}
        >
          <span className="flex size-16 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-[#84e1bc]">
            <WifiOff className="size-7" strokeWidth={2} aria-hidden="true" />
          </span>
          <h2 className={clsx(h2Class, 'max-w-[820px] text-white')}>
            Works when the internet doesn’t.
          </h2>
          <p className="max-w-[760px] text-[clamp(18px,1.5vw,21px)] leading-[1.6] text-pretty text-[#bdf0d9]">
            After setup, the core clinic runs on the local network with no
            internet connection while the host is awake, running CARE and
            reachable on the clinic LAN. Staff devices are not independent
            offline copies. Internet is needed to install, to update, to load
            hosted plugins and for the online services you switch on.
          </p>
        </div>
      </Shell>
    </section>
  )
}

function SetupSection() {
  return (
    <section id="setup" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-12 py-20 lg:py-24">
        <div
          className={clsx(s.reveal, 'flex max-w-[840px] flex-col gap-[18px]')}
        >
          <h2 className={h2Class}>One installer sets everything up.</h2>
          <p className={leadClass}>
            Download it, run setup on the clinic computer, and the wizard takes
            you through it. Internet is required: setup downloads prerequisites
            such as Git and Docker through Rancher Desktop, WSL 2 on Windows,
            and CARE sources, images and dependencies. Installation time varies.
          </p>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 gap-x-7 gap-y-12 p-0 md:grid-cols-2">
          {setupSteps.map((step, index) => (
            <li
              key={step.title}
              className={clsx(s.zoom, 'flex flex-col gap-[22px]')}
            >
              <figure
                className={clsx(
                  paneHover,
                  'relative m-0 aspect-[1100/700] overflow-hidden rounded-[20px] border border-[#dfe6e2] bg-white shadow-[0_30px_60px_-36px_rgba(1,71,55,0.4)]',
                )}
              >
                <img
                  src={step.image}
                  width={step.width}
                  height={step.height}
                  loading="lazy"
                  decoding="async"
                  alt={step.alt}
                  className="size-full object-contain"
                />
              </figure>
              <div className="flex items-start gap-4">
                <span
                  className={clsx(
                    'font-mono',
                    'flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#014737] text-[15px] font-semibold text-[#84e1bc]',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1.5">
                  <h3 className="text-2xl leading-[1.1] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-base leading-[1.55] text-[#5b6660]">
                    {step.text}
                  </p>
                </span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-sm leading-relaxed text-[#5b6660]">
          Screenshots show the supplied versions, including earlier CARE Desktop
          branding. The review image has its personal backup path redacted. The
          onboarding image shows the start of setup, not a completed clinic.
        </p>
      </Shell>
    </section>
  )
}

function OpenSourceSection() {
  return (
    <section id="open-source" className="bg-white">
      <Shell className="flex flex-col gap-14 py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-2">
          <div
            className={clsx(s.reveal, 'flex max-w-[520px] flex-col gap-[22px]')}
          >
            <h2 className={h2Class}>Open source. Open to you.</h2>
            <p className={leadClass}>
              The full source is on GitHub under the MIT licence. Read it,
              change it, keep running it. That is also why the software is free.
              There is no licence to sell.
            </p>
            <div className="flex flex-wrap gap-x-7 gap-y-2.5 pt-1.5 text-base">
              <ArrowLink href={REPO_URL}>View the source</ArrowLink>
              <ArrowLink href={LICENSE_URL}>Read the licence</ArrowLink>
              <ArrowLink href={DOCS_URL}>Documentation</ArrowLink>
            </div>
          </div>
          <div
            className={clsx(
              s.zoom,
              'font-mono',
              'flex flex-col gap-4 rounded-[22px] bg-[#111827] px-6 pt-7 pb-7 text-[13px] leading-[1.6] text-[#c2c0b6] shadow-[0_40px_80px_-40px_rgba(17,24,39,0.6)] sm:px-[30px]',
            )}
          >
            <span className="flex items-center justify-between gap-3 text-xs font-semibold text-[#87867f]">
              <span className="flex items-center gap-2">
                <span className="block size-2.5 rounded-full bg-[#31c48d]" />
                LICENSE
              </span>
              <span className="truncate">
                github.com/ohcnetwork/care_clinic
              </span>
            </span>
            <span className="text-base font-semibold text-white">
              MIT License
            </span>
            <span className="text-[#84e1bc]">
              Copyright (c) 2026 Open Healthcare Network Foundation
            </span>
            <span>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </span>
            <span>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </span>
            <span className="text-[#87867f]">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </span>
          </div>
        </div>

        <div
          className={clsx(
            s.reveal,
            'grid grid-cols-1 gap-x-16 gap-y-6 border-t border-[#eef2ef] pt-10 lg:grid-cols-3',
          )}
        >
          <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
            Under the hood
          </h3>
          <p className="text-[17px] leading-[1.6] text-pretty text-[#374151] lg:col-span-2">
            A Go and Wails desktop app with a React interface drives a Docker
            Compose stack: the Care backend and its workers, the Care web app,
            PostgreSQL, Redis, Silo for files, and Caddy with the Coraza web
            application firewall as the HTTPS front door. Both Care images are
            built on the clinic’s own computer from configured sources, with
            resolved commits recorded per build. Configured branches can track
            upstream updates; they are not fixed release-wide pins. Installer
            signing varies by platform.
          </p>
        </div>
      </Shell>
    </section>
  )
}

function WhichCareSection() {
  return (
    <section id="which-care" className="bg-[#f4f7f5]">
      <Shell className="flex flex-col gap-16 py-20 lg:gap-20 lg:py-24">
        <div className="flex flex-col gap-9">
          <h2 className={clsx(s.reveal, h2Class, 'max-w-[840px]')}>
            Which Care is right for your clinic?
          </h2>
          <div
            className={clsx(
              s.zoom,
              'overflow-x-auto rounded-[22px] border border-[#dfe6e2] bg-white',
            )}
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-[15.5px] leading-[1.5]">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/5 border-b border-[#dfe6e2] px-6 py-[22px]"
                  >
                    <span className="sr-only">Comparison</span>
                  </th>
                  <th
                    scope="col"
                    className="w-2/5 border-b border-l border-[#dfe6e2] border-l-[#eef2ef] bg-[#def7ec] px-6 py-[22px] text-[22px] font-semibold text-[#014737]"
                  >
                    CARE Clinic
                  </th>
                  <th
                    scope="col"
                    className="w-2/5 border-b border-l border-[#dfe6e2] border-l-[#eef2ef] px-6 py-[22px] text-[22px] font-semibold text-[#111827]"
                  >
                    CARE, partner-deployed
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, desktop, hosted]) => (
                  <tr key={label}>
                    <th
                      scope="row"
                      className="border-b border-[#eef2ef] px-6 py-[18px] align-top text-sm font-bold text-[#374151]"
                    >
                      {label}
                    </th>
                    <td className="border-b border-l border-[#eef2ef] bg-[#def7ec]/35 px-6 py-[18px] align-top text-[#111827]">
                      {desktop}
                    </td>
                    <td className="border-b border-l border-[#eef2ef] px-6 py-[18px] align-top text-[#111827]">
                      {hosted}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-[18px] align-middle text-sm font-bold text-[#374151]"
                  >
                    Get started
                  </th>
                  <td className="border-l border-[#eef2ef] bg-[#def7ec]/35 px-6 py-[18px] align-middle">
                    <a
                      href="#download"
                      className="inline-flex h-[46px] items-center gap-2 rounded-xl bg-[#057a55] px-5 text-[15px] font-bold text-white no-underline transition-colors hover:bg-[#046c4e]"
                    >
                      Choose your installer
                    </a>
                  </td>
                  <td className="border-l border-[#eef2ef] px-6 py-[18px] align-middle">
                    <ArrowLink
                      href="/contact"
                      icon={ArrowRight}
                      className="text-[15.5px]"
                    >
                      Start a deployment conversation
                    </ArrowLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={clsx(s.reveal, 'flex flex-col gap-6')}>
          <h3 className="text-[clamp(28px,2.8vw,38px)] leading-[1.1] font-medium tracking-normal">
            Tech specs
          </h3>
          <dl className="m-0 grid grid-cols-1 border-t border-[#dfe6e2] md:grid-cols-2 md:gap-x-12">
            {specs.map(([term, detail]) => (
              <div
                key={term}
                className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-b border-[#dfe6e2] py-3.5 sm:grid-cols-[150px_minmax(0,1fr)]"
              >
                <dt className="text-[13.5px] font-bold text-[#374151]">
                  {term}
                </dt>
                <dd className="m-0 text-[14.5px] leading-[1.5] text-[#111827]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="bg-white">
      <Shell className="flex flex-col gap-10 py-20 lg:py-24">
        <h2 className={clsx(s.reveal, h2Class)}>Frequently asked questions</h2>
        {/* Columns rather than a grid, so answers of different lengths pack without row gaps */}
        <div className="gap-x-12 md:columns-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="-mx-4 flex break-inside-avoid flex-col gap-2.5 rounded-xl border-t border-[#dfe6e2] px-4 py-[26px] transition-colors hover:bg-[#f4f7f5]"
            >
              <h3 className="text-xl leading-[1.25] font-semibold">
                {faq.question}
              </h3>
              <p className="text-base leading-[1.6] text-[#374151]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function DownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #031f17, #014737 55%, #052a20)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Blob
          strength={0.5}
          className={clsx(
            s.blob,
            '-top-[200px] -left-[120px] size-[680px] blur-[44px]',
          )}
        />
        <Blob
          color="132,225,188"
          strength={0.35}
          className={clsx(
            s.blobAlt,
            '-right-[200px] -bottom-[260px] size-[760px] blur-[50px]',
          )}
        />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_50%,#000_10%,transparent_70%)]"
          style={gridLines}
        />
      </div>
      <Shell className="relative">
        <div
          className={clsx(
            s.reveal,
            'flex flex-col items-center gap-7 py-24 text-center lg:py-32',
          )}
        >
          <h2 className="max-w-[900px] text-[clamp(40px,5.4vw,80px)] leading-[1.02] font-medium tracking-normal text-balance text-white">
            Free to use.{' '}
            <span className={clsx(s.shine, shineText, 'block sm:inline')}>
              Yours to run.
            </span>
          </h2>
          <p className="text-[clamp(19px,1.6vw,23px)] leading-[1.5] text-[#def7ec]">
            Get CARE Clinic for your clinic.
          </p>
          <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <ClinicDownloadButton
              platform="mac"
              className={clsx(
                mintButton,
                'h-[58px] justify-center px-[30px] text-[17px]',
              )}
            >
              Download for Mac
            </ClinicDownloadButton>
            <ClinicDownloadButton
              platform="windows"
              className={clsx(
                glassButton,
                'h-[58px] justify-center border-white/30 bg-white/12 px-7 text-[17px]',
              )}
            >
              Download for Windows
            </ClinicDownloadButton>
          </div>
          <a
            href={CLINIC_RELEASES_URL}
            className="text-sm text-[#bdf0d9] underline underline-offset-4 hover:text-white"
          >
            Download from GitHub releases
          </a>
          <p className="max-w-[640px] text-sm leading-relaxed text-[#bdf0d9]">
            If JavaScript, the GitHub API or your browser’s download handoff is
            unavailable, use the release-page link to choose an installer.
          </p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2.5">
            <ArrowLink
              href={REPO_URL}
              className="font-semibold text-[#84e1bc] hover:text-white"
            >
              View on GitHub
            </ArrowLink>
            <ArrowLink
              href={DOCS_URL}
              className="font-semibold text-[#84e1bc] hover:text-white"
            >
              Documentation
            </ArrowLink>
          </div>
          <p className="mt-6 max-w-[760px] text-sm leading-[1.6] text-pretty text-[#bdf0d9]">
            CARE Clinic is released under the MIT licence by Open Healthcare
            Network Foundation. The software is free; hardware, support and
            external services may involve separate costs. Internet is needed for
            installation, updates, hosted plugins and connected services.
          </p>
        </div>
      </Shell>
    </section>
  )
}

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function CareClinicPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <StructuredData />
      <div className="bg-white pb-4">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div className="text-[#111827]">
        <ClinicDownloadProvider>
          <main>
            <Hero />
            <Ticker />
            <Overview />
            <Price />
            <CareInMotion />
            <AlsoInTheBox />
            <ClinicSection />
            <PluginsSection />
            <UpdatesSection />
            <DataSection />
            <TeamSection />
            <OfflineSection />
            <SetupSection />
            <OpenSourceSection />
            <WhichCareSection />
            <FaqSection />
            <DownloadSection />
          </main>
        </ClinicDownloadProvider>
      </div>
      <Footer />
    </div>
  )
}
