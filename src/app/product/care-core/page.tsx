import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { VideoPlayer } from '@/components/video-player'
import {
  BarChart3,
  Building2,
  Calendar,
  Cloud,
  CreditCard,
  Edit3,
  FileText,
  Link,
  Palette,
  Pill,
  Rocket,
  Shield,
  Smartphone,
  TestTube,
  TrendingUp,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARE Core - Open Healthcare Infrastructure Primitives',
  description:
    'CARE Core is the MIT-licensed, standards-aligned operating layer for healthcare workflows across hospitals, public health programs, and care coordination.',
  keywords:
    'FHIR healthcare platform, hospital management system, EMR software, healthcare interoperability, open source healthcare, MIT licensed healthcare, healthcare API, mobile healthcare, cloud healthcare, healthcare data model, SNOMED CT, LOINC, healthcare standards, digital health platform',
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#cbded6] bg-white/70 px-4 py-2 text-sm font-medium text-[#0b6b55] shadow-sm backdrop-blur-xl">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#12806a]"></div>
              <span>Digital Public Good / MIT licensed / FHIR-aligned</span>
            </div>

            <h1 className="font-display text-6xl/[0.9] font-bold tracking-normal text-balance text-[#05070c] sm:text-8xl/[0.82] md:text-9xl/[0.82]">
              CARE Core is the reusable operating layer.
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Common healthcare primitives, open APIs, and deployable workflow
              modules for institutions that need interoperability without vendor
              lock-in.
            </p>

            <div className="mt-12 rounded-lg border border-[#cbded6] bg-white/72 p-6 shadow-[0_18px_45px_rgba(6,63,50,0.07)] backdrop-blur-xl">
              <p className="text-lg font-medium text-[#173d34]">
                Built with the language of modern health systems:{' '}
                <strong>FHIR R5</strong>, <strong>SNOMED</strong>,{' '}
                <strong>LOINC</strong>, <strong>UCUM</strong>,{' '}
                <strong>ICD-10</strong>, configurable terminology, and open
                integration patterns.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
              <Button href="/product/standards-architecture">
                Read the architecture brief
              </Button>
              <Button variant="secondary" href="/developers">
                Explore developer docs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ArchitectureSection() {
  const features = [
    {
      title: 'API-First',
      description:
        'Open APIs and FHIR-aligned resources for integrations, analytics, and national rails.',
      icon: Link,
    },
    {
      title: 'Mobile-First',
      description:
        'Workflows designed for facilities, wards, field visits, and frontline health workers.',
      icon: Smartphone,
    },
    {
      title: 'Cloud-Agnostic',
      description:
        'Deploy in a government cloud, hospital VPC, managed cloud, hybrid, or on-prem model.',
      icon: Cloud,
    },
  ]

  return (
    <div className="bg-white py-28">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>Architecture</Subheading>
          <Heading as="h2" className="font-display tracking-normal">
            Modular, plugin-ready core for serious health systems.
          </Heading>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-gray-600">
            CARE Core covers patients, facilities, encounters, orders,
            medications, observations, questionnaires, tasks, care plans,
            reports, access control, audit trails, and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-[#f3f8f5] transition-colors duration-300 group-hover:bg-[#e8f2ed]">
                <feature.icon className="h-10 w-10 text-[#12806a]" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CoreModulesSection() {
  const modules = [
    {
      title: 'Clinical Data Capture',
      description:
        'Structured clinical forms with SNOMED CT and LOINC terminology integration. Features autocomplete, voice-to-text, and customizable templates for fast data entry.',
      video: '/core/clinical_data_capture.mp4',
      icon: FileText,
    },
    {
      title: 'Scheduling & Public Facility Pages',
      description:
        'Intuitive appointment booking system with public facility pages. Patients and providers can schedule visits, view availability, and receive automated reminders.',
      video: '/core/Scheduling_Public_Facility_Pages.mp4',
      icon: Calendar,
    },
    {
      title: 'Administrative Hierarchies & RBAC',
      description:
        'Multi-level organizational structure from national to facility level. Granular role-based access control for doctors, nurses, admins, and health workers.',
      video: '/core/Administrative%20_Hierarchies_RBAC.mp4',
      icon: Building2,
    },
    {
      title: 'Customizable EMR Forms',
      description:
        'No-code form builder with automatic FHIR resource mapping. Design clinical workflows and forms that maintain data integrity and interoperability.',
      video: '/core/Customizable_EMR_Forms.mp4',
      icon: Edit3,
    },
    {
      title: 'Lab Management (LMIS)',
      description:
        'End-to-end lab workflow from order to results. LOINC and UCUM compliant with digital sample tracking and automated result entry.',
      video: '/core/lab_management.mp4',
      icon: TestTube,
    },
    {
      title: 'Pharmacy & Inventory',
      description:
        'Prescription management with real-time inventory tracking. Supports medication dispensing, substitutions, and automated procurement workflows.',
      video: '/core/pharmacy_and_inventory.mp4',
      icon: Pill,
    },
    {
      title: 'Billing & Accounting',
      description:
        'Multi-payment model support for cash, insurance, and government schemes. Automated transaction recording and payment reconciliation.',
      video: '/core/billing_and_accounting.mp4',
      icon: CreditCard,
    },
    {
      title: 'Patient Portal',
      description:
        'OTP-based secure login with appointment management. Patients can view visit history, reschedule appointments, and access their health records.',
      video: '/core/patient_login.mp4',
      icon: Shield,
    },
    {
      title: 'Dynamic Reports',
      description:
        'Custom report builder for clinical data, treatment summaries, and discharge reports. Generate insights from patient encounters and outcomes.',
      video: '/core/dynamic_reports.mp4',
      icon: BarChart3,
    },
    {
      title: 'Clinical Drawings',
      description:
        'Integrated drawing tools with medical templates. Create body maps, tooth charts, and clinical diagrams that become part of the medical record.',
      video: '/core/clinical_drawings.mp4',
      icon: Palette,
    },
    {
      title: 'Analytics Dashboards',
      description:
        'Real-time data visualization with automatic updates. Monitor key performance indicators and healthcare outcomes across your organization.',
      video: '/core/dynamic_dashboards.mp4',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="bg-[#f7f9f6] py-28">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>Core Modules</Subheading>
          <Heading as="h2" className="font-display tracking-normal">
            Workflow modules that extend the core without forking it.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            CARE Apps and modules assemble reusable primitives into practical
            HMIS, EMR, care coordination, pharmacy, billing, lab, and analytics
            workflows.
          </p>
        </div>

        <div className="space-y-32">
          {modules.map((module, index) => (
            <div key={index} className="group relative">
              <div
                className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div
                  className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#dfe6e2]">
                      <module.icon className="h-8 w-8 text-[#12806a]" />
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-4xl font-bold text-gray-900">
                        {module.title}
                      </h3>
                      <div className="h-1 w-20 rounded-full bg-[#b8f36f]"></div>
                    </div>
                  </div>

                  <p className="text-xl leading-relaxed text-gray-600">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-medium text-[#0b6b55]">
                    <div className="h-2 w-2 rounded-full bg-[#12806a]"></div>
                    <span>Standards-aligned workflow module</span>
                  </div>
                </div>

                <div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <VideoPlayer
                    src={module.video}
                    title={module.title}
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsinline={true}
                    width={1200}
                    height={830}
                    className="w-full rounded-lg border border-[#dfe6e2] bg-white shadow-[0_22px_70px_rgba(6,63,50,0.12)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      title: 'Interoperability by default',
      description:
        'Built on FHIR R5 with SNOMED, LOINC, UCUM, ICD-10 for seamless data exchange and analytics.',
      icon: Link,
    },
    {
      title: 'Sovereign control',
      description:
        'Zero license fees; you own code & data. Deploy in your infrastructure with complete control.',
      icon: Shield,
    },
    {
      title: 'Future-ready',
      description:
        'Assistive AI, voice workflows, and plugins can sit on structured data without altering the shared core.',
      icon: Rocket,
    },
  ]

  return (
    <div className="bg-white py-28">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>What you get</Subheading>
          <Heading as="h2" className="font-display tracking-normal">
            Designed for public ownership and long-term stewardship.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            The foundation maintains the release discipline, documentation,
            security posture, and implementation ecosystem needed for reuse at
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-[#f3f8f5] transition-colors duration-300 group-hover:bg-[#e8f2ed]">
                <benefit.icon className="h-10 w-10 text-[#12806a]" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function CareCore() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ArchitectureSection />
        <CoreModulesSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  )
}
