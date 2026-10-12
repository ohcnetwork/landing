export type Requirement = {
  id: string
  item: string
  requirement: string
  guidance?: string
}

export type RequirementGroup = {
  id: string
  title: string
  description: string
  rows: Requirement[]
}

export const practicalSpecifications = [
  {
    id: 'processor',
    component: 'Processor',
    baseline: 'Modern 64-bit dual-core, 2.0 GHz or equivalent performance.',
    recommended: 'Modern 64-bit quad-core, 2.5 GHz or equivalent performance.',
  },
  {
    id: 'ram',
    component: 'RAM',
    baseline: '4 GB for routine CARE use.',
    recommended: '8 GB or more.',
  },
  {
    id: 'video-bandwidth',
    component: 'Internet for video calls',
    baseline: '5 Mbps upload and 5 Mbps download available per device.',
    recommended: '10 Mbps upload and 10 Mbps download available per device.',
  },
  {
    id: 'camera-and-audio',
    component: 'Camera & audio',
    baseline: 'Camera and microphone required when making video calls.',
    recommended: '720p webcam, microphone and headset.',
  },
]

export const requirementGroups: RequirementGroup[] = [
  {
    id: 'web-browsers',
    title: 'Browser compatibility',
    description:
      'Use an up-to-date stable browser and keep automatic updates enabled.',
    rows: [
      {
        id: 'chrome',
        item: 'Recommended browser',
        requirement: 'Google Chrome, latest stable release.',
        guidance:
          'Chrome is the recommended starting point for everyday CARE use.',
      },
      {
        id: 'other-browsers',
        item: 'Other browser options',
        requirement: 'Current Microsoft Edge, Mozilla Firefox or Safari.',
        guidance:
          'Check the workflows you use with your CARE support team, including uploads, printing and any video calls.',
      },
      {
        id: 'browser-updates',
        item: 'Browser updates',
        requirement: 'Install browser updates and restart when prompted.',
        guidance:
          'If CARE shows an unsupported-browser warning, update your browser or switch to the latest Chrome.',
      },
    ],
  },
  {
    id: 'devices',
    title: 'Devices & displays',
    description:
      'Choose a device that runs a current browser comfortably and gives you enough screen space for your work.',
    rows: [
      {
        id: 'computer',
        item: 'Desktop or laptop',
        requirement:
          'A Windows, macOS or Linux computer that meets the requirements of your chosen browser.',
        guidance:
          'A keyboard, mouse or trackpad and a larger display are recommended for sustained data entry, billing and reports.',
      },
      {
        id: 'mobile',
        item: 'Tablet or phone',
        requirement:
          'An Android, iPadOS or iOS device that can run a current browser.',
        guidance:
          'Check the forms and features you need on your device. Use a larger screen for detailed records and wide tables.',
      },
      {
        id: 'operating-system',
        item: 'Operating system',
        requirement:
          'An operating system that receives security updates and supports your current browser.',
        guidance: 'Keep both your device software and browser up to date.',
      },
      {
        id: 'storage',
        item: 'Storage',
        requirement: 'Free space for browser updates and downloaded documents.',
        guidance:
          'Use the RAM guidance in the practical specifications above. Close unused tabs if your device slows down.',
      },
    ],
  },
  {
    id: 'network',
    title: 'Connection requirements',
    description:
      'Your device needs a reliable connection to your organisation’s CARE address while you work.',
    rows: [
      {
        id: 'connection',
        item: 'Network access',
        requirement:
          'Internet access for online CARE, or access to your organisation’s network where required.',
        guidance:
          'Use a stable Wi-Fi or wired connection. Stay connected when opening records, saving forms and uploading files.',
      },
      {
        id: 'uploads-and-calls',
        item: 'Uploads & calls',
        requirement:
          'A connection that can handle the documents you upload and any audio or video features you use.',
        guidance:
          'For video calls, use the per-device upload and download targets in the practical specifications above. Large uploads share that capacity; also check your calling service’s requirements.',
      },
    ],
  },
  {
    id: 'browser-settings',
    title: 'Browser settings',
    description:
      'Allow the browser features CARE needs. Additional permissions depend on the tasks you perform.',
    rows: [
      {
        id: 'secure-connection',
        item: 'Secure connection',
        requirement:
          'Use the HTTPS CARE address provided by your organisation.',
        guidance:
          'Camera and microphone features need a secure browser connection.',
      },
      {
        id: 'javascript',
        item: 'JavaScript',
        requirement: 'Enable JavaScript for CARE.',
        guidance: 'CARE’s interactive pages and forms need JavaScript to work.',
      },
      {
        id: 'site-storage',
        item: 'Site data',
        requirement: 'Allow CARE to use browser site storage.',
        guidance:
          'Blocking or clearing CARE’s site data can affect sign-in and saved preferences.',
      },
      {
        id: 'documents',
        item: 'Documents & printing',
        requirement:
          'Allow downloads and PDF viewing when your work includes documents. Allow print windows if prompted.',
        guidance:
          'For paper copies, connect a printer that works with your device and browser.',
      },
      {
        id: 'media-permissions',
        item: 'Camera & microphone',
        requirement:
          'Allow camera or microphone access only when using a feature that needs it.',
        guidance:
          'Use a working camera and microphone for video calls, where enabled. These permissions are optional for routine records and forms.',
      },
    ],
  },
]
