import { FaqList } from '@/components/faq-list'

export function FaqSection({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  return (
    <section id="faq" className="bg-white text-gray-900">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 py-20 lg:py-24">
          <h2 className="text-[clamp(36px,4.4vw,64px)] leading-[1.02] font-medium tracking-normal text-balance">
            Frequently asked questions
          </h2>
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
