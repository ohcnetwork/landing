import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  BookOpen,
  Code,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GitFork,
  Github,
  Heart,
  MessageCircle,
  Monitor,
  Play,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'developers.meta' })

  return pageMetadata({
    locale,
    path: '/developers',
    title: t('title'),
    description: t('description'),
    keywords:
      'CARE EMR, open source healthcare, Django DRF, React TypeScript, FHIR compliance, healthcare developers, medical software, EMR development, healthcare API, medical records system',
  })
}

function Hero() {
  const t = useTranslations('developers.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <div className="mt-12 flex flex-col gap-x-4 gap-y-4 sm:flex-row">
            <Button
              href="https://github.com/ohcnetwork"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>{t('starGithub')}</span>
            </Button>
            <Button
              variant="secondary"
              href="https://slack.ohc.network"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('joinSlack')}</span>
            </Button>
            <Button
              variant="secondary"
              href="https://docs.ohc.network"
              target="_blank"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              <span>{t('docs')}</span>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-950">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{t('community')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>{t('license')}</span>
            </div>
          </div>
          <div className="mt-10 flex max-w-4xl flex-col gap-4 rounded-lg border border-[#dfe6e2] bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-[#052e24]">
                {t('buildOnCare.title')}
              </p>
              <p className="mt-1 text-sm/6 text-gray-600">
                {t('buildOnCare.body')}
              </p>
            </div>
            <Link
              href="/build-on-care"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm font-medium text-[#0b6b55] hover:text-[#052e24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b6b55]"
            >
              {t('buildOnCare.link')}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TechStackSection() {
  const t = useTranslations('developers.techStack')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#12806a] p-2">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('backend.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('backend.body')}</p>
        </div>
        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#12806a] p-2">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('frontend.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('frontend.body')}</p>
        </div>
      </div>
    </Container>
  )
}

function PrerequisitesSection() {
  const t = useTranslations('developers.prerequisites')

  return (
    <div className="py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          {t('title')}
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#0b6b55] p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('basic.title')}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                {t('basic.items.git')}
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                {t('basic.items.web')}
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                {t('basic.items.languages')}
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                {t('basic.items.cli')}
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#b8f36f] p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('learningPath.title')}
              </h3>
            </div>
            <p className="mb-4 text-gray-600">{t('learningPath.intro')}</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                <a
                  href="https://www.pupilfirst.school/courses/1802/curriculum"
                  target="_blank"
                  className="hover:underline"
                >
                  {t('learningPath.items.wd101', {
                    site: 'pupilfirst.school',
                  })}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                <a
                  href="https://school.ohc.network/courses/1844"
                  target="_blank"
                  className="hover:underline"
                >
                  {t('learningPath.items.djangoForAll')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                <a
                  href="https://school.ohc.network/courses/1843"
                  target="_blank"
                  className="hover:underline"
                >
                  {t('learningPath.items.reactForAll')}
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#12806a] p-2">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('tools.title')}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                {t('tools.items.ide')}
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                {t('tools.items.runtimes')}
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                {t('tools.items.docker')}
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                {t('tools.items.git')}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhatYouCanBuildSection() {
  const t = useTranslations('developers.build')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border border-[#dfe6e2] p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t('items.plugins.title')}
            </h3>
            <p className="text-gray-600">{t('items.plugins.description')}</p>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t('items.modules.title')}
            </h3>
            <p className="text-gray-600">{t('items.modules.description')}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-[#dfe6e2] p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t('items.forms.title')}
            </h3>
            <p className="text-gray-600">{t('items.forms.description')}</p>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t('items.integrations.title')}
            </h3>
            <p className="text-gray-600">
              {t('items.integrations.description')}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function GetStartedSection() {
  const t = useTranslations('developers.getStarted')

  return (
    <div className="py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          {t('title')}
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow={t('cards.setup.eyebrow')}
            title={t('cards.setup.title')}
            description={t('cards.setup.description')}
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#12806a] p-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#052e24]">
                    {t('cards.setup.graphicTitle')}
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">
                    {t('cards.setup.graphicText')}
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="GitHub"
            title={t('cards.issues.title')}
            description={t('cards.issues.description')}
            graphic={
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#12806a] p-4">
                    <Github className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#052e24]">
                    {t('cards.issues.graphicTitle')}
                  </div>
                  <div className="mt-2 text-sm text-[#12806a]">
                    {t('cards.issues.graphicText')}
                  </div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <a
            href="https://slack.ohc.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              eyebrow={t('cards.slack.eyebrow')}
              title={t('cards.slack.title')}
              description={t('cards.slack.description', {
                url: 'slack.ohc.network',
              })}
              graphic={
                <div className="flex h-80 items-center justify-center bg-gradient-to-br from-[#f3f8f5] to-[#e8f2ed]">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b6b55] p-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-[#052e24]">
                      {t('cards.slack.graphicTitle')}
                    </div>
                    <div className="mt-2 text-sm text-[#12806a]">
                      {t('cards.slack.graphicText')}
                    </div>
                  </div>
                </div>
              }
              fade={['bottom']}
              className="cursor-pointer transition-shadow hover:shadow-lg max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl"
            />
          </a>
        </div>

        <div className="mt-16 rounded-lg border border-[#dfe6e2] p-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            {t('steps.title')}
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                {t('steps.backend.title')}
              </h4>
              <p className="mb-3 text-gray-600">{t('steps.backend.body')}</p>
              <a
                href="https://github.com/ohcnetwork/care?tab=readme-ov-file#getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#12806a] hover:text-[#12806a] hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                <span>{t('steps.backend.link')}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                {t('steps.frontend.title')}
              </h4>
              <p className="mb-3 text-gray-600">{t('steps.frontend.body')}</p>
              <a
                href="https://github.com/ohcnetwork/care_fe?tab=readme-ov-file#getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#12806a] hover:text-[#12806a] hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                <span>{t('steps.frontend.link')}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ContributionPathsSection() {
  const t = useTranslations('developers.contribute')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-normal">
        {t('title')}
      </Heading>

      <div className="mt-16 space-y-8">
        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#12806a] p-2">
              <Github className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('find.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('find.body')}</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              {t.rich('find.visit', {
                repo: 'github.com/ohcnetwork/care_fe',
                link: (chunks) => (
                  <a
                    href="https://github.com/ohcnetwork/care_fe/issues"
                    target="_blank"
                    className="hover:underline"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              {t('find.label')}
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#12806a] p-2">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('claim.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('claim.body')}</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {t('claim.comment')}
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t('claim.assign')}
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#0b6b55] p-2">
              <GitFork className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('work.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('work.body')}</p>
        </div>

        <div className="rounded-lg border border-[#dfe6e2] p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#b8f36f] p-2">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t('submit.title')}
            </h3>
          </div>
          <p className="mb-4 text-gray-600">{t('submit.body')}</p>
        </div>
      </div>
    </Container>
  )
}

function LearningResourcesSection() {
  const t = useTranslations('developers.learning')
  // Rich text tags of a resource item; `href` is the target of its <link>.
  const tags = (href?: string) => ({
    strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    link: (chunks: React.ReactNode) => (
      <a href={href} target="_blank" className="hover:underline">
        {chunks}
      </a>
    ),
  })

  return (
    <div className="py-24">
      <Container>
        <Subheading>{t('eyebrow')}</Subheading>
        <Heading
          as="h2"
          className="mt-2 max-w-4xl font-display tracking-normal"
        >
          {t('title')}
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#12806a] p-2">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('groups.backend')}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.django',
                    tags('https://docs.djangoproject.com/'),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.drf',
                    tags('https://www.django-rest-framework.org/'),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Play className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.djangoForAll',
                    tags('https://school.ohc.network/courses/1844'),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.fhir', tags())}</div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#12806a] p-2">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('groups.frontend')}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.react', tags('https://reactjs.org/'))}</div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.typescript',
                    tags('https://www.typescriptlang.org/'),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Play className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.reactForAll',
                    tags('https://school.ohc.network/courses/1843'),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.css', tags())}</div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#0b6b55] p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('groups.basics')}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Play className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  {t.rich(
                    'items.wd101',
                    tags(
                      'https://www.pupilfirst.school/courses/1802/curriculum',
                    ),
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Github className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.git', tags())}</div>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.web', tags())}</div>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.cli', tags())}</div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dfe6e2] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[#b8f36f] p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('groups.healthcare')}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Database className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.emr', tags())}</div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.standards', tags())}</div>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.workflows', tags())}</div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>{t.rich('items.privacy', tags())}</div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function Developers({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <TechStackSection />
        <PrerequisitesSection />
        <WhatYouCanBuildSection />
        <GetStartedSection />
        <ContributionPathsSection />
        <LearningResourcesSection />
      </main>
      <Footer />
    </div>
  )
}
