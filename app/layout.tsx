import { ThemeProvider } from "@/components/providers/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import MainNav from "@/components/main-nav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Heatmap Tracker",
  description: "A composable heatmap tracker component",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='36' height='36' rx='8' fill='%236EE7B7'/%3E%3Cpath d='M18 12C18.5523 12 19 11.5523 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 11.5523 17.4477 12 18 12Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 12C25.5523 12 26 11.5523 26 11C26 10.4477 25.5523 10 25 10C24.4477 10 24 10.4477 24 11C24 11.5523 24.4477 12 25 12Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 19C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17C24.4477 17 24 17.4477 24 18C24 18.5523 24.4477 19 25 19Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 19C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 26C18.5523 26 19 25.5523 19 25C19 24.4477 18.5523 24 18 24C17.4477 24 17 24.4477 17 25C17 25.5523 17.4477 26 18 26Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 26C25.5523 26 26 25.5523 26 25C26 24.4477 25.5523 24 25 24C24.4477 24 24 24.4477 24 25C24 25.5523 24.4477 26 25 26Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 26C11.5523 26 12 25.5523 12 25C12 24.4477 11.5523 24 11 24C10.4477 24 10 24.4477 10 25C10 25.5523 10.4477 26 11 26Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='36' height='36' rx='8' fill='%23065F46'/%3E%3Cpath d='M18 12C18.5523 12 19 11.5523 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 11.5523 17.4477 12 18 12Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 12C25.5523 12 26 11.5523 26 11C26 10.4477 25.5523 10 25 10C24.4477 10 24 10.4477 24 11C24 11.5523 24.4477 12 25 12Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 19C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17C24.4477 17 24 17.4477 24 18C24 18.5523 24.4477 19 25 19Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 19C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 26C18.5523 26 19 25.5523 19 25C19 24.4477 18.5523 24 18 24C17.4477 24 17 24.4477 17 25C17 25.5523 17.4477 26 18 26Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 26C25.5523 26 26 25.5523 26 25C26 24.4477 25.5523 24 25 24C24.4477 24 24 24.4477 24 25C24 25.5523 24.4477 26 25 26Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 26C11.5523 26 12 25.5523 12 25C12 24.4477 11.5523 24 11 24C10.4477 24 10 24.4477 10 25C10 25.5523 10.4477 26 11 26Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geistMono.variable, geistSans.variable, inter.variable)}
    >
      <body className="group/body overscroll-none font-mono antialiased [--main-nav-height:calc(var(--spacing)*14)]">
        <TooltipProvider>
          <ThemeProvider>
            <div data-slot="layout" className="flex flex-col">
              <header className="sticky top-0 z-50 w-full bg-background">
                <div className="3xl:fixed:px-0">
                  <div className="3xl:fixed:container flex h-(--main-nav-height) items-center">
                    <MainNav />
                  </div>
                </div>
              </header>

              <main className="flex flex-1 flex-col">{children}</main>
            </div>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
