import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TopGradient } from '@/components/TopGradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  Github,
  Star,
  GitFork,
  Users,
  Code,
  BookOpen,
  MessageCircle,
  ExternalLink,
  Download,
  Play,
  ArrowRight,
  Zap,
  Shield,
  Heart,
  Globe,
  Database,
  Cpu,
  Monitor
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developers — Contribute to CARE Open Source EMR',
  description: 'Join the CARE developer community. Contribute to an open-source EMR system built with Django DRF and React TypeScript, powering healthcare across 10 States.',
  keywords: 'CARE EMR, open source healthcare, Django DRF, React TypeScript, FHIR compliance, healthcare developers, medical software, EMR development, healthcare API, medical records system',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Build open source healthcare. Save lives.
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Contribute to CARE, an open-source EMR system built with Django DRF and React TypeScript, powering cost-effective healthcare solutions across 11 States.
          </p>
          <div className="mt-12 flex flex-col gap-x-4 gap-y-4 sm:flex-row">
            <Button href="https://github.com/ohcnetwork" target="_blank" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>Star us on Github</span>
            </Button>
            <Button variant="secondary" href="https://slack.ohc.network" target="_blank" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Join Slack</span>
            </Button>
            <Button variant="secondary" href="https://docs.ohc.network" target="_blank" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-950">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1000+ Contributors</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TechStackSection() {
  return (
    <Container className="py-24">
      <Subheading>Tech Stack</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Built with modern technologies for scalable healthcare solutions
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
          </div>
          <p className="text-gray-600 mb-4">Django Rest Framework powers our robust API and data management</p>
        </div>
        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500 rounded-lg">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
          </div>
          <p className="text-gray-600 mb-4">React TypeScript provides a modern, type-safe user interface</p>
        </div>
      </div>
    </Container>
  )
}

function PrerequisitesSection() {
  return (
    <div className="py-24">
      <Container>
        <Subheading>Prerequisites</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          What you need to know before contributing
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Basic Requirements</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Git and GitHub familiarity
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Basic web development knowledge
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                HTML, CSS, JavaScript understanding
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Command line basics
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Learning Path</h3>
            </div>
            <p className="text-gray-600 mb-4">New to web development? Start here:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <a href="https://www.pupilfirst.school/courses/1802/curriculum" target="_blank" className="hover:underline">
                  WD101 Course by pupilfirst.school
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <a href="https://school.ohc.network/courses/1844" target="_blank" className="hover:underline">
                  DjangoForAll for Django & DRF
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <a href="https://school.ohc.network/courses/1843" target="_blank" className="hover:underline">
                  ReactForAll for React TypeScript
                </a>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Development Tools</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                VS Code or preferred IDE
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Node.js and Python environments
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Docker for containerization
              </li>
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Git for version control
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhatYouCanBuildSection() {
  return (
    <Container className="py-24">
      <Subheading>What you can build</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Plugins, modules, and integrations that extend CARE without changing the core
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Plugins</h3>
            <p className="text-gray-600">TeleICU (ONVIF), ABDM M1–M3, Care Scribe, and more</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Modules</h3>
            <p className="text-gray-600">LMIS, Pharmacy, Billing, Dashboards, and custom modules</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Forms & Terminologies</h3>
            <p className="text-gray-600">Forms mapped to FHIR; terminology bridges (SNOMED/LOINC/UCUM)</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h3>
            <p className="text-gray-600">Connect with existing systems, devices, and third-party services</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function GetStartedSection() {
  return (
    <div className="py-24">
      <Container>
        <Subheading>Get started</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Everything you need to start contributing to CARE
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BentoCard
            eyebrow="Setup"
            title="Environment Setup"
            description="Clone repositories and set up your development environment with step-by-step instructions."
            graphic={
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="p-4 bg-blue-500 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-blue-900">Quick Setup</div>
                  <div className="text-sm text-blue-700 mt-2">Get started in minutes</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-1 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="GitHub"
            title="Find Issues"
            description="Browse issues labeled 'good first issue' and claim them to start contributing immediately."
            graphic={
              <div className="h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="p-4 bg-green-500 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-green-900">Good First Issues</div>
                  <div className="text-sm text-green-700 mt-2">Perfect for beginners</div>
                </div>
              </div>
            }
            fade={['bottom']}
            className="lg:col-span-1"
          />
          <a href="https://slack.ohc.network" target="_blank" rel="noopener noreferrer">
            <BentoCard
              eyebrow="Community"
              title="Join Slack"
              description="Connect with the community at slack.ohc.network for discussions, help, and collaboration."
              graphic={
                <div className="h-80 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 bg-purple-500 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-purple-900">Slack Community</div>
                    <div className="text-sm text-purple-700 mt-2">Get help & connect</div>
                  </div>
                </div>
              }
              fade={['bottom']}
              className="max-lg:rounded-b-4xl lg:col-span-1 lg:rounded-tr-4xl hover:shadow-lg transition-shadow cursor-pointer"
            />
          </a>
        </div>

        <div className="mt-16 p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Setup Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Backend Setup</h4>
              <p className="text-gray-600 mb-3">Follow the installation guide for the Django backend.</p>
              <a
                href="https://github.com/ohcnetwork/care?tab=readme-ov-file#getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline"
              >
                <BookOpen className="w-4 h-4" />
                <span>Backend README</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Frontend Setup</h4>
              <p className="text-gray-600 mb-3">Follow the installation guide for the React frontend.</p>
              <a
                href="https://github.com/ohcnetwork/care_fe?tab=readme-ov-file#getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline"
              >
                <BookOpen className="w-4 h-4" />
                <span>Frontend README</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ContributionPathsSection() {
  return (
    <Container className="py-24">
      <Subheading>How to contribute</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Step-by-step process to start contributing to CARE
      </Heading>

      <div className="mt-16 space-y-8">
        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">1. Find an Issue</h3>
          </div>
          <p className="text-gray-600 mb-4">Browse issues on GitHub and look for issues labeled &apos;good first issue&apos; to get started.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Visit <a href="https://github.com/ohcnetwork/care_fe/issues" target="_blank" className="hover:underline">github.com/ohcnetwork/care_fe</a>
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Look for issues with &apos;good first issue&apos; label
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500 rounded-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">2. Claim the Issue</h3>
          </div>
          <p className="text-gray-600 mb-4">Comment on the issue explaining your approach and request to be assigned to it.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Comment with your understanding and explain your approach
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Request to be assigned to the issue
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500 rounded-lg">
              <GitFork className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">3. Work on the Issue</h3>
          </div>
          <p className="text-gray-600 mb-4">Fork the repository, create a branch, and start coding with proper testing.</p>
        </div>

        <div className="p-8 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">4. Submit a Pull Request</h3>
          </div>
          <p className="text-gray-600 mb-4">Open a draft PR early and request review once ready for final submission.</p>
        </div>
      </div>
    </Container>
  )
}

function LearningResourcesSection() {
  return (
    <div className="py-24">
      <Container>
        <Subheading>Learning Resources</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
          Comprehensive resources to master our tech stack
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Django Documentation:</strong> <a href="https://docs.djangoproject.com/" target="_blank" className="hover:underline">Official Django docs</a> for web framework
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>DRF Documentation:</strong> <a href="https://www.django-rest-framework.org/" target="_blank" className="hover:underline">Django Rest Framework</a> for API development
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>DjangoForAll:</strong> <a href="https://school.ohc.network/courses/1844" target="_blank" className="hover:underline">Comprehensive course</a> for Django and DRF
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>FHIR R5:</strong> Healthcare interoperability standards
                </div>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>React Documentation:</strong> <a href="https://reactjs.org/" target="_blank" className="hover:underline">Official React docs</a> and guides
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>TypeScript Documentation:</strong> <a href="https://www.typescriptlang.org/" target="_blank" className="hover:underline">Type-safe JavaScript</a> development
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>ReactForAll:</strong> <a href="https://school.ohc.network/courses/1843" target="_blank" className="hover:underline">Complete React TypeScript course</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Modern CSS:</strong> Styling and responsive design
                </div>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Web Development Basics</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>WD101 Course:</strong> <a href="https://www.pupilfirst.school/courses/1802/curriculum" target="_blank" className="hover:underline">Complete web development fundamentals</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Github className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Git & GitHub:</strong> Version control and collaboration
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>HTML/CSS/JavaScript:</strong> Core web technologies
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Command Line:</strong> Terminal and development tools
                </div>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Healthcare Domain</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Database className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>EMR Systems:</strong> Electronic Medical Records basics
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Healthcare Standards:</strong> FHIR, HL7, SNOMED, LOINC
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Medical Workflows:</strong> Patient care processes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Data Privacy:</strong> HIPAA and healthcare compliance
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Developers() {
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
