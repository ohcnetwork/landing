import { useTranslations } from 'next-intl'
import { TestimonialsCarousel } from './testimonials-carousel'

const testimonials = [
  {
    id: 'satyaNadella',
    img: '/testimonials/satya_nadella.jpg',
    name: 'Satya Nadella',
  },
  {
    id: 'srikanthNadhamuni',
    img: '/testimonials/srikanth_nadhamuni.png',
    name: 'Srikanth Nadhamuni',
  },
  {
    id: 'vinodKhosla',
    img: '/testimonials/vinod_khosla.jpeg',
    name: 'Vinod Khosla',
  },
  {
    id: 'kyleDaigle',
    img: '/testimonials/kyle_daigle.jpg',
    name: 'Kyle Daigle',
  },
  {
    id: 'sandeepSinghal',
    img: '/testimonials/sandeep.jpg',
    name: 'Sandeep Singhal',
  },
  {
    id: 'sreevasSahasranam',
    img: '/testimonials/sreevas_sahasranam.jpeg',
    name: 'Sreevas Sahasranam',
  },
  {
    id: 'kaiChen',
    img: '/testimonials/kai_chen.jpeg',
    name: 'Kai Chen',
  },
] as const

export function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <TestimonialsCarousel
      testimonials={testimonials.map(({ id, img, name }) => ({
        img,
        name,
        title: t(`items.${id}.role`),
        quote: t(`items.${id}.quote`),
        scrollLabel: t('scrollTo', { name }),
      }))}
      labels={{
        eyebrow: t('eyebrow'),
        title: t('title'),
        ctaBody: t('cta.body'),
        learnMore: t('cta.learnMore'),
      }}
    />
  )
}
