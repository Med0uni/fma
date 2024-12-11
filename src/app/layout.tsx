import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { LanguageProvider } from '@/providers/language-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// Latin font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-arabic',
})

export const metadata: Metadata = {
  title: {
    default: 'FM Arabia - Football Manager Community',
    template: '%s | FM Arabia',
  },
  description:
    'The ultimate Arabic Football Manager community. Find tactics, wonderkids, guides, and connect with fellow managers.',
  keywords: [
    'Football Manager',
    'FM',
    'FM24',
    'FM Arabia',
    'Football Manager Arabic',
    'FM Tactics',
    'FM Wonderkids',
  ],
  authors: [{ name: 'FM Arabia' }],
  creator: 'FM Arabia',
  publisher: 'FM Arabia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://fmarabia.com',
    siteName: 'FM Arabia',
    title: 'FM Arabia - Football Manager Community',
    description:
      'The ultimate Arabic Football Manager community. Find tactics, wonderkids, guides, and connect with fellow managers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FM Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FM Arabia - Football Manager Community',
    description:
      'The ultimate Arabic Football Manager community. Find tactics, wonderkids, guides, and connect with fellow managers.',
    images: ['/twitter-image.png'],
    creator: '@fmarabia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${ibmPlexSansArabic.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col font-sans">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
