import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { TopGradient } from '@/components/TopGradient'
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
import styles from './build-on-care.module.css'
import { bootstrapUrl, resources } from './resources'
import { StarterPrompt } from './starter-prompt'
import { Walkthrough } from './walkthrough'

const title = 'Build on Care | Open Healthcare Network'
const description =
  'Build plugins, integrations, and AI-assisted workflows on Care. Watch the walkthrough, explore real examples, and start with the Care plugin scaffold.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://ohc.network/build-on-care' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://ohc.network/build-on-care',
    siteName: 'Open Healthcare Network',
    images: [
      {
        url: '/og/ohc-landing-cover.png',
        width: 2548,
        height: 1238,
        alt: 'Open Healthcare Network — Digital Public Goods for Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og/ohc-landing-cover.png'],
  },
}

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
  return (
    <figure
      className={styles.architecture}
      aria-labelledby="architecture-caption"
    >
      <div className={styles.architectureTop} aria-hidden="true">
        <span className={styles.mono}>THE BUILDING BLOCKS</span>
        <Layers3 size={18} />
      </div>
      <div className={styles.layers} aria-hidden="true">
        <div className={`${styles.layer} ${styles.coreLayer}`}>
          <span className={styles.layerNumber}>01 / THE FOUNDATION</span>
          <div className={styles.layerHeading}>
            Care Core <span className={styles.coreMark}>+</span>
          </div>
          <div className={styles.coreCapabilities}>
            <span>Patients & encounters</span>
            <span>Forms & questionnaires</span>
            <span>Scheduling</span>
            <span>Facilities & organizations</span>
          </div>
        </div>
        <div className={styles.connector}>
          <span />
          <ArrowDown size={17} />
          <span />
        </div>
        <div className={`${styles.layer} ${styles.extensionLayer}`}>
          <span className={styles.layerNumber}>02 / YOUR EXTENSION</span>
          <div className={styles.layerHeading}>
            Make it your own.
            <Code2 size={22} />
          </div>
          <div className={styles.extensionOptions}>
            <span>Frontend</span>
            <b>/</b>
            <span>Backend</span>
            <b>/</b>
            <span>Integration</span>
          </div>
          <p>Choose what your workflow needs.</p>
        </div>
        <div className={styles.connector}>
          <span />
          <ArrowDown size={17} />
          <span />
        </div>
        <div className={`${styles.layer} ${styles.workflowLayer}`}>
          <span className={styles.layerNumber}>03 / THE EXPERIENCE</span>
          <div className={styles.layerHeading}>
            A useful workflow.
            <ArrowUpRight size={23} />
          </div>
          <p>For a care team, an administrator, or the people you build for.</p>
        </div>
      </div>
      <figcaption id="architecture-caption">
        Care Core provides shared healthcare capabilities. Add the frontend,
        backend, or integration your feature needs to create a focused workflow.
      </figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <div className={styles.heroShell}>
      <Container className="relative">
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              BUILD ON CARE
            </p>
            <h1>
              Build your next healthcare application <span>on Care.</span>
            </h1>
            <p className={styles.heroDescription}>
              Create plugins, integrations and AI-assisted workflows on an
              open-source healthcare platform. Start with the walkthrough, use
              the developer tools, and bring your idea to life.
            </p>
            <div className={styles.heroActions}>
              <Button href="#start-building" className={styles.primaryButton}>
                Start building <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <a href="#walkthrough" className={styles.watchLink}>
                <Play size={16} aria-hidden="true" /> Watch the walkthrough
              </a>
            </div>
            <ResourceLink href={resources.docs.href}>
              Read the plugin docs
            </ResourceLink>
            <p className={styles.heroFootnote}>
              Your idea. A shared foundation. Open source.
            </p>
          </div>
          <Architecture />
        </div>
        <nav className={styles.sectionNav} aria-label="On this page">
          <span className={styles.mono}>A PLACE TO BEGIN</span>
          <a href="#walkthrough">
            Watch
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#architecture">
            Understand
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#start-building">
            Build
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <a href="#examples">
            Explore
            <ArrowDown size={13} aria-hidden="true" />
          </a>
        </nav>
      </Container>
    </div>
  )
}

function WalkthroughSection() {
  return (
    <section
      id="walkthrough"
      className={styles.section}
      aria-labelledby="walkthrough-title"
    >
      <Container>
        <div className={styles.walkthroughGrid}>
          <div>
            <p className={styles.eyebrow}>01 / THE WALKTHROUGH</p>
            <h2 id="walkthrough-title" className={styles.sectionTitle}>
              See how to build on Care.
            </h2>
            <p className={styles.sectionDescription}>
              A walkthrough to help you get started with Care’s developer tools
              and plugin ecosystem.
            </p>
            <p className={styles.walkthroughNote}>
              Get oriented, then take the next step with the scaffold and
              documentation below.
            </p>
            <a className={styles.textLink} href="#start-building">
              Go to the getting-started path
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <Walkthrough />
        </div>
      </Container>
    </section>
  )
}

function ArchitectureSection() {
  const extensions = [
    {
      number: '01',
      title: 'Frontend plugins',
      description:
        'Add the interface your users need: a view, a navigation entry, or a component in an existing workflow.',
      detail: (
        <>
          React apps declare supported extension points in a{' '}
          <code>manifest.tsx</code> and can be delivered through Vite module
          federation.
        </>
      ),
    },
    {
      number: '02',
      title: 'Backend plugins',
      description:
        'Add server-side logic, APIs, or a connection to an external service. Keep service credentials on the server.',
      detail: (
        <>
          Django apps register with Care’s PlugManager and expose their own
          namespaced API routes.
        </>
      ),
    },
    {
      number: '03',
      title: 'Integrations',
      description:
        'Connect a device or another system to a focused Care workflow using the available APIs and extension points.',
      detail: (
        <>
          Use a frontend, a backend, or both as needed. Check the supported
          interfaces for your target Care version.
        </>
      ),
    },
  ]
  return (
    <section
      id="architecture"
      className={styles.architectureSection}
      aria-labelledby="architecture-title"
    >
      <Container>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>02 / THE PLATFORM</p>
            <h2 id="architecture-title" className={styles.sectionTitle}>
              Extend the platform.
              <br />
              Build your workflow.
            </h2>
          </div>
          <p className={styles.sectionDescription}>
            Reuse Care’s patient and encounter data, forms, scheduling, and
            organizational structure. Keep your extension focused on the new
            experience you want to create.
          </p>
        </div>
        <div className={styles.extensionGrid}>
          {extensions.map((extension) => (
            <div className={styles.extensionDescription} key={extension.title}>
              <span className={styles.mono}>{extension.number}</span>
              <h3>{extension.title}</h3>
              <p>{extension.description}</p>
              <p className={styles.technicalDetail}>{extension.detail}</p>
            </div>
          ))}
        </div>
        <div className={styles.architectureFooter}>
          <p>
            Not every feature needs both a frontend and a backend plugin. Some
            ideas may need changes to core.
          </p>
          <ResourceLink href={resources.docs.href}>
            Explore the architecture
          </ResourceLink>
        </div>
      </Container>
    </section>
  )
}

function GettingStarted() {
  return (
    <section
      id="start-building"
      className={styles.section}
      aria-labelledby="start-title"
    >
      <Container>
        <p className={styles.eyebrow}>03 / YOUR FIRST BUILD</p>
        <h2 id="start-title" className={styles.sectionTitle}>
          From an idea to your first plugin.
        </h2>
        <p className={styles.sectionDescription}>
          Start small. Make one workflow work from end to end.
        </p>
        <div className={styles.startGrid}>
          <ol className={styles.steps}>
            <li>
              <span className={styles.stepNumber}>01</span>
              <div>
                <h3>Choose a focused workflow</h3>
                <p>
                  Define the user, their problem, and one useful outcome. Choose
                  a small feature you can demonstrate with synthetic data.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>02</span>
              <div>
                <h3>Set up your workspace</h3>
                <p>
                  The Care scaffold brings together plugin-building guidance and
                  frontend and backend templates in an isolated development
                  workspace.
                </p>
                <p className={styles.prerequisites}>
                  Have Git, Node.js/npm, Python 3, and Docker with Compose
                  available. Check the current setup instructions for required
                  versions and environment checks.
                </p>
                <div className={styles.stepLinks}>
                  <ResourceLink href={resources.scaffold.href}>
                    Open the scaffold
                  </ResourceLink>
                  <ResourceLink href={bootstrapUrl}>
                    Setup instructions
                  </ResourceLink>
                </div>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>03</span>
              <div>
                <h3>Build with the right tools</h3>
                <p>
                  <strong>With an AI coding agent:</strong> use the starter
                  prompt and let the scaffold’s plugin-building guidance help
                  shape your implementation.
                </p>
                <p>
                  <strong>With the documentation:</strong> follow the plugin
                  guide and use the templates as a starting point.
                </p>
                <ResourceLink href={resources.docs.href}>
                  Read the plugin guide
                </ResourceLink>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>04</span>
              <div>
                <h3>Test the workflow</h3>
                <p>
                  Run the demo end to end. Check permissions, write clear setup
                  instructions, and document limitations. A working prototype is
                  the starting point for further validation.
                </p>
              </div>
            </li>
          </ol>
          <StarterPrompt />
        </div>
        <div className={styles.responsibleNote} role="note">
          <ShieldCheck size={21} aria-hidden="true" />
          <div>
            <h3>Build with synthetic data.</h3>
            <p>
              Use synthetic data while developing and demonstrating your
              project. Before using a solution in clinical care, validate the
              workflow and review security, access controls, privacy and
              operational requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Resources() {
  return (
    <section
      id="resources"
      className={styles.resourcesSection}
      aria-labelledby="resources-title"
    >
      <Container>
        <div className={styles.resourcesGrid}>
          <div>
            <p className={styles.eyebrow}>04 / THE TOOLKIT</p>
            <h2 id="resources-title" className={styles.sectionTitle}>
              Keep these
              <br />
              within reach.
            </h2>
            <p className={styles.sectionDescription}>
              A short path to the source.
              <br />
              Start with the scaffold and the docs; go deeper when your idea
              needs it.
            </p>
          </div>
          <div className={styles.resourceList}>
            {[
              resources.scaffold,
              resources.docs,
              resources.skills,
              resources.backendTemplate,
            ].map((resource) => (
              <a
                className={styles.resourceRow}
                href={resource.href}
                key={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span className={styles.mono}>{resource.kind}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className={styles.resourceAction}>
                    {resource.action}
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
  return (
    <section
      id="examples"
      className={styles.section}
      aria-labelledby="examples-title"
    >
      <Container>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>05 / IN THE OPEN</p>
            <h2 id="examples-title" className={styles.sectionTitle}>
              Real code.
              <br />
              Useful starting points.
            </h2>
          </div>
          <p className={styles.sectionDescription}>
            Look inside two extensions to see how the pieces fit. These are
            reference implementations; check their setup, dependencies, and
            compatibility with your Care version.
          </p>
        </div>
        <div className={styles.exampleGrid}>
          {[resources.backendExample, resources.frontendExample].map(
            (example, index) => (
              <article className={styles.example} key={example.href}>
                <div className={styles.exampleTop}>
                  <span className={styles.mono}>{example.kind}</span>
                  {index === 0 ? (
                    <GitBranch size={24} aria-hidden="true" />
                  ) : (
                    <Code2 size={24} aria-hidden="true" />
                  )}
                </div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
                <p className={styles.exampleDetail}>{example.detail}</p>
                <div className={styles.exampleBottom}>
                  <span className={styles.repository}>
                    {example.repository}
                  </span>
                  <ResourceLink href={example.href}>
                    {example.action}
                  </ResourceLink>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  )
}

function BuildIdeas() {
  const ideas = [
    'A care-team view for follow-ups and coordination',
    'An integration with a device or external service',
    'AI-assisted documentation with human review',
    'A focused operational dashboard',
  ]
  const checklist = [
    'Problem & intended user',
    'Working workflow',
    'Setup instructions',
    'Synthetic sample data',
    'Known limitations',
  ]
  return (
    <section className={styles.ideasSection} aria-labelledby="ideas-title">
      <Container>
        <div className={styles.ideasGrid}>
          <div>
            <p className={styles.eyebrow}>IDEAS TO EXPLORE</p>
            <h2 id="ideas-title" className={styles.sectionTitle}>
              What will you build?
            </h2>
            <p className={styles.sectionDescription}>
              Find a small problem worth solving.
              <br />
              Use these ideas as a starting point.
            </p>
          </div>
          <ol className={styles.ideasList}>
            {ideas.map((idea, index) => (
              <li key={idea}>
                <span className={styles.mono}>0{index + 1}</span>
                <span>{idea}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.hackathon} role="note">
          <div>
            <h3>Building at a hackathon?</h3>
            <p>
              Start with one workflow, use synthetic data, and make the demo
              easy for someone else to run.
            </p>
          </div>
          <div>
            <p className={styles.mono}>YOUR DEMO CHECKLIST</p>
            <ul>
              {checklist.map((item) => (
                <li key={item}>
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
  return (
    <section className={styles.closing} aria-labelledby="closing-title">
      <Container>
        <div className={styles.closingInner}>
          <p className={styles.eyebrow}>
            BUILT IN THE OPEN. BUILT TO BE EXTENDED.
          </p>
          <h2 id="closing-title">Bring your idea to Care.</h2>
          <p>
            Start with the scaffold, explore an example, and build a focused
            workflow.
          </p>
          <div className={styles.closingActions}>
            <Button className={styles.primaryButton} href="#start-building">
              Start building
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <ResourceLink href={resources.docs.href}>
              Read the plugin docs
            </ResourceLink>
          </div>
          <p className={styles.contributorLink}>
            Want to improve the shared platform?{' '}
            <Link href="/developers">
              Contribute to Care
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function BuildOnCarePage() {
  return (
    <div className={styles.page}>
      <TopGradient />
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
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
