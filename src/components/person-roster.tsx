import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Github, Globe2, Linkedin, type LucideIcon } from 'lucide-react'

export type Person = {
  name: string
  role: string
  image?: string
  initials: string
  note?: string
  github?: string
  linkedin?: string
  website?: string
}

export function PersonPortrait({ person }: { person: Person }) {
  if (person.image) {
    return (
      <img
        src={person.image}
        alt=""
        className="size-18 rounded-full object-cover ring-1 ring-black/8 grayscale transition duration-300 group-hover:grayscale-0 sm:size-20"
      />
    )
  }

  return (
    <div className="flex size-18 items-center justify-center rounded-full bg-[#e6f2ec] text-lg font-semibold text-[#0b6b55] ring-1 ring-black/8 sm:size-20">
      {person.initials}
    </div>
  )
}

function getPersonLinks(person: Person): Array<{
  label: string
  href: string
  icon: LucideIcon
}> {
  const links: Array<{
    label: string
    href: string
    icon: LucideIcon
  }> = []

  if (person.github) {
    links.push({ label: 'GitHub', href: person.github, icon: Github })
  }

  if (person.linkedin) {
    links.push({ label: 'LinkedIn', href: person.linkedin, icon: Linkedin })
  }

  if (person.website) {
    links.push({ label: 'Website', href: person.website, icon: Globe2 })
  }

  return links
}

export function PersonSocialLinks({
  person,
  variant = 'pill',
}: {
  person: Person
  variant?: 'pill' | 'icon'
}) {
  const links = getPersonLinks(person)

  if (links.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${person.name} on ${link.label}`}
          className={
            variant === 'icon'
              ? 'inline-flex size-11 items-center justify-center rounded-full border border-[#dfe6e2] bg-white text-[#173d34] shadow-[0_10px_26px_rgba(7,24,19,0.06)] transition hover:-translate-y-0.5 hover:border-[#bdd0c5] hover:bg-[#f7f9f6]'
              : 'inline-flex items-center gap-1.5 rounded-full border border-[#dfe6e2] bg-white px-3 py-1.5 text-xs font-semibold text-[#173d34] transition hover:border-[#bdd0c5] hover:bg-[#f7f9f6]'
          }
        >
          <link.icon className={variant === 'icon' ? 'size-4' : 'size-3.5'} />
          {variant === 'pill' ? link.label : null}
        </a>
      ))}
    </div>
  )
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group min-h-[270px] border-[#dfe6e2] bg-white p-6 transition hover:bg-[#fbfcfb] sm:p-7">
      <PersonPortrait person={person} />
      <h3 className="mt-8 text-2xl/7 font-semibold tracking-normal text-gray-950">
        {person.name}
      </h3>
      <p className="mt-3 text-lg/7 text-gray-600">{person.role}</p>
      {person.note ? (
        <p className="mt-5 w-fit rounded-full border border-[#dfe6e2] px-3 py-1 text-xs font-semibold text-[#68756d]">
          {person.note}
        </p>
      ) : null}
      {getPersonLinks(person).length > 0 ? (
        <div className="mt-6">
          <PersonSocialLinks person={person} />
        </div>
      ) : null}
    </div>
  )
}

export function PeopleSection({
  eyebrow,
  title,
  description,
  people,
  columns = 'lg:grid-cols-4',
}: {
  eyebrow: string
  title: string
  description: string
  people: Person[]
  columns?: string
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Subheading>{eyebrow}</Subheading>
            <Heading as="h2" className="mt-3">
              {title}
            </Heading>
          </div>
          <p className="max-w-3xl text-lg/7 text-gray-600 lg:justify-self-end">
            {description}
          </p>
        </div>

        <div
          className={`mt-12 grid overflow-hidden rounded-lg border border-[#dfe6e2] bg-[#dfe6e2] ${columns}`}
        >
          {people.map((person) => (
            <PersonCard key={`${eyebrow}-${person.name}`} person={person} />
          ))}
        </div>
      </Container>
    </section>
  )
}
