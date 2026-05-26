import {
  Activity,
  Braces,
  BrainCircuit,
  CreditCard,
  Database,
  HeartPulse,
  Hospital,
  Images,
  Layers3,
  MessageCircle,
  Plug,
  Radio,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'

const coreModules = [
  ['Administration', 'Patients / Facilities / Users'],
  ['Definitions', 'ValueSets / Questionnaires'],
  ['Clinical', 'Encounters / Observations'],
  ['Scheduling', 'Schedules / Slots / Bookings'],
  ['Pharmacy', 'Dispense / Inventory'],
  ['Labs', 'Service Req / Diagnostics'],
  ['Billing', 'Claims / Coverage / Invoice'],
]

const plugins = [
  ['AI Scribe', BrainCircuit],
  ['TeleICU', Activity],
  ['Imaging', Images],
  ['Devices', Radio],
  ['Messaging', MessageCircle],
  ['Analytics', Layers3],
  ['Claims', CreditCard],
  ['Terminology', Braces],
] as const

const solutions = [
  ['Hospital OS', Hospital],
  ['Critical care', Activity],
  ['Home care grid', HeartPulse],
  ['Clinic network', Stethoscope],
  ['Public health', ShieldCheck],
] as const

function SolutionTile({ item }: { item: (typeof solutions)[number] }) {
  const [name, Icon] = item

  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.065] px-3 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
        <Icon className="size-3.5 text-[#b8f36f]" />
      </div>
      <p className="truncate text-[11px] font-semibold text-white">{name}</p>
    </div>
  )
}

function PluginPill({
  item,
  index,
}: {
  item: (typeof plugins)[number]
  index: number
}) {
  const [name, Icon] = item

  return (
    <div
      className={`items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] font-semibold text-white/78 backdrop-blur-xl ${
        index > 5 ? 'hidden sm:flex' : 'flex'
      }`}
    >
      <Icon className="size-4 shrink-0 text-[#b8f36f]" />
      <span className="truncate">{name}</span>
    </div>
  )
}

function CoreSlab() {
  return (
    <div className="relative rounded-[26px] border border-white/16 bg-[linear-gradient(145deg,rgba(113,224,159,0.42),rgba(6,51,40,0.92)_52%,rgba(3,25,20,0.96))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_26px_76px_rgba(4,34,27,0.48)] backdrop-blur-xl sm:rounded-[30px] sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-lg border border-white/18 bg-white/14 backdrop-blur-xl">
            <Database className="size-5 text-[#dfffe8]" />
          </div>
          <h2 className="text-3xl/[0.95] font-semibold tracking-normal text-white sm:text-5xl/[0.9]">
            CARE Core
          </h2>
        </div>
        <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-[#d8eadf]/78 uppercase">
          v3.0.0 / FHIR R5
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {coreModules.map(([name, detail], index) => (
          <div
            key={name}
            className={
              index === 6
                ? 'hidden rounded-lg border border-white/9 bg-white/[0.075] p-3 sm:block'
                : 'rounded-lg border border-white/9 bg-white/[0.075] p-3'
            }
          >
            <p className="truncate text-xs font-semibold text-white">{name}</p>
            <p className="mt-1 truncate text-[10px] text-white/48">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 rounded-lg border border-white/9 bg-[#041611]/42 p-3 text-[10px] text-white/58 sm:grid-cols-2">
        <div>
          Persistence /{' '}
          <b className="font-semibold text-white/78">PostgreSQL</b> /{' '}
          <b className="font-semibold text-white/78">Redis</b> /{' '}
          <b className="font-semibold text-white/78">Object storage</b>
        </div>
        <div className="sm:text-right">
          Runtime / <b className="font-semibold text-white/78">Django</b> /{' '}
          <b className="font-semibold text-white/78">DRF</b> /{' '}
          <b className="font-semibold text-white/78">Celery</b>
        </div>
      </div>
    </div>
  )
}

export function CorePluginCloud({ className = '' }: { className?: string }) {
  return (
    <figure
      aria-label="CARE Core plus plugins enables many healthcare solutions"
      className={`relative isolate mx-auto h-[910px] w-full max-w-6xl overflow-hidden rounded-lg border border-[#0c332a] bg-[#041611] text-white shadow-[0_30px_86px_rgba(5,46,36,0.24)] sm:h-[470px] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(67,205,139,0.26),rgba(10,64,48,0.28)_32%,rgba(4,22,17,0.97)_74%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,243,111,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(184,243,111,0.045)_1px,transparent_1px)] bg-size-[36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/8 to-transparent" />

      <div className="absolute top-5 left-5 z-20 rounded-md border border-white/10 bg-[#041611]/72 px-3 py-2 backdrop-blur-xl sm:top-6 sm:left-6">
        <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#b8f36f] uppercase">
          Core + Plugins
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[59%] hidden h-[72%] w-[1px] -translate-y-1/2 bg-linear-to-b from-transparent via-[#b8f36f]/18 to-transparent sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[57%] hidden h-[1px] w-[30%] bg-linear-to-r from-[#b8f36f]/30 via-white/12 to-transparent sm:block"
      />

      <div className="relative z-10 grid h-full gap-4 p-4 pt-16 sm:grid-cols-[1.42fr_0.82fr] sm:p-6 sm:pt-16">
        <div className="flex items-center">
          <CoreSlab />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <div className="rounded-lg border border-white/10 bg-[#061f19]/76 p-3 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Plug className="size-4 text-[#b8f36f]" />
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                  Plugin runtime
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {plugins.slice(0, 6).map((item, index) => (
                <PluginPill key={item[0]} item={item} index={index} />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                Enabled solutions
              </p>
              <p className="hidden text-xs font-medium text-white/44 sm:block">
                Core + plugins enable
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map((item) => (
                <SolutionTile key={item[0]} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        CARE Core provides the stable platform slab. Plugins add capabilities
        such as AI documentation, TeleICU, imaging, devices, messaging,
        analytics, claims, and terminology. Together they enable hospital,
        critical care, home care, clinic, and public health solutions.
      </figcaption>
    </figure>
  )
}
