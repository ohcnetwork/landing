import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { CorePluginCloud } from '@/components/core-plugin-cloud'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { YouTubeVideo } from '@/components/youtube-video'
import { defaultLocale } from '@/i18n/config'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import { getFeaturedPosts } from '@/lib/blog'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Braces,
  BrainCircuit,
  Building2,
  CircleCheck,
  Code2,
  FileCheck2,
  Globe2,
  Hospital,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wallet,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useFormatter, useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'home.meta' })

  return pageMetadata({
    locale,
    path: '/',
    title: t('title'),
    description: t('description'),
    keywords:
      'Open Healthcare Network Foundation, CARE, Digital Public Goods, open source health infrastructure, healthcare DPI, FHIR R5, MIT license, ABDM, TeleICU, HMIS',
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      images: [
        {
          url: '/og/ohc-landing-cover.png',
          width: 1920,
          height: 1080,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('twitterDescription'),
      images: ['/og/ohc-landing-cover.png'],
    },
  })
}

const credibilityPoints = ['dpg', 'mit', 'fhir'] as const

const operatingSystem = [
  'core',
  'standards',
  'quality',
  'ecosystem',
  'ai',
] as const

const standards = [
  ['FHIR R5', Braces],
  ['SNOMED CT', FileCheck2],
  ['LOINC', BookOpenCheck],
  ['UCUM', Code2],
  ['ICD-10', ShieldCheck],
  ['ABDM', Globe2],
] as const

const compounding = [
  { id: 'software', icon: Layers3 },
  { id: 'distribution', icon: Network },
  { id: 'data', icon: BrainCircuit },
  { id: 'governance', icon: Landmark },
] as const

const audiences = [
  { id: 'governments', href: '/contact', icon: Landmark },
  { id: 'funders', href: '/support', icon: Wallet },
  {
    id: 'hospitals',
    href: '/solutions/hospital-management',
    icon: Hospital,
  },
  {
    id: 'partners',
    href: '/ecosystem/implementation-partners',
    icon: Building2,
  },
  { id: 'developers', href: '/developers', icon: Code2 },
  { id: 'clinicians', href: '/ecosystem/clinicians', icon: Stethoscope },
] as const

const solutionListing = [
  {
    id: 'hmis',
    logo: '/logos/care-hmis.svg',
    href: '/solutions/hospital-management',
  },
  {
    id: 'teleicu',
    logo: '/logos/care-teleicu.svg',
    href: '/solutions/teleicu',
  },
  {
    id: 'palliative',
    logo: '/logos/care-palliative.svg',
    href: '/solutions/palliative-care',
  },
  {
    id: 'clinic',
    logo: '/logos/care-logo.svg',
    href: '/solutions/care-clinics',
  },
  {
    id: 'janwar',
    logo: '/logos/care-janwar.svg',
    href: '/solutions/care-janwar',
  },
] as const

const impactFacts = ['dpg', 'mit', 'apis'] as const

function GridField({ dark = false }: { dark?: boolean }) {
  const color = dark ? 'rgba(130, 217, 229, 0.10)' : 'rgba(9, 35, 50, 0.055)'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.13), transparent)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.13), transparent)',
      }}
    />
  )
}

function ProductStage() {
  return (
    <div className="relative mx-auto mt-16 mb-12 max-w-6xl px-0 sm:mt-20 sm:mb-16">
      <div className="absolute inset-x-6 top-10 bottom-0 bg-[linear-gradient(180deg,rgba(18,128,106,0.26),rgba(9,35,50,0.08)_44%,transparent)] blur-3xl" />
      <CorePluginCloud />
    </div>
  )
}

function Hero() {
  const t = useTranslations('home.hero')

  return (
    <div className="relative isolate overflow-hidden bg-[#f7f9f6]">
      <TopGradient />
      <GridField />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-6xl pt-16 pb-8 text-center sm:pt-24">
          <div className="mx-auto mb-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-[#cad8cf] bg-white/78 px-3 py-2 text-sm font-semibold text-[#173d34] shadow-[0_10px_30px_rgba(8,20,31,0.08)] backdrop-blur-xl">
            <BadgeCheck className="size-4 text-[#12806a]" />
            <span>{t('badges.dpg')}</span>
            <span className="text-gray-400">/</span>
            <span>{t('badges.mit')}</span>
            <span className="text-gray-400">/</span>
            <span>{t('badges.selfHostable')}</span>
          </div>
          <h1 className="mx-auto max-w-6xl font-display text-5xl/[0.94] font-bold tracking-normal text-balance text-[#05070c] sm:text-7xl/[0.9] md:text-8xl/[0.86] lg:text-9xl/[0.84]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl/8 font-medium text-gray-700 sm:text-2xl/9">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href="/product/care-core"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('exploreCare')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/support"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('fundCommons')}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              <span>{t('partner')}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <ProductStage />
      </Container>
    </div>
  )
}

function CredibilityBand() {
  const t = useTranslations('home.credibility')

  return (
    <div className="border-y border-[#dfe6e2] bg-white/76 backdrop-blur-xl">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.64fr_1.36fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#12806a] uppercase">
              {t('eyebrow')}
            </p>
            <p className="mt-3 max-w-xl text-xl/7 font-semibold tracking-normal text-gray-950 sm:text-2xl/8">
              {t('title')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {credibilityPoints.map((id) => (
                <div key={id} className="flex gap-3">
                  <CircleCheck className="mt-1 size-4 shrink-0 text-[#12806a]" />
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      {t(`points.${id}.label`)}
                    </p>
                    <p className="mt-1 text-sm/5 text-gray-600">
                      {t(`points.${id}.detail`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 border-t border-[#dfe6e2] pt-7 lg:grid-cols-[140px_1fr] lg:items-center">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
                {t('supportedBy')}
              </p>
              <LogoCloud />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FoundationLayerSection() {
  const t = useTranslations('home.foundationLayer')

  return (
    <Container className="py-28 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-4">
            {t('title')}
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="border-y border-[#dfe6e2]">
          {operatingSystem.map((id, index) => (
            <div
              key={id}
              className="grid gap-4 border-[#dfe6e2] py-5 md:grid-cols-[0.42fr_1fr] md:gap-8 [&:not(:first-child)]:border-t"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-gray-950">
                  {t(`items.${id}.title`)}
                </h3>
              </div>
              <p className="text-sm/6 text-gray-600">
                {t(`items.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CareSection() {
  const t = useTranslations('home.care')
  const careModules: string[] = t.raw('modules')

  return (
    <div className="relative overflow-hidden bg-[#052e24] py-28 text-white">
      <GridField dark />
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <Subheading dark>{t('eyebrow')}</Subheading>
          <Heading as="h2" dark className="mt-4">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-7 max-w-3xl text-lg/7 text-white/68">
            {t('body')}
          </p>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {careModules.map((module, index) => (
            <div
              key={index}
              className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#b8f36f]/45 hover:bg-white/[0.075]"
            >
              <div className="flex items-center justify-between">
                <Workflow className="size-5 text-[#b8f36f]" />
                <span className="font-mono text-xs text-white/35">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-8 text-base/6 font-semibold text-white">
                {module}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/product/care-core" className="w-full sm:w-auto">
            {t('careCore')}
          </Button>
          <Button
            variant="secondary"
            href="/product/apps-integrations"
            className="w-full sm:w-auto"
          >
            {t('appsIntegrations')}
          </Button>
        </div>
      </Container>
    </div>
  )
}

function SolutionListingSection() {
  const t = useTranslations('home.solutions')

  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-4">
              {t('title')}
            </Heading>
          </div>
          <p className="text-lg/7 text-gray-600">{t('body')}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-2 lg:grid-cols-5">
          {solutionListing.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="group flex min-h-[320px] flex-col bg-white p-6 transition hover:bg-[#fbfcfb]"
            >
              <div className="flex h-28 items-center justify-center rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-5">
                <img
                  src={solution.logo}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-8 text-xl/7 font-semibold text-gray-950">
                {t(`items.${solution.id}.title`)}
              </h3>
              <p className="mt-3 flex-1 text-sm/6 text-gray-600">
                {t(`items.${solution.id}.description`)}
              </p>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
                {t('explore')}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="secondary" href="/solutions">
            {t('viewAll')}
          </Button>
        </div>
      </Container>
    </div>
  )
}

function StandardsSection() {
  const t = useTranslations('home.standards')

  return (
    <Container className="py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-4">
            {t('title')}
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {standards.map(([name, Icon]) => (
            <div
              key={name}
              className="rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-sm transition hover:border-[#bdd0c5] hover:shadow-[0_18px_45px_rgba(8,20,31,0.08)]"
            >
              <Icon className="size-5 text-[#0f8b6c]" />
              <p className="mt-10 text-xl font-semibold text-gray-950">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CompoundingSection() {
  const t = useTranslations('home.compounding')

  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Subheading>{t('eyebrow')}</Subheading>
            <Heading as="h2" className="mt-4">
              {t('title')}
            </Heading>
          </div>
          <p className="text-lg/7 text-gray-600">{t('body')}</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] md:grid-cols-2 lg:grid-cols-4">
          {compounding.map((item, index) => (
            <div key={item.id} className="bg-white p-6">
              <div className="flex items-center justify-between">
                <item.icon className="size-6 text-[#12806a]" />
                <span className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-10 text-lg font-semibold text-gray-950">
                {t(`items.${item.id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${item.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ImpactSection() {
  const t = useTranslations('home.impact')

  return (
    <Container className="py-28">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-4">
            {t('title')}
          </Heading>
          <p className="mt-7 text-lg/7 text-gray-600">{t('body')}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/impact" className="w-full sm:w-auto">
              {t('viewImpact')}
            </Button>
            <Button
              variant="secondary"
              href="/press-media"
              className="w-full sm:w-auto"
            >
              {t('pressFacts')}
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#dfe6e2] bg-white shadow-[0_22px_70px_rgba(8,20,31,0.09)]">
          <div className="h-80 border-b border-[#dfe6e2]">
            <Map />
          </div>
          <div className="grid divide-y divide-[#dfe6e2] md:grid-cols-3 md:divide-x md:divide-y-0">
            {impactFacts.map((id) => (
              <div key={id} className="p-5">
                <p className="text-xl font-semibold text-gray-950">
                  {t(`facts.${id}.label`)}
                </p>
                <p className="mt-2 text-sm/6 text-gray-600">
                  {t(`facts.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function GitHubVideoSection() {
  const t = useTranslations('home.github')

  return (
    <div className="border-y border-[#dfe6e2] bg-[#f7f9f6] py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-4">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            {t('body')}
          </p>
        </div>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#dfe6e2] bg-white p-2 shadow-[0_28px_90px_rgba(6,63,50,0.12)]">
          <YouTubeVideo
            videoId="-wxIzaqvkQA"
            title={t('videoTitle')}
            className="overflow-hidden rounded-lg"
          />
        </div>
      </Container>
    </div>
  )
}

function BlogSection() {
  const t = useTranslations('home.blog')
  const format = useFormatter()
  // Blog posts are written in English; mark them so assistive technology
  // reads them correctly on translated pages.
  const contentLang = useLocale() === defaultLocale ? undefined : 'en'
  const posts = getFeaturedPosts(3)

  if (posts.length === 0) return null

  return (
    <Container className="py-28">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-4">
            {t('title')}
          </Heading>
        </div>
        <div className="lg:justify-self-end">
          <Button variant="secondary" href="/blog">
            {t('readBlog')}
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white p-6 transition hover:bg-[#fbfcfb]"
          >
            <p className="font-mono text-xs font-semibold tracking-wide text-[#6b7880] uppercase">
              {format.dateTime(new Date(post.publishedAt), 'short')}
            </p>
            <h3
              lang={contentLang}
              className="mt-8 text-2xl/7 font-semibold text-gray-950"
            >
              {post.title}
            </h3>
            <p lang={contentLang} className="mt-4 text-sm/6 text-gray-600">
              {post.excerpt}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12806a]">
              {t('readEssay')}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </Link>
        ))}
      </div>
    </Container>
  )
}

function AudienceSection() {
  const t = useTranslations('home.audience')

  return (
    <div className="relative overflow-hidden bg-[#052e24] py-28 text-white">
      <GridField dark />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Subheading dark>{t('eyebrow')}</Subheading>
            <Heading as="h2" dark className="mt-4">
              {t('title')}
            </Heading>
            <p className="mt-7 text-lg/7 text-white/65">{t('body')}</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            {audiences.map(({ id, href, icon: Icon }) => (
              <Link
                key={id}
                href={href}
                className="group grid gap-4 border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075] md:grid-cols-[38px_0.35fr_1fr_24px] md:items-center [&:not(:first-child)]:border-t"
              >
                <Icon className="size-5 text-[#b8f36f]" />
                <h3 className="text-lg font-semibold text-white">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="text-sm/6 text-white/62">
                  {t(`items.${id}.text`)}
                </p>
                <ArrowRight className="size-4 text-[#b8f36f] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalCtaSection() {
  const t = useTranslations('home.finalCta')

  return (
    <Container className="py-28">
      <div className="relative overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#f7f9f6] p-8 shadow-sm sm:p-12">
        <GridField />
        <div className="relative mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto size-6 text-[#0f8b6c]" />
          <Heading as="h2" className="mt-6">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg/7 text-gray-600">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/support" className="w-full sm:w-auto">
              {t('fund')}
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="w-full sm:w-auto"
            >
              {t('conversation')}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default async function Home({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <CredibilityBand />
        <FoundationLayerSection />
        <CareSection />
        <SolutionListingSection />
        <StandardsSection />
        <CompoundingSection />
        <GitHubVideoSection />
        <ImpactSection />
        <Testimonials />
        <BlogSection />
        <AudienceSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
