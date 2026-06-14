import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import CookieConsent from '../components/CookieConsent'

export const metadata = {
  title: 'NTGame - 游戏攻略 / Game Guides',
  description: 'NTGame provides free bilingual game guides covering Elden Ring, Baldur\'s Gate 3, Genshin Impact, Black Myth Wukong, Cyberpunk 2077, Civilization VII, and more. NTGame 提供免费中文英文双语游戏攻略。',
}

const banner = <Banner storageKey="game-guide-banner">Welcome to NTGame - 免费游戏攻略 / Free Game Guides</Banner>
const navbar = (
  <Navbar
    logo={<b>NTGame</b>}
  />
)
const footer = (
  <Footer>
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/about" style={{ color: 'inherit' }}>关于 / About</a>
      <a href="/contact" style={{ color: 'inherit' }}>联系 / Contact</a>
      <a href="/privacy" style={{ color: 'inherit' }}>隐私 / Privacy</a>
      <a href="/terms" style={{ color: 'inherit' }}>条款 / Terms</a>
      <a href="https://github.com/ntgamecom/www" style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://twitter.com/NTGameCom" style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer">Twitter / X</a>
    </div>
    <div style={{ marginTop: '8px' }}>
      {'\u00A9'} {new Date().getFullYear()} NTGame. All rights reserved.
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  let pageMap = []
  try {
    pageMap = await getPageMap()
  } catch {}
  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3251810306927366" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NTGame",
          "url": "https://ntgame.com",
          "description": "NTGame provides free bilingual game guides for 71+ popular games. NTGame 提供免费中英双语游戏攻略",
          "inLanguage": ["zh", "en"],
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://ntgame.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }) }} />
      </Head>
      <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/ntgamecom/www"
            footer={footer}
            editLink={null}
            feedback={{ content: null }}
          >
          {children ?? <></>}
        </Layout>
        <CookieConsent />
      </body>
    </html>
  )
}
