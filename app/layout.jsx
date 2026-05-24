import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'NTGame',
  description: 'NTGame',
}

const banner = <Banner storageKey="game-guide-banner">Welcome to NTGame!</Banner>
const navbar = (
  <Navbar
    logo={<b>NTGame</b>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © NTGame.</Footer>

export default async function RootLayout({ children }) {
  let pageMap = []
  try {
    pageMap = await getPageMap()
  } catch {}
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
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
      </body>
    </html>
  )
}
