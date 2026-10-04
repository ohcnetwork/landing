import assert from 'node:assert/strict'
import { afterEach, mock, test } from 'node:test'
import { getLatestInstaller } from './release-download.ts'

const releaseUrl =
  'https://github.com/ohcnetwork/care_clinic/releases/download/v0.1.9/'
const mac = 'CARE-Clinic-0.1.9-macos.dmg'
const windows = 'CARE-Clinic-0.1.9-windows-amd64-setup.exe'
const asset = (name) => ({
  name,
  browser_download_url: `${releaseUrl}${name}`,
})

afterEach(() => mock.restoreAll())

function respond(body, status = 200) {
  return mock.method(globalThis, 'fetch', async () =>
    Response.json(body, { status }),
  )
}

test('selects only the matching installer from the latest release', async () => {
  const request = respond({
    assets: [asset('release-config.env'), asset(windows), asset(mac)],
  })
  assert.equal(await getLatestInstaller('mac'), `${releaseUrl}${mac}`)
  assert.equal(await getLatestInstaller('windows'), `${releaseUrl}${windows}`)
  const [url, options] = request.mock.calls[0].arguments
  assert.equal(
    url,
    'https://api.github.com/repos/ohcnetwork/care_clinic/releases/latest',
  )
  assert.equal(options.cache, 'no-store')
  assert.equal(options.credentials, 'omit')
  assert.ok(options.signal instanceof AbortSignal)
})

test('resolves new release versions without a hardcoded filename', async () => {
  const name = 'CARE-Clinic-2.0.0-macos.dmg'
  const url = `${releaseUrl.replace('v0.1.9', 'v2.0.0')}${name}`
  respond({ assets: [{ name, browser_download_url: url }] })
  assert.equal(await getLatestInstaller('mac'), url)
})

test('reports GitHub rate limiting explicitly', async () => {
  respond({}, 403)
  await assert.rejects(getLatestInstaller('mac'), /limiting download requests/)
})

test('reports release lookup failures', async () => {
  respond({}, 404)
  await assert.rejects(getLatestInstaller('mac'), /could not be loaded/)
})

test('rejects malformed release data', async () => {
  respond({ assets: null })
  await assert.rejects(
    getLatestInstaller('mac'),
    /release information is invalid/,
  )
})

test('does not substitute a different platform or non-installer asset', async () => {
  respond({ assets: [null, asset(mac), asset('SHA256SUMS')] })
  await assert.rejects(
    getLatestInstaller('windows'),
    /matching Windows installer/,
  )
})

test('rejects ambiguous installers rather than selecting an arbitrary binary', async () => {
  respond({ assets: [asset(mac), asset(`another-${mac}`)] })
  await assert.rejects(getLatestInstaller('mac'), /matching Mac installer/)
})

test('rejects installer URLs outside the official release assets', async () => {
  respond({
    assets: [
      {
        name: mac,
        browser_download_url: `https://example.com/${mac}`,
      },
    ],
  })
  await assert.rejects(getLatestInstaller('mac'), /download address is invalid/)
})

test('propagates network failures for the button to display and allow retry', async () => {
  mock.method(globalThis, 'fetch', async () => {
    throw new TypeError('Failed to fetch')
  })
  await assert.rejects(getLatestInstaller('mac'), /Failed to fetch/)
})
