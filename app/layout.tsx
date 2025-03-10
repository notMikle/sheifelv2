import type React from "react"
import type { Metadata } from "next"
import {Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Roboto({
  weight: ['300','400','500','700','900'],
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito"
})

export const metadata: Metadata = {
  title: "Химчистка Белгород",
  description: "Химчистка Белгород",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="ru" suppressHydrationWarning>
      <meta name="description"
            content="Профессиональная химчистка мягкой мебели в Белгороде по доступным ценам. Выезд на дом, качественная химия, индивидуальный подход."/>
      <meta name="keywords"
            content="химчистка мебели Белгород, химчистка диванов, химчистка мебели, химчистка мягкой мебели, Fazis Clean"/>
      <body className={`${nunito.variable} font-nunito`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
      </ThemeProvider>
      </body>
      </html>
  )
}


import './globals.css'
