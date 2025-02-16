import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Клининговые услуги",
  description: "Все виды клининговых услуг для физических и юридических лиц",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${nunito.variable} font-nunito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'