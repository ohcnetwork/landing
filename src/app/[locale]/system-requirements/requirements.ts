import type { Messages } from '@/i18n/messages'

/**
 * Structure of the browser requirements article. The text lives in the
 * `systemRequirements` messages, keyed by the ids below.
 */
type SectionKey = keyof Messages['systemRequirements']['sections']
type SpecificationId = keyof Messages['systemRequirements']['practical']['rows']
export type RequirementId = keyof Messages['systemRequirements']['requirements']

export type RequirementGroup = {
  /** Anchor of the article section. */
  id: string
  /** Message key of the section title and description. */
  key: Extract<SectionKey, keyof Messages['systemRequirements']['groups']>
  rows: RequirementId[]
}

export const practicalSpecifications: SpecificationId[] = [
  'processor',
  'ram',
  'videoBandwidth',
  'cameraAndAudio',
]

export const requirementGroups: RequirementGroup[] = [
  {
    id: 'web-browsers',
    key: 'webBrowsers',
    rows: ['chrome', 'otherBrowsers', 'browserUpdates'],
  },
  {
    id: 'devices',
    key: 'devices',
    rows: ['computer', 'mobile', 'operatingSystem', 'storage'],
  },
  {
    id: 'network',
    key: 'network',
    rows: ['connection', 'uploadsAndCalls'],
  },
  {
    id: 'browser-settings',
    key: 'browserSettings',
    rows: [
      'secureConnection',
      'javascript',
      'siteStorage',
      'documents',
      'mediaPermissions',
    ],
  },
]

/** Every section of the article in order, for the table of contents. */
export const articleSections: { id: string; key: SectionKey }[] = [
  { id: 'general-requirements', key: 'general' },
  { id: 'practical-specifications', key: 'practical' },
  ...requirementGroups.map(({ id, key }) => ({ id, key })),
  { id: 'getting-started', key: 'gettingStarted' },
]
