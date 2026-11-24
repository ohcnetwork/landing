// Root layout for the default locale (English), whose routes are unprefixed.
// It is the same document as the localized layout, rendered without a
// `locale` param, which resolves to the default locale.
export { default, generateMetadata } from '../[locale]/layout'
