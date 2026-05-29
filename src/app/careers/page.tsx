import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import careersData from '@/data/careers.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Join Open Healthcare Network',
  description:
    'Join the Open Healthcare Network team. We are hiring a Clinical Product Specialist with 5+ years of clinical experience.',
}

function Hero() {
  const hasPositions = careersData.positions.length > 0

  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-normal text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {hasPositions ? "We're Hiring!" : "Not Hiring!"}
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {hasPositions
              ? "Join our mission to build open, interoperable Digital Public Goods for healthcare. We're looking for passionate people who want to make a difference."
              : "There are no open positions at the moment. Check back soon!"}
          </p>
        </div>
      </Container>
    </div>
  )
}

function OpenPositions() {
  return (
    <Container className="py-24">
      <Subheading>Open Positions</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Current Opportunities
      </Heading>

      <div className="mt-12 grid gap-8">
        {careersData.positions.map((position, index) => (
          <div
            key={index}
            className="rounded-lg border border-[#dfe6e2] bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-950">
                  {position.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#12806a]">
                  {position.type} • {position.location}
                </p>
              </div>
              <Button href={position.applyUrl}>Apply Now</Button>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Requirements
              </h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {position.requirements.map((req, reqIndex) => (
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
        ))}
      </div>
    </Container>
  )
}

export default function Careers() {
  const hasPositions = careersData.positions.length > 0

  return (
    <main className="overflow-hidden">
      <Hero />
      {hasPositions && <OpenPositions />}
      <Footer />
    </main>
  )
}
