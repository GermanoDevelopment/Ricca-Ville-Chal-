import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Ricca Ville Chalé - Casa de Temporada em Barra Grande, Piauí",
  description:
    "Viva dias inesquecíveis em nossa casa de temporada na Praia de Barra Grande - Piauí. Piscina com hidromassagem, área gourmet e muito mais.",
  keywords: "casa de temporada, Barra Grande, Piauí, chalé, piscina, área gourmet, praia, férias, aluguel temporada",
  authors: [{ name: "Ricca Ville Chalé" }],
  creator: "Ricca Ville Chalé",
  publisher: "Ricca Ville Chalé",
  robots: "index, follow",
  openGraph: {
    title: "Ricca Ville Chalé - Casa de Temporada em Barra Grande, Piauí",
    description: "Viva dias inesquecíveis em nossa casa de temporada na Praia de Barra Grande - Piauí.",
    type: "website",
    locale: "pt_BR",
    url: "https://riccavillechale.com",
    siteName: "Ricca Ville Chalé",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Ricca Ville Chalé - Casa de Temporada em Barra Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricca Ville Chalé - Casa de Temporada em Barra Grande, Piauí",
    description: "Viva dias inesquecíveis em nossa casa de temporada na Praia de Barra Grande - Piauí.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://riccavillechale.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4A90E2" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
