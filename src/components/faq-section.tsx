import { FaqList } from '@/components/faq-list'
import { useTranslations } from 'next-intl'

export function FaqSection({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const t = useTranslations('faqSection')

  return (
    <section id="faq" className="bg-white text-gray-900">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 py-20 lg:py-24">
          <h2 className="text-[clamp(36px,4.4vw,64px)] leading-[1.02] font-medium tracking-normal text-balance">
            {t('title')}
          </h2>
          <FaqList
            faqs={faqs}
            labels={{
              showAll: t('showAll', { count: faqs.length }),
              showFewer: t('showFewer'),
            }}
          />
        </div>
      </div>
    </section>
  )
}
