import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Build the commons</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-normal text-gray-950 sm:text-5xl">
          Help steward open healthcare <br className="hidden sm:block" />
          infrastructure for the long term.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-2xl text-sm/6 text-gray-500">
        Governments can deploy, institutions can support, implementation
        partners can localize, and contributors can strengthen the shared core.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button className="w-full sm:w-auto" href="/support">
          Support the commons
        </Button>
        <Button
          variant="secondary"
          className="w-full sm:w-auto"
          href="/contact"
        >
          Start a partnership conversation
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Foundation</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/about">Mission</SitemapLink>
          <SitemapLink href="/foundation/governance">Governance</SitemapLink>
          <SitemapLink href="/about/team">Board & Advisors</SitemapLink>
          <SitemapLink href="/about/team/foundation">
            Foundation Team
          </SitemapLink>
          <SitemapLink href="/support">Support OHC</SitemapLink>
          <SitemapLink href="/supporters">Supporters</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>CARE Platform</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/product/care-core">CARE Core</SitemapLink>
          <SitemapLink href="/product/care-ai">CARE AI</SitemapLink>
          <SitemapLink href="/product/apps-integrations">
            Apps & Integrations
          </SitemapLink>
          <SitemapLink href="/product/standards-architecture">
            Standards & Architecture
          </SitemapLink>
          <SitemapLink href="/about/security-compliance">
            Security & Compliance
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Solutions</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/solutions/hospital-management">
            Hospital Management
          </SitemapLink>
          <SitemapLink href="/solutions/teleicu">TeleICU</SitemapLink>
          <SitemapLink href="/solutions/palliative-care">
            Palliative Care
          </SitemapLink>
          <SitemapLink href="/solutions/care-clinics">Care Clinics</SitemapLink>
          <SitemapLink href="/solutions/care-janwar">Animal Health</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Ecosystem</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/network">The Network</SitemapLink>
          <SitemapLink href="/ecosystem/implementation-partners">
            Implementation Partners
          </SitemapLink>
          <SitemapLink href="/ecosystem/clinicians">Clinicians</SitemapLink>
          <SitemapLink href="/developers">Developers</SitemapLink>
          <SitemapLink href="/impact">Impact</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Resources</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/blog">Blog</SitemapLink>
          <SitemapLink href="/faq">FAQ</SitemapLink>
          <SitemapLink href="/press-media">Press & Media</SitemapLink>
          <SitemapLink href="/careers">Careers</SitemapLink>
          <SitemapLink href="/contact">Contact</SitemapLink>
          <SitemapLink href="/funding.json">Support metadata</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://github.com/ohcnetwork"
        target="_blank"
        aria-label="Visit us on GitHub"
        className="text-gray-950 hover:text-gray-950/75"
      >
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </Link>
      <Link
        href="https://linkedin.com/company/ohcnetwork"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Open Healthcare Network Foundation.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-lg bg-white/86" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-7 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                    <div className="mt-4">
                      <div className="text-sm text-gray-950/80">
                        <p className="text-gray-950/70">Registered Address</p>
                        <p className="pt-1.5 text-gray-950">
                          Open Healthcare Network Foundation
                        </p>
                        <p className="pt-1.5 text-gray-950">
                          1st Floor, C M Complex, Kalavath Road, Palarivattom,
                          Kochi, Ernakulam, Kerala, India, 682025
                        </p>
                        <p className="mt-8 text-gray-950/70">
                          Corporate Identity Number (CIN)
                        </p>
                        <p className="pt-1.5 text-gray-950">
                          U88100KL2025NPL098818
                        </p>
                      </div>
                    </div>
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-5 lg:grid-cols-5 lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
