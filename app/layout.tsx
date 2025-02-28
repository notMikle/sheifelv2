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
  title: "Химчистка мебели Белгород",
  description: "Химчистка мебели Белгород",
  icons: {
    icon: '/favicon.png',
  },
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
