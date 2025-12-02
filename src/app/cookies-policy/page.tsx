'use client'

import Link from "next/link"
import { Cookie, FileText, Shield, BarChart, Settings, Globe, MapPin, Mail } from "lucide-react"
import { useCallback, useEffect, useState } from 'react'


export default function CookiePolicyPage() {
  const [currentDate, setCurrentDate] = useState<string>("")

  // Only run on client → no hydration mismatch
  useEffect(() => {
    const date = new Date().toLocaleDateString('en-GB') // or 'en-US' → consistent format
    setCurrentDate(date)
  }, [])

  const sections = [
    {
      id: "what-cookies",
      title: "What Are Cookies?",
      icon: <Cookie className="w-6 h-6 text-primary" />,
      content:
        "Cookies are small text files stored on your device when you visit our website. They help us recognize your device, remember your preferences, and improve your browsing experience.",
    },
    {
      id: "types",
      title: "Types of Cookies We Use",
      icon: <Shield className="w-6 h-6 text-primary" />,
      content:  
        "We use essential cookies (for login & security), functional cookies (to remember preferences), analytics cookies (for site performance), and advertising cookies (to deliver personalized ads).",
    },
    {
      id: "third-party",
      title: "Third-Party Cookies",
      icon: <BarChart className="w-6 h-6 text-primary" />,
      content:
        "Some cookies are set by third-party providers like Google Analytics or advertising partners to measure traffic and deliver relevant ads.",
    },
    {
      id: "why-cookies",
      title: "Why We Use Cookies",
      icon: <Settings className="w-6 h-6 text-primary" />,
      content:
        "Cookies allow us to provide a smoother experience by keeping you signed in, remembering settings, analyzing usage, and showing personalized content.",
    },
    {
      id: "managing",
      title: "Managing Cookies",
      icon: <Globe className="w-6 h-6 text-primary" />,
      content:
        "You can manage or disable cookies through your browser settings. Please note that disabling essential cookies may affect site functionality.",
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="w-6 h-6 text-primary" />,
      content:
        <>If you have any questions about our Cookie Policy, contact us at <a href="mailto:support@kosal.io" className="text-primary hover:underline">support@kosal.io</a>.</>,
    },
  ]

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/icons/Logo Text.svg" alt="Kosal" className="h-6 block dark:hidden" />
              <img src="/icons/DarkLogo Text.svg" alt="Kosal" className="h-6 hidden dark:block" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cookie className="w-4 h-4 text-primary" />
              <span>Cookie Transparency</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[88px] leading-[96px] tracking-[0%] text-center text-[#110C22] dark:text-[#FFFFFF]">
              Cookie Policy
            </h1>
            <p className="font-inter font-medium text-[20px] leading-[32px] tracking-[-0.01em] text-center text-[#4F4B5C] dark:text-[#C2C2C2] max-w-3xl">
              Learn how we use cookies and how you can manage your preferences.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4" />
                <span>Updated: {currentDate || "2 December 2025"}</span>
                {/* Fallback text prevents hydration flash */}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>219/b, Tiruchendur Main Road, Samathanapuram, Palayamkottai, Tirunelveli</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className="block text-sm text-muted-foreground hover:text-primary py-1 hover:pl-2 transition-all duration-200"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">Cookie Principles</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span>Privacy First</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Settings className="w-4 h-4 text-green-500" />
                      <span>User Choice</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BarChart className="w-4 h-4 text-purple-500" />
                      <span>Clear Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Sections */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="flex flex-col gap-[16px]">
                    <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                      {section.icon}
                      {section.title}
                    </h2>
                    <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/icons/kosallogo 1.svg" alt="Logo" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Kosal. All rights reserved. • Transparent Cookie Practices.
          </div>
        </div>
      </footer>
    </div>
  )
}