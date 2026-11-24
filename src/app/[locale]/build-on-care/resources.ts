// Official entry points, shared by the page and its interactive components.
// Their visible text lives in the `buildOnCare` messages, keyed by these ids.
export const resources = {
  docs: {
    href: 'https://docs.ohc.network/contributing/plugins/',
  },
  scaffold: {
    href: 'https://github.com/ohcnetwork/care_scaffold',
  },
  skills: {
    href: 'https://github.com/ohcnetwork/skills',
  },
  backendTemplate: {
    href: 'https://github.com/ohcnetwork/care-plugin-cookiecutter',
  },
  backendExample: {
    title: 'Care Filly',
    href: 'https://github.com/ohcnetwork/care_filly',
    repository: 'ohcnetwork / care_filly',
  },
  frontendExample: {
    title: 'Care AI Vision',
    href: 'https://github.com/ohcnetwork/care_ai_vision_fe',
    repository: 'ohcnetwork / care_ai_vision_fe',
  },
} as const

export const bootstrapUrl =
  'https://github.com/ohcnetwork/care_scaffold/blob/main/bootstrap.prompt.md'
export const walkthrough = {
  href: 'https://www.loom.com/share/524a50d9b57142d7853c3acf35035250',
  embed: 'https://www.loom.com/embed/524a50d9b57142d7853c3acf35035250',
  // Dimensions returned by Loom's oEmbed endpoint for this recording.
  width: 1280,
  height: 960,
} as const

// Copied into an AI coding tool, so it stays in English on every locale.
export const starterPrompt = `Help me plan and build a focused Care extension.

My feature: [Describe the intended user, their problem, and one useful outcome.]

Read https://github.com/ohcnetwork/care_scaffold and its current bootstrap instructions at https://github.com/ohcnetwork/care_scaffold/blob/main/bootstrap.prompt.md before proposing commands.

Inspect the prerequisites and my local environment. Explain the planned setup, required services, ports, and changes before installing or running anything. Use a new, isolated development workspace; preserve existing projects and services.

Choose a frontend app, backend plugin, or integration based on the feature. Use the scaffold's current guidance and templates. Check the target Care version and supported extension points; explain any core changes the feature might need.

Use synthetic data only. Do not send patient records, secrets, or credentials to third-party AI tools. Build a small end-to-end demo, check permissions and failure states, and document setup steps and known limitations. Treat the result as a prototype requiring review before clinical use.`
