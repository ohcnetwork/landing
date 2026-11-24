import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { TopGradient } from '@/components/TopGradient'
import { defaultLocale } from '@/i18n/config'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/paths'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Layers3,
  Play,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import styles from './build-on-care.module.css'
import { bootstrapUrl, resources } from './resources'
import { StarterPrompt } from './starter-prompt'
import { Walkthrough } from './walkthrough'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'buildOnCare.meta' })
  const title = t('title')
  const description = t('description')

  return pageMetadata({
    locale,
    path: '/build-on-care',
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://ohc.network${localizePath('/build-on-care', locale)}`,
      siteName: 'Open Healthcare Network',
      images: [
        {
          url: '/og/ohc-landing-cover.png',
          width: 2548,
          height: 1238,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/ohc-landing-cover.png'],
    },
  })
}

const extensions = [
  { id: 'frontend', number: '01' },
  { id: 'backend', number: '02' },
  { id: 'integrations', number: '03' },
] as const

const toolkit = ['scaffold', 'docs', 'skills', 'backendTemplate'] as const

const examples = ['backendExample', 'frontendExample'] as const

function ResourceLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className={styles.textLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

function Architecture() {
  const t = useTranslations('buildOnCare.architecture')
  const capabilities: string[] = t.raw('core.capabilities')

  return (
    <figure
      className={styles.architecture}
      aria-labelledby="architecture-caption"
    >
      <div className={styles.architectureTop} aria-hidden="true">
        <span className={styles.mono}>{t('label')}</span>
        <Layers3 size={18} />
      </div>
      <div className={styles.layers} aria-hidden="true">
        <div className={`${styles.layer} ${styles.coreLayer}`}>
          <span className={styles.layerNumber}>{t('core.number')}</span>
          <div className={styles.layerHeading}>
            Care Core <span className={styles.coreMark}>+</span>
          </div>
          <div className={styles.coreCapabilities}>
            {capabilities.map((capability, index) => (
              <span key={index}>{capability}</span>
            ))}
          </div>
        </div>
        <div className={styles.connector}>
          <span />
          <ArrowDown size={17} />
          <span />
        </div>
        <div className={`${styles.layer} ${styles.extensionLayer}`}>
          <span className={styles.layerNumber}>{t('extension.number')}</span>
          <div className={styles.layerHeading}>
            {t('extension.heading')}
            <Code2 size={22} />
          </div>
          <div className={styles.extensionOptions}>
            <span>{t('extension.options.frontend')}</span>
            <b>/</b>
            <span>{t('extension.options.backend')}</span>
            <b>/</b>
            <span>{t('extension.options.integration')}</span>
          </div>
          <p>{t('extension.body')}</p>
        </div>
        <div className={styles.connector}>
          <span />
          <ArrowDown size={17} />
          <span />
        </div>
        <div className={`${styles.layer} ${styles.workflowLayer}`}>
          <span className={styles.layerNumber}>{t('workflow.number')}</span>
          <div className={styles.layerHeading}>
            {t('workflow.heading')}
            <ArrowUpRight size={23} />
          </div>
          <p>{t('workflow.body')}</p>
        </div>
      </div>
      <figcaption id="architecture-caption">{t('caption')}</figcaption>
    </figure>
  )
}

function Hero() {
  const t = useTranslations('buildOnCare.hero')
  const nav = useTranslations('buildOnCare.sectionNav')

  return (
    <div className={styles.heroShell}>
      <Container className="relative">
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              {t('eyebrow')}
            </p>
            <h1>
              {t.rich('title', {
                accent: (chunks) => <span>{chunks}</span>,
              })}
            </h1>
            <p className={styles.heroDescription}>{t('body')}</p>
            <div className={styles.heroActions}>
              <Button href="#start-building" className={styles.primaryButton}>
                {t('startBuilding')} <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <a href="#walkthrough" className={styles.watchLink}>
                <Play size={16} aria-hidden="true" /> {t('watch')}
              </a>
            </div>
            <ResourceLink href={resources.docs.href}>{t('docs')}</ResourceLink>
            <p className={styles.heroFootnote}>{t('footnote')}</p>
          </div>
          <Architecture />
        </div>
        <nav className={styles.sectionNav} aria-label={nav('label')}>
          <span className={styles.mono}>{nav('title')}</span>
          <a href="#walkthrough">
            {nav('watch')}
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#architecture">
            {nav('understand')}
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#start-building">
            {nav('build')}
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#examples">
            {nav('explore')}
            <ArrowDown size={13} aria-hidden="true" />
          </a>
        </nav>
      </Container>
    </div>
  )
}

function WalkthroughSection() {
  const t = useTranslations('buildOnCare.walkthrough')

  return (
    <section
      id="walkthrough"
      className={styles.section}
      aria-labelledby="walkthrough-title"
    >
      <Container>
        <div className={styles.walkthroughGrid}>
          <div>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h2 id="walkthrough-title" className={styles.sectionTitle}>
              {t('title')}
            </h2>
            <p className={styles.sectionDescription}>{t('body')}</p>
            <p className={styles.walkthroughNote}>{t('note')}</p>
            <a className={styles.textLink} href="#start-building">
              {t('link')}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <Walkthrough
            labels={{
              videoTitle: t('player.videoTitle'),
              load: t('player.load'),
              label: t('player.label'),
              title: t('player.title'),
              hint: t('player.hint'),
              captionIdle: t('player.captionIdle'),
              captionLoaded: t('player.captionLoaded'),
              watchOnLoom: t('player.watchOnLoom'),
            }}
          />
        </div>
      </Container>
    </section>
  )
}

function ArchitectureSection() {
  const t = useTranslations('buildOnCare.platform')

  return (
    <section
      id="architecture"
      className={styles.architectureSection}
      aria-labelledby="architecture-title"
    >
      <Container>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h2 id="architecture-title" className={styles.sectionTitle}>
              {t.rich('title', { br: () => <br /> })}
            </h2>
          </div>
          <p className={styles.sectionDescription}>{t('body')}</p>
        </div>
        <div className={styles.extensionGrid}>
          {extensions.map(({ id, number }) => (
            <div className={styles.extensionDescription} key={id}>
              <span className={styles.mono}>{number}</span>
              <h3>{t(`extensions.${id}.title`)}</h3>
              <p>{t(`extensions.${id}.description`)}</p>
              <p className={styles.technicalDetail}>
                {t.rich(`extensions.${id}.detail`, {
                  file: 'manifest.tsx',
                  code: (chunks) => <code>{chunks}</code>,
                })}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.architectureFooter}>
          <p>{t('footer')}</p>
          <ResourceLink href={resources.docs.href}>{t('link')}</ResourceLink>
        </div>
      </Container>
    </section>
  )
}

function GettingStarted() {
  const t = useTranslations('buildOnCare.start')
  const prompt = useTranslations('buildOnCare.starterPrompt')
  // The starter prompt is always English; mark it on translated pages.
  const promptLang = useLocale() === defaultLocale ? undefined : 'en'
  const strong = (chunks: React.ReactNode) => <strong>{chunks}</strong>

  return (
    <section
      id="start-building"
      className={styles.section}
      aria-labelledby="start-title"
    >
      <Container>
        <p className={styles.eyebrow}>{t('eyebrow')}</p>
        <h2 id="start-title" className={styles.sectionTitle}>
          {t('title')}
        </h2>
        <p className={styles.sectionDescription}>{t('body')}</p>
        <div className={styles.startGrid}>
          <ol className={styles.steps}>
            <li>
              <span className={styles.stepNumber}>01</span>
              <div>
                <h3>{t('steps.workflow.title')}</h3>
                <p>{t('steps.workflow.body')}</p>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>02</span>
              <div>
                <h3>{t('steps.workspace.title')}</h3>
                <p>{t('steps.workspace.body')}</p>
                <p className={styles.prerequisites}>
                  {t('steps.workspace.prerequisites')}
                </p>
                <div className={styles.stepLinks}>
                  <ResourceLink href={resources.scaffold.href}>
                    {t('steps.workspace.scaffold')}
                  </ResourceLink>
                  <ResourceLink href={bootstrapUrl}>
                    {t('steps.workspace.setup')}
                  </ResourceLink>
                </div>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>03</span>
              <div>
                <h3>{t('steps.tools.title')}</h3>
                <p>{t.rich('steps.tools.agent', { strong })}</p>
                <p>{t.rich('steps.tools.docs', { strong })}</p>
                <ResourceLink href={resources.docs.href}>
                  {t('steps.tools.link')}
                </ResourceLink>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>04</span>
              <div>
                <h3>{t('steps.test.title')}</h3>
                <p>{t('steps.test.body')}</p>
              </div>
            </li>
          </ol>
          <StarterPrompt
            promptLang={promptLang}
            labels={{
              label: prompt('label'),
              title: prompt('title'),
              body: prompt('body'),
              promptLabel: prompt('promptLabel'),
              copy: prompt('copy'),
              copied: prompt('copied'),
              helpIdle: prompt('helpIdle'),
              helpCopied: prompt('helpCopied'),
              helpManual: prompt('helpManual'),
            }}
          />
        </div>
        <div className={styles.responsibleNote} role="note">
          <ShieldCheck size={21} aria-hidden="true" />
          <div>
            <h3>{t('note.title')}</h3>
            <p>{t('note.body')}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Resources() {
  const t = useTranslations('buildOnCare.toolkit')

  return (
    <section
      id="resources"
      className={styles.resourcesSection}
      aria-labelledby="resources-title"
    >
      <Container>
        <div className={styles.resourcesGrid}>
          <div>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h2 id="resources-title" className={styles.sectionTitle}>
              {t.rich('title', { br: () => <br /> })}
            </h2>
            <p className={styles.sectionDescription}>
              {t.rich('body', { br: () => <br /> })}
            </p>
          </div>
          <div className={styles.resourceList}>
            {toolkit.map((id) => (
              <a
                className={styles.resourceRow}
                href={resources[id].href}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span className={styles.mono}>{t(`items.${id}.kind`)}</span>
                  <h3>{t(`items.${id}.title`)}</h3>
                  <p>{t(`items.${id}.description`)}</p>
                  <span className={styles.resourceAction}>
                    {t(`items.${id}.action`)}
                  </span>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Examples() {
  const t = useTranslations('buildOnCare.examples')

  return (
    <section
      id="examples"
      className={styles.section}
      aria-labelledby="examples-title"
    >
      <Container>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h2 id="examples-title" className={styles.sectionTitle}>
              {t.rich('title', { br: () => <br /> })}
            </h2>
          </div>
          <p className={styles.sectionDescription}>{t('body')}</p>
        </div>
        <div className={styles.exampleGrid}>
          {examples.map((id, index) => {
            const example = resources[id]

            return (
              <article className={styles.example} key={id}>
                <div className={styles.exampleTop}>
                  <span className={styles.mono}>{t(`items.${id}.kind`)}</span>
                  {index === 0 ? (
                    <GitBranch size={24} aria-hidden="true" />
                  ) : (
                    <Code2 size={24} aria-hidden="true" />
                  )}
                </div>
                <h3>{example.title}</h3>
                <p>{t(`items.${id}.description`)}</p>
                <p className={styles.exampleDetail}>
                  {t(`items.${id}.detail`)}
                </p>
                <div className={styles.exampleBottom}>
                  <span className={styles.repository}>
                    {example.repository}
                  </span>
                  <ResourceLink href={example.href}>
                    {t(`items.${id}.action`)}
                  </ResourceLink>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function BuildIdeas() {
  const t = useTranslations('buildOnCare.ideas')
  const ideas: string[] = t.raw('items')
  const checklist: string[] = t.raw('hackathon.checklist')

  return (
    <section className={styles.ideasSection} aria-labelledby="ideas-title">
      <Container>
        <div className={styles.ideasGrid}>
          <div>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h2 id="ideas-title" className={styles.sectionTitle}>
              {t('title')}
            </h2>
            <p className={styles.sectionDescription}>
              {t.rich('body', { br: () => <br /> })}
            </p>
          </div>
          <ol className={styles.ideasList}>
            {ideas.map((idea, index) => (
              <li key={index}>
                <span className={styles.mono}>0{index + 1}</span>
                <span>{idea}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.hackathon} role="note">
          <div>
            <h3>{t('hackathon.title')}</h3>
            <p>{t('hackathon.body')}</p>
          </div>
          <div>
            <p className={styles.mono}>{t('hackathon.checklistTitle')}</p>
            <ul>
              {checklist.map((item, index) => (
                <li key={index}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Closing() {
  const t = useTranslations('buildOnCare.closing')

  return (
    <section className={styles.closing} aria-labelledby="closing-title">
      <Container>
        <div className={styles.closingInner}>
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h2 id="closing-title">{t('title')}</h2>
          <p>{t('body')}</p>
          <div className={styles.closingActions}>
            <Button className={styles.primaryButton} href="#start-building">
              {t('startBuilding')}
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <ResourceLink href={resources.docs.href}>{t('docs')}</ResourceLink>
          </div>
          <p className={styles.contributorLink}>
            {t.rich('contribute', {
              link: (chunks) => (
                <Link href="/developers">
                  {chunks}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ),
            })}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default async function BuildOnCarePage({ params }: PageProps) {
  await initLocale(params)
  const t = await getTranslations('buildOnCare')

  return (
    <div className={styles.page}>
      <TopGradient />
      <a href="#main-content" className={styles.skipLink}>
        {t('skipLink')}
      </a>
      <Container className="relative">
        <Navbar />
      </Container>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WalkthroughSection />
        <ArchitectureSection />
        <GettingStarted />
        <Resources />
        <Examples />
        <BuildIdeas />
        <Closing />
      </main>
      <Footer showCallToAction={false} />
    </div>
  )
}
