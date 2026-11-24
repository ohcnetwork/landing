'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDown, Download, LoaderCircle } from 'lucide-react'
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  CLINIC_RELEASES_URL,
  DownloadError,
  getLatestInstaller,
  type DownloadErrorCode,
  type InstallerPlatform,
} from './release-download'

/** Translated text for the download buttons, resolved on the server. */
export type ClinicDownloadLabels = {
  /** Menu button label. */
  button: string
  /** Fallback link to the GitHub releases page. */
  releases: string
  /** Screen-reader status once the browser download starts. */
  requested: string
  platforms: Record<
    InstallerPlatform,
    {
      downloadFor: string
      preparing: string
      frameTitle: string
      noInstaller: string
    }
  >
  errors: Record<Exclude<DownloadErrorCode, 'noInstaller'> | 'network', string>
}

type DownloadState = {
  status: 'idle' | 'loading' | 'starting' | 'error'
  error?: string
  initiatorId?: string
}
type DownloadStates = Record<InstallerPlatform, DownloadState>

const DownloadContext = createContext<{
  states: DownloadStates
  labels: ClinicDownloadLabels
  download: (platform: InstallerPlatform, initiatorId: string) => Promise<void>
} | null>(null)

export function ClinicDownloadProvider({
  labels,
  children,
}: {
  labels: ClinicDownloadLabels
  children: ReactNode
}) {
  const [states, setStates] = useState<DownloadStates>({
    mac: { status: 'idle' },
    windows: { status: 'idle' },
  })
  // Share a synchronous lock across every copy of each platform's button.
  const locks = useRef({ mac: false, windows: false })
  const frames = useRef<Partial<Record<InstallerPlatform, HTMLIFrameElement>>>(
    {},
  )
  const timers = useRef<Partial<Record<InstallerPlatform, number>>>({})

  useEffect(() => {
    const pendingTimers = timers.current
    return () => {
      Object.values(pendingTimers).forEach(window.clearTimeout)
    }
  }, [])

  async function download(platform: InstallerPlatform, initiatorId: string) {
    if (locks.current[platform]) return
    locks.current[platform] = true
    setStates((current) => ({
      ...current,
      [platform]: { status: 'loading', initiatorId },
    }))

    try {
      const url = await getLatestInstaller(platform)
      const frame = frames.current[platform]
      if (!frame) throw new DownloadError('reload')
      // Target an attachment frame so the clinic page never navigates away.
      frame.src = url
      setStates((current) => ({
        ...current,
        [platform]: { status: 'starting', initiatorId },
      }))
      // Native downloads have no start event; briefly guard the browser handoff.
      timers.current[platform] = window.setTimeout(() => {
        locks.current[platform] = false
        setStates((current) => ({ ...current, [platform]: { status: 'idle' } }))
      }, 3000)
    } catch (error) {
      locks.current[platform] = false
      setStates((current) => ({
        ...current,
        [platform]: {
          status: 'error',
          initiatorId,
          error:
            error instanceof DownloadError
              ? error.code === 'noInstaller'
                ? labels.platforms[platform].noInstaller
                : labels.errors[error.code]
              : error instanceof Error &&
                  error.name !== 'TimeoutError' &&
                  error.name !== 'TypeError'
                ? error.message
                : labels.errors.network,
        },
      }))
    }
  }

  return (
    <DownloadContext.Provider value={{ states, labels, download }}>
      {children}
      {(['mac', 'windows'] as const).map((platform) => (
        <iframe
          key={platform}
          ref={(element) => {
            if (element) frames.current[platform] = element
            else delete frames.current[platform]
          }}
          title={labels.platforms[platform].frameTitle}
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
        />
      ))}
    </DownloadContext.Provider>
  )
}

export function ClinicDownloadButton({ className }: { className: string }) {
  const buttonId = useId()
  const [platform, setPlatform] = useState<InstallerPlatform>('mac')
  const context = useContext(DownloadContext)
  if (!context) {
    throw new Error('ClinicDownloadButton requires ClinicDownloadProvider')
  }
  const { labels } = context
  const state = context.states[platform]
  const isInitiator = state.initiatorId === buttonId
  const busy = Object.values(context.states).some(
    (state) => state.status === 'loading' || state.status === 'starting',
  )
  const Icon = busy ? LoaderCircle : Download

  return (
    <div className="relative">
      <Menu>
        <MenuButton
          className={`${className} w-full cursor-pointer disabled:cursor-wait`}
          disabled={busy}
          aria-busy={busy}
        >
          <Icon
            className={`size-[18px] shrink-0 ${busy ? 'animate-spin motion-reduce:animate-none' : ''}`}
            strokeWidth={2.4}
            aria-hidden="true"
          />
          {labels.button}
          <ChevronDown className="size-4 shrink-0" aria-hidden="true" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="z-50 mt-2 w-64 rounded-[14px] border border-black/10 bg-white p-1.5 text-[#014737] shadow-xl focus:outline-none"
        >
          {(['mac', 'windows'] as const).map((option) => (
            <MenuItem key={option}>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-4 py-3 text-left font-semibold data-focus:bg-[#def7ec]"
                onClick={() => {
                  setPlatform(option)
                  void context.download(option, buttonId)
                }}
              >
                <Download className="size-[18px]" aria-hidden="true" />
                {labels.platforms[option].downloadFor}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <span className="sr-only" role="status">
        {!isInitiator
          ? ''
          : state.status === 'loading'
            ? labels.platforms[platform].preparing
            : state.status === 'starting'
              ? labels.requested
              : ''}
      </span>
      {state.status === 'error' && (
        <p
          role={isInitiator ? 'alert' : undefined}
          className="absolute top-full left-0 z-10 mt-2 w-full rounded-lg border border-red-200 bg-white p-3 text-sm leading-relaxed text-red-800 shadow-lg"
        >
          {state.error}{' '}
          <a
            href={CLINIC_RELEASES_URL}
            className="font-semibold underline underline-offset-2"
          >
            {labels.releases}
          </a>
        </p>
      )}
    </div>
  )
}
