import { readdirSync, statSync, writeFileSync, existsSync } from 'fs'
import { join, relative } from 'path'

const SITE_URL = 'https://ntgame.com'
const APP_DIR = new URL('../app', import.meta.url).pathname
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname

function findPages(dir) {
  const pages = []
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      pages.push(...findPages(full))
    } else if (entry.name === 'page.mdx') {
      const route = relative(APP_DIR, dir)
      if (route === 'layout') continue
      pages.push(route === '' ? '' : `/${route}`)
    }
  }
  return pages
}

const routes = findPages(APP_DIR).sort()

const urls = routes.map(route =>
  `  <url>
    <loc>${SITE_URL}${route}/</loc>
  </url>`
).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), sitemap, 'utf-8')
console.log(`Sitemap generated: ${routes.length} URLs`)
