export const CLINIC_REPO_URL = 'https://github.com/ohcnetwork/care_clinic'
export const CLINIC_RELEASES_URL = `${CLINIC_REPO_URL}/releases/latest`
export type InstallerPlatform = 'mac' | 'windows'

/** Known download failures. The download button shows a translated message for each. */
export type DownloadErrorCode =
  | 'rateLimited'
  | 'releaseUnavailable'
  | 'invalidRelease'
  | 'noInstaller'
  | 'invalidUrl'
  | 'reload'

export class DownloadError extends Error {
  readonly code: DownloadErrorCode

  constructor(code: DownloadErrorCode) {
    super(code)
    this.name = 'DownloadError'
    this.code = code
  }
}

const installerPatterns = {
  mac: /-macos\.dmg$/i,
  windows: /-windows-amd64-setup\.exe$/i,
}

export async function getLatestInstaller(platform: InstallerPlatform) {
  const response = await fetch(
    'https://api.github.com/repos/ohcnetwork/care_clinic/releases/latest',
    {
      headers: { Accept: 'application/vnd.github+json' },
      cache: 'no-store',
      credentials: 'omit',
      signal: AbortSignal.timeout(15_000),
    },
  )

  if (!response.ok) {
    throw new DownloadError(
      response.status === 403 || response.status === 429
        ? 'rateLimited'
        : 'releaseUnavailable',
    )
  }

  const release: unknown = await response.json()
  if (
    !release ||
    typeof release !== 'object' ||
    !('assets' in release) ||
    !Array.isArray(release.assets)
  ) {
    throw new DownloadError('invalidRelease')
  }

  const installers = release.assets.filter(
    (asset): asset is { name: string; browser_download_url: string } =>
      asset !== null &&
      typeof asset === 'object' &&
      typeof asset.name === 'string' &&
      typeof asset.browser_download_url === 'string' &&
      installerPatterns[platform].test(asset.name),
  )

  if (installers.length !== 1) {
    throw new DownloadError('noInstaller')
  }

  const installer = installers[0]
  const url = new URL(installer.browser_download_url)
  if (
    url.origin !== 'https://github.com' ||
    !url.pathname.startsWith('/ohcnetwork/care_clinic/releases/download/') ||
    !url.pathname.endsWith(`/${encodeURIComponent(installer.name)}`) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new DownloadError('invalidUrl')
  }

  return url.href
}
