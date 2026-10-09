// Official entry points, shared by the page and its interactive components.
export const resources = {
  docs: {
    title: 'Plugin documentation',
    description:
      'Understand the extension architecture and follow the development workflow.',
    href: 'https://docs.ohc.network/contributing/plugins/',
    action: 'Read the docs',
    kind: 'Guide',
  },
  scaffold: {
    title: 'Care plugin scaffold',
    description:
      'Start with a development workspace, plugin-building guidance, and frontend and backend templates.',
    href: 'https://github.com/ohcnetwork/care_scaffold',
    action: 'Open the scaffold',
    kind: 'Start here',
  },
  skills: {
    title: 'AI coding skills',
    description:
      'Reusable agent guidance for Care reviews, analytics queries, report templates, and browser verification.',
    href: 'https://github.com/ohcnetwork/skills',
    action: 'Explore the skills',
    kind: 'Agent tools',
  },
  backendTemplate: {
    title: 'Backend plugin starter',
    description:
      'A focused Django plugin template when you need a backend starting point rather than the full scaffold workspace.',
    href: 'https://github.com/ohcnetwork/care-plugin-cookiecutter',
    action: 'View the template',
    kind: 'Template',
  },
  backendExample: {
    title: 'Care Filly',
    description:
      'See a Django plugin authenticate Care users, check facility permissions, and issue short-lived Medispeak session tokens.',
    href: 'https://github.com/ohcnetwork/care_filly',
    action: 'Explore the backend',
    kind: 'Backend example',
    detail: 'Service credentials stay on the server.',
    repository: 'ohcnetwork / care_filly',
  },
  frontendExample: {
    title: 'Care AI Vision',
    description:
      'Explore a React app that extracts patient details from photographed forms and fills registration fields for user review.',
    href: 'https://github.com/ohcnetwork/care_ai_vision_fe',
    action: 'Explore the frontend',
    kind: 'Frontend example',
    detail: 'A reference for extending the Care interface.',
    repository: 'ohcnetwork / care_ai_vision_fe',
  },
} as const

export const bootstrapUrl =
  'https://github.com/ohcnetwork/care_scaffold/blob/main/bootstrap.prompt.md'
export const walkthrough = {
  href: 'https://www.loom.com/share/524a50d9b57142d7853c3acf35035250',
  embed: 'https://www.loom.com/embed/524a50d9b57142d7853c3acf35035250',
  title: 'How to Build Healthcare Apps on CARE',
  // Dimensions returned by Loom's oEmbed endpoint for this recording.
  width: 1280,
  height: 960,
} as const

export const starterPrompt = `Help me plan and build a focused Care extension.

My feature: [Describe the intended user, their problem, and one useful outcome.]

Read https://github.com/ohcnetwork/care_scaffold and its current bootstrap instructions at https://github.com/ohcnetwork/care_scaffold/blob/main/bootstrap.prompt.md before proposing commands.

Inspect the prerequisites and my local environment. Explain the planned setup, required services, ports, and changes before installing or running anything. Use a new, isolated development workspace; preserve existing projects and services.

Choose a frontend app, backend plugin, or integration based on the feature. Use the scaffold's current guidance and templates. Check the target Care version and supported extension points; explain any core changes the feature might need.

Use synthetic data only. Do not send patient records, secrets, or credentials to third-party AI tools. Build a small end-to-end demo, check permissions and failure states, and document setup steps and known limitations. Treat the result as a prototype requiring review before clinical use.`
