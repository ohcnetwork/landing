import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe,
  Info,
  Monitor,
  Wifi,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { ArticleActions, ArticleNavigation } from './article-navigation'
import {
  articleSections,
  practicalSpecifications,
  requirementGroups,
  type RequirementGroup,
} from './requirements'
import s from './system-requirements.module.css'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({
    locale,
    namespace: 'systemRequirements.meta',
  })
  const title = t('title')
  const description = t('description')

  return pageMetadata({
    locale,
    path: '/system-requirements',
    title,
    description,
    openGraph: {
      title,
      description,
      url: localizePath('/system-requirements', locale),
      type: 'website',
      siteName: 'Open Healthcare Network',
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
      title,
      description,
      card: 'summary_large_image',
      site: '@ohcnetwork',
      images: ['/og/ohc-landing-cover.png'],
    },
  })
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

function RequirementsTable({ group }: { group: RequirementGroup }) {
  const t = useTranslations('systemRequirements')

  return (
    <>
      <p>{t(`groups.${group.key}`)}</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <caption className="sr-only">
            {t('requirementsTable.caption', {
              group: t(`sections.${group.key}`),
            })}
          </caption>
          <thead>
            <tr>
              <th scope="col">{t('requirementsTable.requirement')}</th>
              <th scope="col">{t('requirementsTable.whatYouNeed')}</th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((row) => (
              <tr key={row}>
                <th scope="row">{t(`requirements.${row}.item`)}</th>
                <td>
                  {t(`requirements.${row}.requirement`)}
                  <p className={s.tableGuidance}>
                    {t(`requirements.${row}.guidance`)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function PracticalSpecificationsTable() {
  const t = useTranslations('systemRequirements.practical')

  return (
    <div className={s.comparisonWrap}>
      <table className={s.comparisonTable} role="table">
        <caption className="sr-only">{t('table.caption')}</caption>
        <thead role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">
              {t('table.component')}
            </th>
            <th scope="col" role="columnheader">
              {t('table.baseline')}
            </th>
            <th scope="col" role="columnheader">
              {t('table.recommended')}
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {practicalSpecifications.map((row) => (
            <tr key={row} role="row">
              <th scope="row" role="rowheader">
                {t(`rows.${row}.component`)}
              </th>
              <td data-label={t('table.baseline')} role="cell">
                {t(`rows.${row}.baseline`)}
              </td>
              <td data-label={t('table.recommendedShort')} role="cell">
                {t(`rows.${row}.recommended`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function SystemRequirements({ params }: PageProps) {
  await initLocale(params)
  const t = await getTranslations('systemRequirements')

  return (
    <div className={s.page} id="top">
      <a className={s.skipLink} href="#article">
        {t('skipToArticle')}
      </a>
      <div className={s.siteHeader}>
        <Container>
          <Navbar />
        </Container>
      </div>
      <main className={s.shell}>
        <nav aria-label={t('breadcrumb.label')} className={s.breadcrumb}>
          <Link href="/">{t('breadcrumb.home')}</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <Link href="/product/care-core">{t('breadcrumb.care')}</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page">{t('breadcrumb.current')}</span>
        </nav>
        <div className={s.layout}>
          <aside className={s.sidebar}>
            <ArticleNavigation
              sections={articleSections.map(({ id, key }) => ({
                id,
                title: t(`sections.${key}`),
              }))}
              labels={{
                title: t('toc.title'),
                helpTitle: t('toc.helpTitle'),
                helpBody: t('toc.helpBody'),
                contact: t('toc.contact'),
              }}
            />
          </aside>
          <article id="article" className={s.article} tabIndex={-1}>
            <header className={s.articleHeader}>
              <p className={s.eyebrow}>
                <span /> {t('header.eyebrow')}
              </p>
              <h1>
                {t.rich('header.title', {
                  br: () => <br />,
                  span: (chunks) => <span>{chunks}</span>,
                })}
              </h1>
              <p className={s.lede}>{t('header.lede')}</p>
              <div className={s.articleMeta}>
                <ArticleActions
                  labels={{
                    copyLink: t('actions.copyLink'),
                    linkCopied: t('actions.linkCopied'),
                    copyFailed: t('actions.copyFailed'),
                    print: t('actions.print'),
                  }}
                />
              </div>
            </header>

            <div className={s.quickLinks} aria-label={t('quickLinks.label')}>
              <a href="#web-browsers">
                <Globe aria-hidden="true" />
                <span>
                  {t('quickLinks.browsers.title')}
                  <span>{t('quickLinks.browsers.detail')}</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#practical-specifications">
                <Monitor aria-hidden="true" />
                <span>
                  {t('quickLinks.devices.title')}
                  <span>{t('quickLinks.devices.detail')}</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#network">
                <Wifi aria-hidden="true" />
                <span>
                  {t('quickLinks.connection.title')}
                  <span>{t('quickLinks.connection.detail')}</span>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <Section
              id="general-requirements"
              number="01"
              title={t('sections.general')}
            >
              <p>{t('general.body')}</p>
              <div className={s.note}>
                <Info size={19} aria-hidden="true" />
                <div>
                  <strong>{t('general.noteTitle')}</strong>
                  <p>{t('general.noteBody')}</p>
                </div>
              </div>
            </Section>

            <Section
              id="practical-specifications"
              number="02"
              title={t('sections.practical')}
            >
              <p>{t('practical.intro')}</p>
              <PracticalSpecificationsTable />
              <div className={s.note}>
                <Info size={19} aria-hidden="true" />
                <div>
                  <strong>{t('practical.noteTitle')}</strong>
                  <p>
                    {t.rich('practical.noteBody', {
                      link: (chunks) => (
                        <a href="https://www.intel.com/content/www/us/en/support/articles/000055639/processors.html">
                          {chunks}
                        </a>
                      ),
                    })}
                  </p>
                </div>
              </div>
              <p className={s.smallText}>{t('practical.planning')}</p>
              <p className={s.smallText}>
                {t.rich('practical.reference', {
                  link: (chunks) => (
                    <a href="https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058323">
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </Section>

            {requirementGroups.map((group, index) => (
              <Section
                key={group.id}
                id={group.id}
                number={String(index + 3).padStart(2, '0')}
                title={t(`sections.${group.key}`)}
              >
                <RequirementsTable group={group} />
              </Section>
            ))}

            <Section
              id="getting-started"
              number="07"
              title={t('sections.gettingStarted')}
            >
              <p>{t('gettingStarted.intro')}</p>
              <ul className={s.checklist}>
                {(t.raw('gettingStarted.checklist') as string[]).map(
                  (item, index) => (
                    <li key={index}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Section>

            <div className={s.helpPanel}>
              <div>
                <span className={s.eyebrow}>{t('help.eyebrow')}</span>
                <h2>{t('help.title')}</h2>
                <p>{t('help.body')}</p>
              </div>
              <Link href="/contact">
                {t('help.contact')}{' '}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className={s.articleEnd}>
              <a href="#top">{t('backToTop')}</a>
            </div>
          </article>
        </div>
      </main>
      <Footer showCallToAction={false} />
    </div>
  )
}
