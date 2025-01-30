type MetadataProps = {
  title?: string
  description?: string
  image?: string
  type?: string
  locale?: string
}

export function generateMetadata({
  title = 'FM Arabia',
  description = 'The ultimate Arabic Football Manager community',
  image = '/og-image.png',
  type = 'website',
  locale = 'en',
}: MetadataProps = {}) {
  return {
    title: `${title} | FM Arabia`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
