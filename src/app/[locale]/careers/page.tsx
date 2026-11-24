import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import careersData from '@/data/careers.json'
import type { Messages } from '@/i18n/messages'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'careers.meta' })

  return pageMetadata({
    locale,
    path: '/careers',
    title: t('title'),
    description: t('description'),
  })
}

/** Positions are keyed by the `id` in `src/data/careers.json`. */
type PositionId = keyof Messages['careers']['positions']['items']

const positions = careersData.positions as {
  id: PositionId
  applyUrl: string
}[]

function Hero() {
  const t = useTranslations('careers.hero')
  const hasPositions = positions.length > 0

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {hasPositions ? t('hiringTitle') : t('notHiringTitle')}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {hasPositions ? t('hiringBody') : t('notHiringBody')}
          </p>
        </div>
      </Container>
    </div>
  )
}

function OpenPositions() {
  const t = useTranslations('careers.positions')

  return (
    <Container className="py-24">
      <Subheading>{t('eyebrow')}</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        {t('title')}
      </Heading>

      <div className="mt-12 grid gap-8">
        {positions.map((position) => {
          const requirements: string[] = t.raw(
            `items.${position.id}.requirements`,
          )

          return (
            <div
              key={position.id}
              className="rounded-lg border border-[#dfe6e2] bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-950">
                    {t(`items.${position.id}.title`)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#12806a]">
                    {t(`items.${position.id}.type`)} •{' '}
                    {t(`items.${position.id}.location`)}
                  </p>
                </div>
                <Button href={position.applyUrl}>{t('apply')}</Button>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  {t('requirements')}
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {requirements.map((req, reqIndex) => (
                    <li
                      key={reqIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f2ed] text-[#12806a]">
                        ✓
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default async function Careers({ params }: PageProps) {
  await initLocale(params)
  const hasPositions = positions.length > 0

  return (
    <main className="overflow-hidden">
      <Hero />
      {hasPositions && <OpenPositions />}
      <Footer />
    </main>
  )
}
