import { RootDocument, rootMetadata } from '@/components/root-document'
import { defaultLocale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

// The site has one root layout per locale group, so unmatched URLs render
// this page (exported as 404.html). Static hosts serve it for every locale, so
// it uses the default locale and Next's standard 404 markup.

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...(await rootMetadata(defaultLocale)),
    title: '404: This page could not be found.',
  }
}

export default function GlobalNotFound() {
  setRequestLocale(defaultLocale)

  return (
    <RootDocument locale={defaultLocale}>
      <div
        style={{
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}',
            }}
          />
          <h1
            className="next-error-h1"
            style={{
              display: 'inline-block',
              margin: '0 20px 0 0',
              padding: '0 23px 0 0',
              fontSize: 24,
              fontWeight: 500,
              verticalAlign: 'top',
              lineHeight: '49px',
            }}
          >
            404
          </h1>
          <div style={{ display: 'inline-block' }}>
            <h2
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '49px',
                margin: 0,
              }}
            >
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </RootDocument>
  )
}
