export const specification = {
  version: '1.0',
  reviewedOn: '2026-10-12',
  applicability:
    'General CARE browser workflows. Exact CARE frontend, backend, apps and deployment must be recorded before tender issue; no configuration has been benchmark-certified by this document. Recommended configurations retain all applicable minimum requirements and conditions.',
}

export type Requirement = {
  id: string
  item: string
  minimum: string
  recommended: string
  notes?: string
}

export type RequirementGroup = {
  id: string
  title: string
  basis: string
  scope: string
  rows: Requirement[]
  sources?: string[]
}

export const sources = [
  {
    id: 'care-browser',
    title: 'CARE frontend: browser policy and dependencies',
    url: 'https://github.com/ohcnetwork/care_fe/blob/ff7fce24e72923019b468ca53ad90cfa7f403c1c/package.json',
    detail:
      'Pinned source reviewed: ff7fce2. Its market-share browser query is not a certified compatibility matrix.',
  },
  {
    id: 'care-tests',
    title: 'CARE frontend: browser test configuration',
    url: 'https://github.com/ohcnetwork/care_fe/blob/ff7fce24e72923019b468ca53ad90cfa7f403c1c/playwright.config.ts',
    detail:
      'The inspected configuration enables Chromium. This does not establish Firefox, Safari, mobile or procurement hardware qualification.',
  },
  {
    id: 'windows',
    title: 'Microsoft: Windows 11 release and servicing information',
    url: 'https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information',
    detail:
      'Version and edition-specific support dates. Recheck the exact edition at delivery.',
  },
  {
    id: 'apple',
    title: 'Apple: security releases',
    url: 'https://support.apple.com/en-us/100100',
    detail:
      'macOS, Safari, iOS and iPadOS security release snapshot; not a promise of future device support.',
  },
  {
    id: 'ubuntu',
    title: 'Canonical: Ubuntu release lifecycle',
    url: 'https://ubuntu.com/about/release-cycle',
    detail:
      'Ubuntu 24.04 LTS standard maintenance to May 2029; 26.04 LTS to May 2031.',
  },
  {
    id: 'android',
    title: 'Android: October 2026 security bulletin',
    url: 'https://source.android.com/docs/security/bulletin/2026/2026-10-01',
    detail:
      'Platform fixes do not by themselves establish that an individual device receives OEM updates.',
  },
  {
    id: 'android-enterprise',
    title: 'Android Enterprise Recommended: device requirements',
    url: 'https://www.android.com/intl/en_us/enterprise/recommended/requirements/',
    detail:
      'Reference for managed device selection and OEM support disclosure. Our hardware and service-life targets remain proposed procurement requirements.',
  },
  {
    id: 'chrome',
    title: 'Google: Chrome Stable releases, October 2026',
    url: 'https://chromereleases.googleblog.com/2026/10/?amp=1',
    detail:
      'Stable 155 at review; early Stable and Beta 156 are not used as the baseline.',
  },
  {
    id: 'chrome-extended',
    title: 'Google: Chrome Extended Stable, 2 October 2026',
    url: 'https://chromereleases.googleblog.com/2026/10/extended-stable-update-for-desktop.html',
    detail: 'Managed Windows/macOS channel: 152.0.7977.152 at review.',
  },
  {
    id: 'edge',
    title: 'Microsoft: Edge Stable and Extended Stable releases',
    url: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel',
    detail:
      'Stable 155.0.4283.45 and Extended Stable 152.0.4191.122 at review.',
  },
  {
    id: 'firefox',
    title: 'Mozilla: Firefox enterprise release notes',
    url: 'https://firefox-admin-docs.mozilla.org/release-notes/version/firefox-157...latest/',
    detail:
      'Firefox 157 and ESR 153.4.0 at review. ESR 140 is out of support; Firefox 158 is not yet released on the review date.',
  },
  {
    id: 'printing',
    title: 'CARE: printing prescriptions',
    url: 'https://docs.ohc.network/flows/medications/medication-request/print-prescription/',
    detail:
      'Documents the print workflow; does not certify particular printer models.',
  },
  {
    id: 'deployment',
    title: 'CARE: deployment documentation',
    url: 'https://docs.ohc.network/deployment/',
    detail:
      'Deployment architecture and operational guidance. Infrastructure must be sized for the contracted workload.',
  },
  {
    id: 'care-compose',
    title: 'CARE backend: pinned Compose reference',
    url: 'https://github.com/ohcnetwork/care/blob/3fe704930d9b2d7b6ffdc212cbf6a6a72bfaede4/docker-compose.yaml',
    detail:
      'This reference selects PostgreSQL 17 and Redis 8. These are example stack versions, not universal supported minimums.',
  },
  {
    id: 'care-kubernetes',
    title: 'CARE Kubernetes: pinned database reference',
    url: 'https://github.com/ohcnetwork/deployment-k8/blob/a3b0c600f1944daff5cc0d195a2c2005192d56ee/infra/database/postgres.yaml',
    detail:
      'A different reference selects PostgreSQL 18.1 for a shared database. Resource requests and limits are not minimum/recommended server sizing.',
  },
]

export const requirementGroups: RequirementGroup[] = [
  {
    id: 'hardware',
    title: 'Desktop & laptop workstations',
    basis:
      'Proposed engineering procurement targets; not measured CARE software minimums.',
    scope:
      'Registration, consultation, nursing, pharmacy, billing and routine reports in a browser. Excludes server hosting, local AI inference and diagnostic imaging workstations.',
    rows: [
      {
        id: 'WS-01',
        item: 'Processor',
        minimum: '64-bit processor; 4 physical cores.',
        recommended:
          '6 or more physical cores, or equivalent performance demonstrated in the acceptance workload.',
        notes:
          'State the exact offered processor. GHz, brand and core count alone do not establish application performance; offered configurations must pass acceptance.',
      },
      {
        id: 'WS-02',
        item: 'Memory',
        minimum: '8 GB RAM.',
        recommended:
          '16 GB RAM; 32 GB for heavy reporting or substantial concurrent applications.',
        notes:
          'Capacity available to the complete workstation, including its OS and endpoint protection.',
      },
      {
        id: 'WS-03',
        item: 'Storage',
        minimum:
          '256 GB SSD; at least 30 GB free after the approved software image is installed.',
        recommended: '512 GB SSD; at least 60 GB free after installation.',
        notes:
          'Workstation storage only. Patient database, attachments and backups are sized on the server separately.',
      },
      {
        id: 'WS-04',
        item: 'Display',
        minimum:
          '1366 × 768 native resolution; 14-inch laptop or 19-inch desktop display.',
        recommended:
          '1920 × 1080 or higher; 21.5-inch or larger display at fixed desks.',
        notes:
          'Verify forms at intended scaling. Two displays can help with records and reports; these are not diagnostic-image display specifications.',
      },
      {
        id: 'WS-05',
        item: 'Graphics & input',
        minimum:
          'Graphics capable of driving the specified display; physical keyboard and mouse or trackpad.',
        recommended:
          'Graphics supporting all selected displays; full-size keyboard and mouse at fixed desks.',
        notes:
          'Integrated graphics may be sufficient. A discrete GPU is not required for these general browser workflows, but is not excluded.',
      },
      {
        id: 'WS-06',
        item: 'Connectivity & ports',
        minimum:
          '1 Gb Ethernet for fixed desks or dual-band Wi-Fi 5; ports/adapters for all specified peripherals.',
        recommended:
          '1 Gb Ethernet plus Wi-Fi 6 where wireless access is needed; spare peripheral ports.',
        notes:
          'Interface speed is separate from usable network bandwidth and internet capacity.',
      },
      {
        id: 'WS-07',
        item: 'Power continuity',
        minimum:
          'UPS for desktops/network equipment: 15 minutes at measured connected load. Laptops: 6 hours on the acceptance workload.',
        recommended:
          '30-minute UPS autonomy; 8-hour measured laptop battery life.',
        notes:
          'Size the UPS in watts and watt-hours for the actual load, including network equipment. Factory headline battery life is not acceptance evidence.',
      },
      {
        id: 'WS-08',
        item: 'Support & maintenance',
        minimum:
          '3-year hardware warranty and documented OS/security-update path for at least 3 years from delivery.',
        recommended:
          '5-year hardware support and documented 5-year security-update/upgrade path.',
        notes:
          'Supplier must state support end dates, coverage, repair turnaround and any recurring licence costs. These are proposed contract terms, not vendor guarantees.',
      },
    ],
  },
  {
    id: 'mobile-devices',
    title: 'Tablets & mobile devices',
    basis:
      'Proposed mobile procurement targets; each device and workflow requires qualification.',
    scope:
      'Bedside documentation, rounds, community and palliative-care workflows. Use workstations for sustained billing, large tables and bulk data entry.',
    sources: ['android-enterprise', 'apple'],
    rows: [
      {
        id: 'MB-01',
        item: 'Android processor & memory',
        minimum: '64-bit processor; 6 GB RAM.',
        recommended:
          '8 GB RAM or more; demonstrate smooth form entry and document viewing.',
        notes:
          'Record the exact SoC and physical RAM; do not count storage-based “virtual RAM”.',
      },
      {
        id: 'MB-02',
        item: 'iPad / iPhone',
        minimum:
          'Named model capable of the minimum OS version and all selected acceptance workflows.',
        recommended:
          'Current model meeting the recommended OS version with a documented support/upgrade plan.',
        notes:
          'Use model identification and observed workflow performance when OEM RAM specifications are not published. Do not infer Android RAM equivalence.',
      },
      {
        id: 'MB-03',
        item: 'Storage',
        minimum: '64 GB internal storage; 10 GB free after provisioning.',
        recommended: '128 GB internal storage; 20 GB free after provisioning.',
        notes:
          'Downloaded documents and captured media need local space. Device storage does not make the application available offline.',
      },
      {
        id: 'MB-04',
        item: 'Tablet display',
        minimum: '8-inch display; 1280 × 800 native resolution or higher.',
        recommended:
          '10-inch or larger display; 1920 × 1200 native resolution or higher.',
        notes:
          'Confirm form layout, touch targets and keyboard behaviour in both required orientations.',
      },
      {
        id: 'MB-05',
        item: 'Phone display',
        minimum: '6-inch display; 720 × 1600 native resolution or higher.',
        recommended:
          '6.5-inch display; 1080 × 2400 native resolution or higher.',
        notes:
          'Phones are for explicitly accepted mobile workflows, not a substitute for every desktop task.',
      },
      {
        id: 'MB-06',
        item: 'Wireless & battery',
        minimum:
          'Dual-band Wi-Fi 5; 4G/LTE where field connectivity is required; 6 hours of measured working use.',
        recommended:
          'Wi-Fi 6; 5G where locally useful; 8 hours of measured working use.',
        notes:
          'Survey actual coverage. Include chargers, protective cases and cleaning-compatible accessories in the bill of materials.',
      },
      {
        id: 'MB-07',
        item: 'Device management',
        minimum:
          'Screen lock, device encryption, remote lock/wipe and at least 3 years of documented security support from delivery.',
        recommended:
          'Centrally managed device fleet and at least 5 years of documented security support/upgrade coverage.',
        notes:
          'OEM support end month/year and update frequency must be supplied for the offered model.',
      },
    ],
  },
  {
    id: 'operating-systems',
    title: 'Operating system versions',
    basis:
      'Proposed OS selection using vendor lifecycle information reviewed on 12 October 2026; not a CARE-tested OS matrix.',
    scope:
      'Use the latest security patch on the selected maintained release. Confirm the exact edition and remaining support at delivery.',
    sources: ['windows', 'apple', 'ubuntu', 'android'],
    rows: [
      {
        id: 'OS-01',
        item: 'Windows',
        minimum: 'Windows 11 25H2, fully patched; 64-bit.',
        recommended:
          'Windows 11 26H2, fully patched, with a supported upgrade path.',
        notes:
          'Select Pro/Enterprise or another edition meeting fleet-management needs. Windows 10 and Windows 11 24H2 are excluded from this new-purchase baseline.',
      },
      {
        id: 'OS-02',
        item: 'macOS',
        minimum: 'macOS 15 Sequoia, latest security patch, on an eligible Mac.',
        recommended: 'macOS 27, latest security patch, on Apple silicon.',
        notes:
          'Require upgrade eligibility and verify the planned support term; a currently patched release alone does not guarantee 3–5 years of future coverage.',
      },
      {
        id: 'OS-03',
        item: 'Linux desktop',
        minimum:
          'Ubuntu 24.04 LTS, 64-bit, or a maintained equivalent validated with the selected browser and peripherals.',
        recommended:
          'Ubuntu 26.04 LTS, 64-bit, or a maintained equivalent with comparable support coverage.',
        notes:
          'Ubuntu standard maintenance: 24.04 to May 2029; 26.04 to May 2031. Budget extended support or an upgrade where the contract extends beyond coverage.',
      },
      {
        id: 'OS-04',
        item: 'Android',
        minimum:
          'Android 14 or later, receiving OEM updates; security patch no more than 90 days old at acceptance.',
        recommended:
          'Android 16 or 17, latest available OEM security patch, with the required remaining support term.',
        notes:
          'An Android version number alone is insufficient. Patch age is a proposed acceptance condition, not a substitute for prompt critical-security updates.',
      },
      {
        id: 'OS-05',
        item: 'iOS / iPadOS',
        minimum: 'iOS / iPadOS 26, latest security patch.',
        recommended:
          'iOS / iPadOS 27, latest security patch, on an upgrade-eligible device.',
        notes:
          'Verify the offered hardware model supports the specified release and required peripherals.',
      },
    ],
  },
  {
    id: 'web-browsers',
    title: 'Browser versions',
    basis:
      'Proposed browser procurement planning snapshot based on vendor-supported channels at 12 October 2026.',
    scope:
      'Select one qualified browser/OS combination per role. Keep security updates enabled; advance to maintained successor releases after qualification. Beta, Dev and Canary channels are excluded.',
    sources: [
      'chrome',
      'chrome-extended',
      'edge',
      'firefox',
      'apple',
      'care-browser',
      'care-tests',
    ],
    rows: [
      {
        id: 'BR-01',
        item: 'Chrome desktop',
        minimum:
          'Managed Extended Stable 152 on Windows/macOS (152.0.7977.152 at review); Stable 155 on Linux.',
        recommended:
          'Stable 155 or a later maintained stable release, latest security patch.',
        notes:
          'Extended Stable is a managed Windows/macOS option. These are a dated purchasing snapshot, not permission to retain an unsupported version.',
      },
      {
        id: 'BR-02',
        item: 'Edge desktop',
        minimum:
          'Managed Extended Stable 152 where offered (152.0.4191.122 at review); Stable 155 otherwise.',
        recommended:
          'Stable 155 or a later maintained stable release, latest security patch.',
        notes:
          'Keep the selected channel on its latest security update; qualify operating-system and peripheral combinations.',
      },
      {
        id: 'BR-03',
        item: 'Firefox desktop',
        minimum:
          'ESR 153.4.0 or the latest security update in the maintained ESR channel.',
        recommended:
          'Current maintained ESR, or Stable 157 and maintained successors, latest security patch.',
        notes:
          'ESR 140 is excluded: vendor support ended on 29 September 2026. ESR is suitable for managed fleets when the chosen CARE workflows pass qualification.',
      },
      {
        id: 'BR-04',
        item: 'Safari on Mac',
        minimum:
          'Safari 27, latest security update, on a maintained compatible macOS release.',
        recommended:
          'Latest maintained Safari release on the recommended macOS version.',
        notes:
          'Validate PDFs, printing, uploads, camera/microphone and enabled apps. A vendor-supported browser is not automatically a CARE-qualified configuration.',
      },
      {
        id: 'BR-05',
        item: 'Android browser',
        minimum:
          'Chrome Stable 155, latest security patch, on the specified Android baseline.',
        recommended:
          'Latest maintained Chrome Stable, managed updates enabled.',
        notes:
          'Qualify any alternative browser explicitly. Embedded/in-app webviews are outside this browser baseline.',
      },
      {
        id: 'BR-06',
        item: 'iPhone / iPad browser',
        minimum:
          'Safari supplied with fully patched iOS / iPadOS 26 (26.7.1 OS at review).',
        recommended:
          'Safari supplied with fully patched iOS / iPadOS 27 (27.0.1 OS at review).',
        notes:
          'The numbers in parentheses identify the OS build, not a separate Safari version.',
      },
    ],
  },
  {
    id: 'network',
    title: 'Network & connectivity',
    basis:
      'Proposed network planning and acceptance targets; not measured CARE consumption or guaranteed performance.',
    scope:
      'Measure usable throughput in both directions to the actual deployment at peak load. Reserve capacity for CARE separately from other facility traffic.',
    rows: [
      {
        id: 'NW-01',
        item: 'Browser workflow budget',
        minimum:
          '2 Mbps download + 1 Mbps upload per concurrently active user.',
        recommended:
          '5 Mbps download + 2 Mbps upload per concurrently active user.',
        notes:
          'Planning allowance for routine forms and records. Count active users, not registered accounts. Bulk uploads and integrations need separate allowances.',
      },
      {
        id: 'NW-02',
        item: 'Live audio/video allowance',
        minimum:
          'Additional 4 Mbps upload + 4 Mbps download per simultaneous on-site calling endpoint, or the configured service requirement if higher.',
        recommended:
          'Additional 8 Mbps upload + 8 Mbps download per simultaneous on-site calling endpoint, or the configured service requirement if higher.',
        notes:
          'Count local participating devices, not meeting IDs: two local devices in one meeting need two allocations. Camera streams, multi-party calls and TeleICU monitoring require their actual service/stream profiles.',
      },
      {
        id: 'NW-03',
        item: 'Connection quality',
        minimum: '95th-percentile round-trip time ≤150 ms; packet loss <1%.',
        recommended:
          '95th-percentile round-trip time ≤100 ms; packet loss <0.5%.',
        notes:
          'Measure along the path to the deployed CARE endpoint during the peak-load acceptance window. These are network targets, not page-load times.',
      },
      {
        id: 'NW-04',
        item: 'Local access network',
        minimum:
          '1 Gb Ethernet at fixed desks, or dual-band Wi-Fi 5 with verified coverage and peak client capacity.',
        recommended:
          'Wired fixed desks; Wi-Fi 6 for mobile areas, with a capacity and roaming survey.',
        notes:
          'Wireless link rate is not usable throughput. Verify each clinical work area, not only the access-point location.',
      },
      {
        id: 'NW-05',
        item: 'Access & certificates',
        minimum:
          'Trusted HTTPS access to CARE and all required app/service endpoints; working DNS and any organisation-required VPN.',
        recommended:
          'Documented endpoint allowlist, centrally managed certificates and monitored connectivity.',
        notes:
          'Confirm required media, WebSocket and integration access with the deployment provider. Do not assume opening TCP 443 alone enables every integration.',
      },
      {
        id: 'NW-06',
        item: 'Continuity',
        minimum:
          'UPS-backed router/switches and a documented network-outage procedure.',
        recommended:
          'Independent backup connectivity with demonstrated failover and UPS-backed network equipment.',
        notes:
          'Local hosting does not automatically make browser workflows offline-capable. Test loss and restoration of connectivity using synthetic records.',
      },
    ],
  },
  {
    id: 'peripherals',
    title: 'Printers, scanners & media',
    basis:
      'Proposed workflow-specific equipment targets; no model certification is implied.',
    scope:
      'Buy only the equipment needed for the named role. Supplier must demonstrate drivers, connectors, consumables and output using the actual CARE templates.',
    sources: ['printing'],
    rows: [
      {
        id: 'PR-01',
        item: 'Document printer',
        minimum:
          'A4; 600 dpi; 20 pages/minute; supported driver for the selected OS.',
        recommended:
          'A4; 600 dpi or higher; 30 pages/minute; automatic duplex and network printing.',
        notes:
          'Required at document-printing points. Demonstrate legible prescriptions/reports, correct margins, page breaks and patient identifiers.',
      },
      {
        id: 'PR-02',
        item: 'Receipt / label printer',
        minimum:
          '203 dpi; paper width and label dimensions matching the approved receipt/label template.',
        recommended:
          '300 dpi for small labels or dense codes where demonstrated to improve scan reliability.',
        notes:
          'Specify receipt and label printers separately if both are needed. Paper size and driver/template compatibility take precedence over headline DPI.',
      },
      {
        id: 'PR-03',
        item: 'Barcode / QR reader',
        minimum:
          '1D and 2D reader including QR; interface compatible with the selected workstation.',
        recommended:
          'USB HID reader with hands-free stand, reading both printed codes and phone screens.',
        notes:
          'Demonstrate 50 consecutive reads of representative approved codes with no wrong value or missing/duplicate entry. Confirm terminator/focus behaviour.',
      },
      {
        id: 'PR-04',
        item: 'Document scanner',
        minimum:
          '300 dpi; PDF/JPEG output; supported OS driver or accepted upload workflow.',
        recommended:
          'Automatic document feeder, duplex scanning and 20 pages/minute or higher.',
        notes:
          'Required only where paper documents are digitised. Demonstrate upload, orientation, readability and record association.',
      },
      {
        id: 'PR-05',
        item: 'Camera & audio',
        minimum:
          '720p camera at 30 fps; microphone and headphones/speakers for enabled calls.',
        recommended:
          '1080p camera at 30 fps; USB headset with noise-reducing microphone.',
        notes:
          'Check browser permissions and the configured calling service. Clinical cameras, diagnostic imaging and medical-device integrations need separate specifications and validation.',
      },
    ],
  },
  {
    id: 'deployment',
    title: 'Hosting & server procurement',
    basis:
      'Procurement deliverables proposed for deployment-specific sizing. No universal CPU/RAM-to-user capacity is established.',
    scope:
      'Applies only when server/cloud hosting is part of the purchase. Workstation and tablet numbers must not be reused as server specifications.',
    sources: ['deployment', 'care-compose', 'care-kubernetes'],
    rows: [
      {
        id: 'SV-01',
        item: 'Capacity schedule',
        minimum:
          'Supplier states vCPU, RAM, disk capacity/type and IOPS for each service; sized against the signed workload and growth assumptions.',
        recommended:
          'Separate application, database and storage sizing; demonstrate at least 30% capacity headroom at agreed peak load.',
        notes:
          'Record active concurrency, transaction mix, record count, uploads/day, average file size, retention, integrations and growth horizon. CPU count alone cannot establish user capacity.',
      },
      {
        id: 'SV-02',
        item: 'Version manifest',
        minimum:
          'Exact CARE frontend/backend releases or commits; app versions; image digests; database/cache/OS versions.',
        recommended:
          'Reproducible, version-controlled deployment manifest with tested upgrade and rollback procedures.',
        notes:
          'Upstream reference stacks differ. PostgreSQL/Redis versions shown in one example are not interchangeable or universal supported minimums.',
      },
      {
        id: 'SV-03',
        item: 'Storage & recovery',
        minimum:
          'Separate database, attachments, logs and backup sizing; buyer-agreed RPO/RTO values and a witnessed restore test.',
        recommended:
          'Independent backup copies and tested recovery/failover that meets the agreed RPO/RTO under realistic data volume.',
        notes:
          'RPO is tolerable data loss; RTO is time to restore service. Set numeric values before tender issue. Backup frequency or replica count is not proof of recovery.',
      },
      {
        id: 'SV-04',
        item: 'Operations',
        minimum:
          'Named operator, monitoring, patching, incident response and documented availability/support commitments.',
        recommended:
          'Monitored redundant components and rehearsed failure/recovery procedures for the contracted availability target.',
        notes:
          'The hosting bill of materials and service-level targets require a deployment-specific annex; this client specification is not a complete server tender.',
      },
    ],
  },
  {
    id: 'acceptance',
    title: 'Acceptance & supplier evidence',
    basis:
      'Proposed acceptance contract; targets must be approved before issue. No performance measurements have been performed for this document.',
    scope:
      'Run on the offered hardware, approved software image and exact deployment using representative synthetic records. Record results per model, OS, browser and role.',
    rows: [
      {
        id: 'AT-01',
        item: 'Configuration evidence',
        minimum:
          'Exact model/CPU/RAM/storage, firmware, OS edition/build, browser build, CARE/app versions and security support end dates.',
        recommended:
          'Signed configuration inventory, reproducible software image and attached supplier datasheets.',
        notes:
          'Record deviations against each requirement ID. Evaluate equivalent hardware against the same acceptance workload.',
      },
      {
        id: 'AT-02',
        item: 'Workflow completeness',
        minimum:
          'All role-specific scenarios pass: login, search, record open, form save, upload, PDF view and required printing/scanning.',
        recommended:
          'Also validate multitasking, localisation, intended zoom/scaling and required mobile orientations.',
        notes:
          'Include only workflows enabled for the role; exercise at least one device of every offered hardware/OS/browser combination before award. Agree delivery sampling separately.',
      },
      {
        id: 'AT-03',
        item: 'Interactive response',
        minimum:
          '95% of patient searches, record opens and form saves complete within 3 seconds at the agreed peak active-user load.',
        recommended:
          '95% of the same actions complete within 2 seconds at that load.',
        notes:
          'Proposed target, not a CARE benchmark. Measure from user action to usable results or confirmed save; at least 100 samples per action after warm-up. Excludes large file transfers and long-running analytics, which need separate limits.',
      },
      {
        id: 'AT-04',
        item: 'Sustained operation',
        minimum:
          '30-minute representative workload at agreed concurrency, with no crashes, unhandled errors or lost/duplicate committed records.',
        recommended:
          '60-minute workload with the same criteria, including simultaneous printing and uploads where used.',
        notes:
          'Agree record volumes and task mix before bids. Reconcile saved records after the run. Assess device and server/network contributions separately.',
      },
      {
        id: 'AT-05',
        item: 'Peripheral & outage checks',
        minimum:
          'Demonstrate every supplied peripheral and connectivity loss/recovery without silent record loss or duplicate submission.',
        recommended:
          'Also demonstrate backup network, power autonomy and restoration procedures under witnessed conditions.',
        notes:
          'Use a test environment and synthetic records. Medical-device integrations and video services need their own acceptance scenarios.',
      },
      {
        id: 'AT-06',
        item: 'Approval & change control',
        minimum:
          'Approve scope/targets before tender issue; qualify offered configurations before award; accept delivered systems before operational use.',
        recommended:
          'Requalify affected workflows after major CARE, app, OS or browser upgrades; retain versioned evidence.',
        notes:
          'Security patches must follow the organisation’s patch policy. Do not freeze unsupported software to preserve an old procurement snapshot.',
      },
    ],
  },
]
