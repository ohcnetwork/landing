import { CareShowcase } from '@/components/home/care-showcase'
import { HomeFooter, HomeNavigation } from '@/components/home/site-navigation'
import { getAllPosts } from '@/lib/blog'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  Check,
  CircleHelp,
  Code2,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Layers3,
  LockKeyholeOpen,
  Microscope,
  Network,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: 'Open Healthcare Network Foundation - Open Health Infrastructure',
  description:
    'Better care, built in the open. OHC Foundation stewards CARE and open digital public infrastructure for interoperable, self-hostable healthcare without vendor lock-in.',
  openGraph: {
    title: 'Better care. Built in the open. | Open Healthcare Network',
    description:
      'A shared foundation for healthcare. Discover CARE, the open-source platform connecting people, systems, and better care.',
    images: [{ url: '/og/ohc-landing-cover.png', width: 1920, height: 1080 }],
  },
}

function CareNetwork() {
  return (
    <div
      className={styles.networkVisual}
      role="img"
      aria-label="CARE connects hospitals, clinics, home care, and laboratories through a shared open platform."
    >
      <div className={styles.diagramGrid} />
      <div className={styles.orbitOuter} />
      <div className={styles.orbitInner} />
      <svg
        className={styles.connections}
        viewBox="0 0 560 540"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M280 270L128 143M280 270L426 124M280 270L446 365M280 270L128 399"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 7"
        />
        <circle cx="204" cy="207" r="4" fill="currentColor" />
        <circle cx="363" cy="318" r="4" fill="currentColor" />
      </svg>
      <div className={styles.careCore}>
        <img src="/logos/ohc/care-logo.svg" alt="" width="102" height="43" />
        <span>ONE OPEN PLATFORM</span>
      </div>
      <div className={`${styles.careNode} ${styles.hospitalNode}`}>
        <span className={styles.nodeIcon}>
          <Hospital />
        </span>
        <div>
          <strong>Hospitals</strong>
          <span>Connected from day one</span>
        </div>
        <span className={styles.nodeDot} />
      </div>
      <div className={`${styles.careNode} ${styles.clinicNode}`}>
        <span className={styles.nodeIcon}>
          <Stethoscope />
        </span>
        <div>
          <strong>Clinics</strong>
          <span>Your care. Your system.</span>
        </div>
      </div>
      <div className={`${styles.careNode} ${styles.homeNode}`}>
        <span className={styles.nodeIcon}>
          <HeartHandshake />
        </span>
        <div>
          <strong>Home care</strong>
          <span>Beyond hospital walls</span>
        </div>
        <span className={styles.nodeDot} />
      </div>
      <div className={`${styles.careNode} ${styles.labNode}`}>
        <span className={styles.nodeIcon}>
          <Microscope />
        </span>
        <div>
          <strong>Laboratories</strong>
          <span>Every result, connected</span>
        </div>
      </div>
      <div className={styles.openSourceBadge}>
        <Code2 size={15} />
        <span>Open source. Open possibilities.</span>
      </div>
      <span className={styles.diagramCaption}>
        INDEPENDENT SYSTEMS. SHARED POSSIBILITIES.
      </span>
      <span className={`${styles.diagramPlus} ${styles.plusOne}`}>+</span>
      <span className={`${styles.diagramPlus} ${styles.plusTwo}`}>+</span>
    </div>
  )
}

const principles = [
  {
    icon: LockKeyholeOpen,
    title: 'Open, by default.',
    text: 'Own your infrastructure. Adapt it to your needs. Keep your data in your hands.',
    href: '/product/care-core',
    link: 'Explore the platform',
  },
  {
    icon: Network,
    title: 'Connected, by design.',
    text: 'Shared standards help your systems work together, across teams and care settings.',
    href: '/product/standards-architecture',
    link: 'Our open standards',
  },
  {
    icon: HeartHandshake,
    title: 'Shared, for the long term.',
    text: 'A neutral foundation stewards the code, governance, and community behind it.',
    href: '/foundation/governance',
    link: 'Meet the foundation',
  },
]

const solutions = [
  {
    icon: Hospital,
    number: '01',
    title: 'Care across the hospital.',
    label: 'HOSPITAL MANAGEMENT',
    text: 'From the first registration to the last prescription. Bring clinical workflows, labs, pharmacy, and billing together.',
    href: '/solutions/hospital-management',
    className: 'hospitalArt',
  },
  {
    icon: HeartPulse,
    number: '02',
    title: 'Care beyond the hospital.',
    label: 'PALLIATIVE & HOME CARE',
    text: 'Help field teams coordinate visits, follow-ups, and referrals. Keep people connected to care, wherever home is.',
    href: '/solutions/palliative-care',
    className: 'homeArt',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Care on your terms.',
    label: 'INDEPENDENT CLINICS',
    text: 'A complete clinic system on your own computer. Open-source software that puts your practice in control.',
    href: '/solutions/care-clinics',
    className: 'clinicArt',
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)
  return (
    <div className={styles.page}>
      <HomeNavigation />
      <main id="main-content">
        <section
          className={`${styles.hero} ${styles.wrap}`}
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <Link href="/about" className={styles.eyebrowPill}>
              <span /> A FOUNDATION FOR BETTER HEALTHCARE{' '}
              <ArrowUpRight size={13} />
            </Link>
            <h1 id="hero-title">
              Better care.
              <br />
              Built in
              <br />
              <span>the open.</span>
            </h1>
            <p>
              We’re Open Healthcare Network Foundation.
              <br className={styles.desktopBreak} /> We steward open digital
              infrastructure that puts people, and the people who care for them,
              first.
            </p>
            <div className={styles.heroActions}>
              <Link href="/product/care-core" className={styles.primaryButton}>
                Explore CARE <ArrowUpRight size={18} />
              </Link>
              <Link href="/about" className={styles.textButton}>
                Our mission <ArrowRight size={17} />
              </Link>
            </div>
            <div className={styles.heroProof}>
              <BadgeCheck size={17} />
              <span>CARE is a verified Digital Public Good.</span>
            </div>
          </div>
          <CareNetwork />
          <div className={styles.heroFootnote}>
            <span>OPEN INFRASTRUCTURE. HUMAN POSSIBILITIES.</span>
            <a
              href="#the-foundation"
              aria-label="Discover the foundation"
              className={styles.scrollLink}
            >
              <ArrowDown size={17} />
            </a>
          </div>
        </section>

        <section
          className={styles.partnerBand}
          aria-label="Our supporters and ecosystem"
        >
          <div className={`${styles.wrap} ${styles.partnerContent}`}>
            <p>
              A shared mission.
              <br />
              <strong>A growing ecosystem.</strong>
            </p>
            <div className={styles.partnerLogos}>
              <img
                src="/logos/logo-msdf-color.svg"
                alt="Michael & Susan Dell Foundation"
                width="164"
                height="44"
              />
              <img
                src="/logos/e-gov-foundation-logo.png"
                alt="eGov Foundation"
                width="111"
                height="44"
              />
              <img src="/logos/ACT-Logo.png" alt="ACT" width="75" height="44" />
              <img
                src="/logos/swasth.svg"
                alt="Swasth"
                width="112"
                height="44"
              />
              <img
                src="/logos/kerala-startup-mission.svg"
                alt="Kerala Startup Mission"
                width="150"
                height="44"
              />
            </div>
          </div>
        </section>

        <section
          id="the-foundation"
          className={`${styles.foundation} ${styles.wrap}`}
          aria-labelledby="foundation-title"
        >
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>
                <span /> THE SHARED FOUNDATION
              </p>
              <h2 id="foundation-title">
                Good healthcare shouldn’t
                <br className={styles.desktopBreak} /> start from scratch.
              </h2>
            </div>
            <p>
              Healthcare works better when we build together. We bring software,
              open standards, and long-term stewardship into one shared
              foundation—so every health system can move forward.
            </p>
          </div>
          <div className={styles.principles}>
            {principles.map(({ icon: Icon, title, text, href, link }) => (
              <article key={title}>
                <Icon
                  className={styles.principleIcon}
                  size={26}
                  strokeWidth={1.4}
                />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href}>
                  {link}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.platform}
          id="care"
          aria-labelledby="care-title"
        >
          <div className={styles.wrap}>
            <div className={styles.platformIntro}>
              <div>
                <p className={styles.eyebrow}>
                  <span /> MEET OUR FLAGSHIP PLATFORM
                </p>
                <h2 id="care-title">
                  Many workflows.
                  <br />
                  <span>One CARE.</span>
                </h2>
              </div>
              <div>
                <p>
                  The open-source platform for the everyday work of healthcare.
                  Adaptable to your team. Connected to your systems. Always
                  yours.
                </p>
                <Link
                  href="/product/care-core"
                  className={styles.lightTextLink}
                >
                  Discover the CARE platform <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
            <CareShowcase />
            <div className={styles.platformPrinciples}>
              <span>
                <Check size={16} /> MIT licensed
              </span>
              <span>
                <Check size={16} /> Self-hostable
              </span>
              <span>
                <Check size={16} /> FHIR-aligned
              </span>
              <span>
                <Check size={16} /> Built to extend
              </span>
            </div>
          </div>
        </section>

        <section
          className={`${styles.solutions} ${styles.wrap}`}
          aria-labelledby="solutions-title"
        >
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>
                <span /> WHERE OPEN MEETS EVERYDAY
              </p>
              <h2 id="solutions-title">
                Different settings.
                <br />
                The same commitment to care.
              </h2>
            </div>
            <Link href="/solutions" className={styles.textButton}>
              Explore all solutions <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className={styles.solutionGrid}>
            {solutions.map(
              ({ icon: Icon, number, title, label, text, href, className }) => (
                <Link href={href} className={styles.solutionCard} key={number}>
                  <div
                    className={`${styles.solutionArt} ${styles[className]}`}
                    aria-hidden="true"
                  >
                    <span className={styles.solutionNumber}>{number}</span>
                    <span className={styles.artRing} />
                    <span className={styles.artRingTwo} />
                    <span className={styles.artIcon}>
                      <Icon size={42} strokeWidth={1.2} />
                    </span>
                    <span className={styles.artMiniIcon}>
                      {number === '01' ? (
                        <Activity size={18} />
                      ) : number === '02' ? (
                        <HeartHandshake size={18} />
                      ) : (
                        <ShieldCheck size={18} />
                      )}
                    </span>
                    <span className={styles.solutionArtCaption}>
                      POWERED BY CARE
                    </span>
                  </div>
                  <div className={styles.solutionCopy}>
                    <p className={styles.cardEyebrow}>{label}</p>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className={styles.cardLink}>
                      Explore solution <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        </section>

        <section
          className={`${styles.impact} ${styles.wrap}`}
          aria-labelledby="impact-title"
        >
          <div className={styles.impactCopy}>
            <p className={styles.eyebrow}>
              <span /> OPEN SOURCE. REAL-WORLD IMPACT.
            </p>
            <h2 id="impact-title">
              Closer to home.
              <br />
              Further together.
            </h2>
            <p>
              In Kerala, CARE helps connect patients, community teams, and
              palliative care providers. Shared infrastructure, making room for
              more human care.
            </p>
            <Link
              href="/blog/stable-hospital-operations-care-hmis"
              className={styles.textButton}
            >
              Read the field story <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className={styles.impactProof}>
            <span className={styles.impactLocation}>
              <HeartHandshake size={16} /> KERALA PALLIATIVE CARE
            </span>
            <div className={styles.metrics}>
              <div>
                <strong>
                  1.2M<span>+</span>
                </strong>
                <p>home-care visits</p>
              </div>
              <div>
                <strong>~300k</strong>
                <p>patient registrations</p>
              </div>
            </div>
            <p className={styles.metricSource}>
              Reported 28 February 2026 ·{' '}
              <Link href="/blog/stable-hospital-operations-care-hmis">
                View source <ArrowUpRight size={12} />
              </Link>
            </p>
          </div>
        </section>

        <section
          className={`${styles.community} ${styles.wrap}`}
          aria-labelledby="community-title"
        >
          <div>
            <p className={styles.eyebrow}>
              <span /> YOUR PLACE IN THE NETWORK
            </p>
            <h2 id="community-title">
              Great things happen
              <br />
              when the doors are open.
            </h2>
            <p>
              Developers, clinicians, governments, and partners.
              <br />
              Different expertise. A shared belief in better care.
            </p>
            <Link href="/network" className={styles.textButton}>
              Meet the network <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className={styles.communityLinks}>
            <Link href="/build-on-care">
              <span className={styles.communityIcon}>
                <Braces />
              </span>
              <div>
                <h3>Build something that matters.</h3>
                <p>Explore the code. Create a plugin. Make a contribution.</p>
              </div>
              <ArrowUpRight size={21} />
            </Link>
            <Link href="/ecosystem/clinicians">
              <span className={styles.communityIcon}>
                <Stethoscope />
              </span>
              <div>
                <h3>Bring your clinical perspective.</h3>
                <p>Help shape tools around the realities of care.</p>
              </div>
              <ArrowUpRight size={21} />
            </Link>
            <Link href="/ecosystem/implementation-partners">
              <span className={styles.communityIcon}>
                <Layers3 />
              </span>
              <div>
                <h3>Put open infrastructure to work.</h3>
                <p>Deploy, localize, and support CARE in your community.</p>
              </div>
              <ArrowUpRight size={21} />
            </Link>
          </div>
        </section>

        <section className={styles.journal} aria-labelledby="journal-title">
          <div className={styles.wrap}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.eyebrow}>
                  <span /> FROM THE NETWORK
                </p>
                <h2 id="journal-title">The work, in progress.</h2>
              </div>
              <Link href="/blog" className={styles.textButton}>
                Read all stories <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className={styles.journalGrid}>
              {posts.map((post) => (
                <article key={post.slug} className={styles.journalCard}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className={styles.journalImage}>
                      <img
                        src={
                          post.mainImage?.src || `/blog/covers/${post.slug}.svg`
                        }
                        alt=""
                        loading="lazy"
                        width="720"
                        height="400"
                      />
                    </div>
                    <div className={styles.journalMeta}>
                      <span>
                        {post.categories?.[0]?.title || 'Foundation update'}
                      </span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            timeZone: 'UTC',
                          },
                        )}
                      </time>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className={styles.cardLink}>
                      Read story <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={styles.wrap}>
            <div className={styles.closingMark} aria-hidden="true">
              <HeartPulse strokeWidth={1.2} />
            </div>
            <p className={styles.eyebrow}>
              A HEALTHIER FUTURE IS A SHARED FUTURE.
            </p>
            <h2 id="closing-title">
              Let’s build it
              <br />
              <span>in the open.</span>
            </h2>
            <p>The next chapter of healthcare belongs to all of us.</p>
            <div className={styles.closingActions}>
              <Link href="/network" className={styles.limeButton}>
                Find your place <ArrowUpRight size={18} />
              </Link>
              <Link href="/support" className={styles.lightTextLink}>
                Support the foundation <ArrowUpRight size={18} />
              </Link>
            </div>
            <Link href="/contact" className={styles.closingContact}>
              <CircleHelp size={15} /> Not sure where to start? Let’s talk.
            </Link>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  )
}
