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
  Github,
  Mail,
  MessageCircle,
  Network,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'contact.meta' })

  return pageMetadata({
    locale,
    path: '/contact',
    title: t('title'),
    description: t('description'),
    keywords:
      'OHC contact, open healthcare foundation, CARE deployment, healthcare collaboration',
  })
}

const supportEmail = 'support@ohc.network'

const contactPaths = [
  {
    id: 'partnerships',
    href: `mailto:${supportEmail}`,
    email: supportEmail,
    icon: Mail,
  },
  {
    id: 'developers',
    href: 'https://github.com/ohcnetwork',
    icon: Github,
  },
  {
    id: 'slack',
    href: 'https://slack.ohc.network',
    icon: MessageCircle,
  },
] as const

const resources = [
  { id: 'foundation', href: '/about', icon: Network },
  { id: 'careCore', href: '/product/care-core', icon: BookOpen },
  { id: 'support', href: '/support', icon: Mail },
] as const

function Hero() {
  const t = useTranslations('contact.hero')

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-5xl pt-16 pb-24 text-center sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <Subheading>{t('eyebrow')}</Subheading>
          <h1 className="mt-4 font-display text-5xl/[0.92] font-bold tracking-normal text-balance text-gray-950 sm:text-7xl/[0.9] md:text-8xl/[0.86]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('body')}
          </p>
          <p className="mt-6 text-base/7 text-gray-600">
            {t.rich('emailUs', {
              email: supportEmail,
              link: (chunks) => (
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-[#12806a] hover:text-[#0b5f4f]"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </Container>
    </div>
  )
}

function ContactPathsSection() {
  const t = useTranslations('contact.paths')

  return (
    <Container className="py-24">
      <div className="grid gap-px overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] shadow-[0_24px_70px_rgba(6,63,50,0.08)] lg:grid-cols-3">
        {contactPaths.map((path) => (
          <div key={path.id} className="bg-white p-8">
            <path.icon className="size-6 text-[#12806a]" />
            <h2 className="mt-10 text-2xl font-semibold text-gray-950">
              {t(`${path.id}.title`)}
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">
              {t(`${path.id}.description`)}
            </p>
            <Button
              variant="secondary"
              href={path.href}
              target={path.href.startsWith('http') ? '_blank' : undefined}
              className="mt-8 inline-flex items-center gap-2"
            >
              <span>
                {'email' in path ? path.email : t(`${path.id}.label`)}
              </span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ResourceSection() {
  const t = useTranslations('contact.resources')

  return (
    <div className="bg-[#f7f9f6] py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading>{t('eyebrow')}</Subheading>
          <Heading as="h2" className="mt-3">
            {t('title')}
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg/7 text-gray-600">
            {t('body')}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {resources.map(({ id, href, icon: Icon }) => (
            <Link
              key={id}
              href={href}
              className="group rounded-lg border border-[#dfe6e2] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#bdd0c5] hover:shadow-[0_18px_45px_rgba(6,63,50,0.08)]"
            >
              <Icon className="size-5 text-[#12806a]" />
              <h3 className="mt-8 text-lg font-semibold text-gray-950">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-600">
                {t(`items.${id}.description`)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FooterNote() {
  const t = useTranslations('contact')

  return (
    <Container className="py-12">
      <p className="mx-auto max-w-3xl text-center text-sm/6 text-gray-600">
        {t.rich('footerNote', {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
    </Container>
  )
}

export default async function Contact({ params }: PageProps) {
  await initLocale(params)

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <Hero />
      <main>
        <ContactPathsSection />
        <ResourceSection />
        <FooterNote />
      </main>
      <Footer />
    </div>
  )
}
