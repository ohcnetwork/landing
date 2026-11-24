import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PeopleSection, type Person } from '@/components/person-roster'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import leadershipData from '@/data/leadership.json'
import type { Messages } from '@/i18n/messages'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BadgeCheck,
  GitPullRequest,
  Landmark,
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
  const t = await getTranslations({ locale, namespace: 'aboutTeam.meta' })

  return pageMetadata({
    locale,
    path: '/about/team',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC foundation board, OHC advisory board, Open Healthcare Network governance, CARE maintainers, OHC leadership',
  })
}

// Names and photos live in the data file; roles are translated by person id.
type PersonProfile = Omit<Person, 'role'> & {
  id: keyof Messages['aboutTeam']['people']
}

const board = leadershipData.foundationBoard as PersonProfile[]
const advisors = leadershipData.advisoryBoard as PersonProfile[]

const governanceLayers = [
  { id: 'board', icon: Landmark },
  { id: 'advisors', icon: Scale },
  { id: 'team', icon: Users },
  { id: 'maintainers', icon: GitPullRequest },
] as const

function Hero() {
  const t = useTranslations('aboutTeam.hero')

  return (
    <div className="relative overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-34">
          <Subheading>{t('eyebrow')}</Subheading>
          <h1 className="mt-5 max-w-6xl font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.88] md:text-8xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/foundation/governance"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('governance')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/about/team/foundation"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('foundationTeam')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function LayersSection() {
  const t = useTranslations('aboutTeam.layers')

  return (
    <Container className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mt-6 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="border-y border-[#dfe6e2]">
          {governanceLayers.map((layer, index) => (
            <div
              key={layer.id}
              className="grid gap-4 border-[#dfe6e2] py-5 sm:grid-cols-[44px_0.45fr_1fr] sm:items-start [&:not(:first-child)]:border-t"
            >
              <layer.icon className="size-5 text-[#12806a]" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-gray-950">
                  {t(`items.${layer.id}.title`)}
                </h3>
              </div>
              <p className="text-sm/6 text-gray-600">
                {t(`items.${layer.id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function BoardSections() {
  const t = useTranslations('aboutTeam')
  const withRole = (person: PersonProfile): Person => ({
    ...person,
    role: t(`people.${person.id}.role`),
  })

  return (
    <>
      <PeopleSection
        eyebrow={t('board.eyebrow')}
        title={t('board.title')}
        description={t('board.description')}
        people={board.map(withRole)}
      />
      <PeopleSection
        eyebrow={t('advisors.eyebrow')}
        title={t('advisors.title')}
        description={t('advisors.description')}
        people={advisors.map(withRole)}
        columns="lg:grid-cols-1"
      />
    </>
  )
}

function MaintainerSection() {
  const t = useTranslations('aboutTeam.maintainers')
  const maintainerRoles: string[] = t.raw('roles')

  return (
    <div className="bg-[#052e24] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-3">
              {t('title')}
            </Heading>
            <p className="mt-6 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {maintainerRoles.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <BadgeCheck className="mb-7 size-5 text-[#b8f36f]" />
                <p className="text-sm/6 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalSection() {
  const t = useTranslations('aboutTeam.final')

  return (
    <Container className="py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 sm:p-12">
        <ShieldCheck className="size-6 text-[#12806a]" />
        <Heading as="h2" className="mt-6 max-w-4xl">
          {t('title')}
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/7 text-gray-600">{t('body')}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/foundation/governance" className="w-full sm:w-auto">
            {t('governance')}
          </Button>
          <Button
            variant="secondary"
            href="/support"
            className="w-full sm:w-auto"
          >
            {t('support')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default async function Team({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <LayersSection />
        <BoardSections />
        <MaintainerSection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  )
}
