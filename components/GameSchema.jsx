'use client'

export default function GameSchema({ name, description, url, image, genre }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": name,
    "description": description,
    "url": url,
    "image": image || undefined,
    "genre": genre || "Video Game",
    "inLanguage": ["zh", "en"]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
