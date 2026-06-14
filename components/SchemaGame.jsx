export default function SchemaGame({ name, description, image, genre, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": name,
    "description": description,
    "url": url,
    "image": image,
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
