import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider, TransitionProvider } from "@/components/theme-provider"
import { CharlieAssistant } from "@/components/charlie-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charlie Ethics Assistant Dashboard",
  description: "Ethics Assistant Dashboard for AI professionals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TransitionProvider>
            <div className="flex min-h-screen flex-col">
              <main className="flex-1 transition-opacity duration-300">{children}</main>
              <CharlieAssistant />
            </div>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
