import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  ClipboardCheck,
  GitPullRequest,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'foundationGovernance.meta',
  })

  return pageMetadata({
    locale,
    path: '/foundation/governance',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC governance, open source healthcare governance, technical steering committee, CARE maintainers, open healthcare foundation',
  })
}

const layers = [
  { id: 'board', icon: Landmark },
  { id: 'steeringCommittee', icon: Scale },
  { id: 'maintainers', icon: GitPullRequest },
  { id: 'projectGroups', icon: Users },
] as const

const policies = [
  'contribution',
  'license',
  'releases',
  'security',
  'conflicts',
  'clinical',
] as const

const decisionRows = [
  'institution',
  'architecture',
  'codeReview',
  'plugins',
  'clinicalSafety',
  'securityDisclosure',
] as const

const securityItems = [
  { id: 'auditTrails', icon: ShieldCheck },
  { id: 'accessControls', icon: LockKeyhole },
  { id: 'releaseReadiness', icon: ClipboardCheck },
  { id: 'maintainerReview', icon: GitPullRequest },
] as const

function Hero() {
  const t = useTranslations('foundationGovernance.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>{t('eyebrow')}</Subheading>
          <h1 className="mt-4 max-w-5xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.85]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
        </div>
      </Container>
    </div>
  )
}

function LayersSection() {
  const t = useTranslations('foundationGovernance.layers')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        {t('title')}
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <layer.icon className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {t(`items.${layer.id}.title`)}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`items.${layer.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function DecisionSection() {
  const t = useTranslations('foundationGovernance.decisions')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-2">
              {t('title')}
            </Heading>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white">
            {decisionRows.map((id) => (
              <div
                key={id}
                className="grid grid-cols-1 border-[#dfe6e2] p-5 sm:grid-cols-[1fr_0.8fr] sm:gap-6 [&:not(:first-child)]:border-t"
              >
                <p className="text-sm/6 font-semibold text-gray-950">
                  {t(`rows.${id}.scope`)}
                </p>
                <p className="mt-2 text-sm/6 text-gray-600 sm:mt-0">
                  {t(`rows.${id}.owner`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function PolicySection() {
  const t = useTranslations('foundationGovernance.policies')

  return (
    <Container className="py-24">
      <div className="max-w-4xl">
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading as="h2" className="mt-2">
          {t('title')}
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {policies.map((id) => (
          <div
            key={id}
            className="rounded-lg border border-[#dfe6e2] bg-white p-6"
          >
            <ClipboardCheck className="size-6 text-[#12806a]" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {t(`items.${id}.title`)}
            </h3>
            <p className="mt-3 text-sm/6 text-gray-600">
              {t(`items.${id}.text`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function SecuritySection() {
  const t = useTranslations('foundationGovernance.security')

  return (
    <div className="bg-[#052e24] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-2">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/about/security-compliance"
                className="w-full sm:w-auto"
              >
                {t('securityCompliance')}
              </Button>
              <Button
                variant="secondary"
                href="/developers"
                className="flex w-full items-center gap-2 sm:w-auto"
              >
                <span>{t('contribute')}</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <item.icon className="size-6 text-lime-200" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {t(`items.${item.id}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function Governance({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <LayersSection />
        <DecisionSection />
        <PolicySection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  )
}
