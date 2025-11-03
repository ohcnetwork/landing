import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { TopGradient } from '@/components/TopGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — CARE & OHC',
  description:
    'Answers about implementation speed, licensing, customization, and integrations for CARE and Care Apps.',
  keywords:
    'HMIS FAQ, open source EMR questions, FHIR customization BYOT, ABDM plugin FAQ',
}

function Hero() {
  return (
    <div className="relative">
      <TopGradient />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-38">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Frequently Asked Questions
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Common questions about CARE implementation, licensing,
            customization, and integrations.
          </p>
        </div>
      </Container>
    </div>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'How fast can we implement?',
      answer:
        'Typical multi‑hospital pilots are live in weeks, scaling to districts/states thereafter. Our proven implementation playbook ensures rapid deployment with minimal disruption to existing workflows.',
    },
    {
      question: 'What about data ownership and licensing?',
      answer:
        'MIT license; governments own code and data; no vendor lock‑in. You have complete control over your infrastructure and data sovereignty with zero ongoing licensing costs.',
    },
    {
      question: 'Can we localize forms and terminologies?',
      answer:
        'Yes—custom EMR forms map to FHIR; BYOT (Bring Your Own Terminology) supported. You can configure local terminologies, forms, and workflows while maintaining FHIR compliance.',
    },
    {
      question: 'Does CARE support national programs like ABDM?',
      answer:
        'Yes—ABDM M1–M3 via plugin; deployed across 6 states. CARE integrates seamlessly with national health programs and standards.',
    },
    {
      question: 'Can we add remote monitoring and AI tools?',
      answer:
        'Yes—TeleICU (ONVIF), Care Scribe (AI voice fill) are available as Care Apps. AI tools integrate as plugins without modifying the core platform.',
    },
    {
      question: 'What about security and compliance?',
      answer:
        'CARE implements FHIR R5 compliance with RBAC, audit trails, and sovereign hosting options. Built-in security measures ensure data protection and regulatory compliance.',
    },
    {
      question: 'How does CARE handle different healthcare settings?',
      answer:
        'CARE adapts to various settings—hospitals, clinics, palliative care, veterinary practice. The modular architecture allows customization for different healthcare workflows.',
    },
    {
      question: 'What support is available for implementation?',
      answer:
        'We provide implementation guides, training materials, and community support. The global developer corps offers technical assistance and best practices sharing.',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading>FAQ</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl font-display tracking-tight">
        Common questions about CARE and OHC
      </Heading>

      <div className="mt-16 space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-8"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ContactSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h2" className="max-w-4xl font-display tracking-tight">
            Still have questions?
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Our team is here to help. Contact us for technical support,
            implementation guidance, or partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Contact us</Button>
            <Button variant="secondary" href="/developers">
              Join the community
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
