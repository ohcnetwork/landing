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
  title: 'Care Core — FHIR‑Native Healthcare Platform | Open Health',
  description:
    'MIT‑licensed, modular healthcare platform with FHIR R5 compliance. API‑first, mobile‑first architecture for hospitals, clinics, and health systems. Deploy in 10 States.',
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
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span>Digital Public Good • MIT License • FHIR R5</span>
            </div>

            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Core: An open foundation for every workflow.
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              <strong>MIT‑licensed</strong>, <strong>API‑first</strong>,{' '}
              <strong>modular</strong>, <strong>cloud‑agnostic</strong>,{' '}
              <strong>mobile‑first</strong>, <strong>MCP‑ready</strong>.
            </p>

            <div className="mt-12 rounded-2xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 p-6 backdrop-blur-sm">
              <p className="text-lg font-medium text-gray-800">
                <strong>Built on global standards:</strong>{' '}
                <strong>FHIR R5</strong>, <strong>SNOMED</strong>,{' '}
                <strong>LOINC</strong>, <strong>UCUM</strong>,{' '}
                <strong>ICD‑10</strong>; terminology server;{' '}
                <strong>BYOT</strong>.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
              <Button
                href="/contact"
                className="bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                Read the architecture brief
              </Button>
              <Button
                variant="secondary"
                href="/developers"
                className="border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                Explore the data model
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
        'RESTful APIs with FHIR R5 compliance for seamless integration',
      icon: Link,
    },
    {
      title: 'Mobile-First',
      description:
        'Responsive design optimized for healthcare workers on the go',
      icon: Smartphone,
    },
    {
      title: 'Cloud-Agnostic',
      description: 'Deploy anywhere - your VPC, government cloud, or hybrid',
      icon: Cloud,
    },
  ]

  return (
    <div className="bg-white py-24">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>Architecture</Subheading>
          <Heading as="h2" className="font-display tracking-tight">
            Modular, plugin‑ready core with modern frontend/backend stacks
          </Heading>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-gray-600">
            <strong>FHIR‑inspired data model</strong> covers encounters, orders,
            meds, labs, imaging, billing, org hierarchies, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
                <feature.icon className="h-10 w-10 text-gray-700" />
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
    <div className="bg-white py-24">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>Core Modules</Subheading>
          <Heading as="h2" className="font-display tracking-tight">
            Everything you need for comprehensive healthcare management
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            Each module is designed with healthcare workflows in mind, built on
            FHIR standards, and optimized for frontline healthcare workers.
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
                      <module.icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-4xl font-bold text-gray-900">
                        {module.title}
                      </h3>
                      <div className="h-1 w-20 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  <p className="text-xl leading-relaxed text-gray-600">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
                    <span>Live Demo Available</span>
                  </div>
                </div>

                <div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <VideoPlayer
                    src={module.video}
                    title={module.title}
                    poster={`/core/${module.title.toLowerCase().replace(/\s+/g, '_')}_poster.jpg`}
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsinline={true}
                    width={1200}
                    height={830}
                    className="w-full rounded-3xl shadow-2xl"
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
        "AI tools and voice-fill integrate seamlessly. Plugins don't alter the core.",
      icon: Rocket,
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="mb-20 text-center">
          <Subheading>What you get</Subheading>
          <Heading as="h2" className="font-display tracking-tight">
            Interoperability by default; clean analytics/exchange.
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            Built for the future of healthcare with standards-first architecture
            and sovereign data control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
                <benefit.icon className="h-10 w-10 text-gray-700" />
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
