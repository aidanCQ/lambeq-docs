import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import '@cqcl/quantinuum-ui/tokens.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const jetBrains = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'InQuanto',
  description: 'Quantum Chemistry on Quantum Computers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github.min.css"
        ></link>
        <link rel="icon" type="image/svg+xml" href="quantinuum_ident.svg" />
      </head>
      <body
        className={`${inter.variable} bg-background dark:bg-[#101010] overflow-x-hidden font-sans antialiased ${jetBrains.variable} `}
      >
        {children}
      </body>
    </html>
  )
}