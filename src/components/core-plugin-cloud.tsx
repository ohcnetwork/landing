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
import { useTranslations } from 'next-intl'

const coreModules = [
  'administration',
  'definitions',
  'clinical',
  'scheduling',
  'pharmacy',
  'labs',
  'billing',
] as const

const plugins = [
  { id: 'aiScribe', icon: BrainCircuit },
  { id: 'teleicu', icon: Activity },
  { id: 'imaging', icon: Images },
  { id: 'devices', icon: Radio },
  { id: 'messaging', icon: MessageCircle },
  { id: 'analytics', icon: Layers3 },
  { id: 'claims', icon: CreditCard },
  { id: 'terminology', icon: Braces },
] as const

const solutions = [
  { id: 'hospitalOs', icon: Hospital },
  { id: 'criticalCare', icon: Activity },
  { id: 'homeCare', icon: HeartPulse },
  { id: 'clinicNetwork', icon: Stethoscope },
  { id: 'publicHealth', icon: ShieldCheck },
] as const

type Tile = { name: string; icon: React.ComponentType<{ className?: string }> }

function SolutionTile({ item }: { item: Tile }) {
  const { name, icon: Icon } = item

  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.065] px-3 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
        <Icon className="size-3.5 text-[#b8f36f]" />
      </div>
      <p className="truncate text-[11px] font-semibold text-white">{name}</p>
    </div>
  )
}

function PluginPill({ item, index }: { item: Tile; index: number }) {
  const { name, icon: Icon } = item

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
  const t = useTranslations('corePluginCloud')
  const value = (chunks: React.ReactNode) => (
    <b className="font-semibold text-white/78">{chunks}</b>
  )

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
        {coreModules.map((id, index) => (
          <div
            key={id}
            className={
              index === 6
                ? 'hidden rounded-lg border border-white/9 bg-white/[0.075] p-3 sm:block'
                : 'rounded-lg border border-white/9 bg-white/[0.075] p-3'
            }
          >
            <p className="truncate text-xs font-semibold text-white">
              {t(`modules.${id}.name`)}
            </p>
            <p className="mt-1 truncate text-[10px] text-white/48">
              {t(`modules.${id}.detail`)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 rounded-lg border border-white/9 bg-[#041611]/42 p-3 text-[10px] text-white/58 sm:grid-cols-2">
        <div>{t.rich('persistence', { b: value })}</div>
        <div className="sm:text-right">{t.rich('runtime', { b: value })}</div>
      </div>
    </div>
  )
}

export function CorePluginCloud({ className = '' }: { className?: string }) {
  const t = useTranslations('corePluginCloud')

  return (
    <figure
      aria-label={t('ariaLabel')}
      className={`relative isolate mx-auto h-[910px] w-full max-w-6xl overflow-hidden rounded-lg border border-[#0c332a] bg-[#041611] text-white shadow-[0_30px_86px_rgba(5,46,36,0.24)] sm:h-[470px] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(67,205,139,0.26),rgba(10,64,48,0.28)_32%,rgba(4,22,17,0.97)_74%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,243,111,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(184,243,111,0.045)_1px,transparent_1px)] bg-size-[36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/8 to-transparent" />

      <div className="absolute top-5 left-5 z-20 rounded-md border border-white/10 bg-[#041611]/72 px-3 py-2 backdrop-blur-xl sm:top-6 sm:left-6">
        <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#b8f36f] uppercase">
          {t('eyebrow')}
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
                  {t('pluginRuntime')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {plugins.slice(0, 6).map(({ id, icon }, index) => (
                <PluginPill
                  key={id}
                  item={{ name: t(`plugins.${id}`), icon }}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#b8f36f] uppercase">
                {t('enabledSolutions')}
              </p>
              <p className="hidden text-xs font-medium text-white/44 sm:block">
                {t('enabledBy')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map(({ id, icon }) => (
                <SolutionTile
                  key={id}
                  item={{ name: t(`solutions.${id}`), icon }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">{t('caption')}</figcaption>
    </figure>
  )
}
