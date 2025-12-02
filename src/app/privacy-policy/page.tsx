'use client'

import Link from "next/link"
import { Shield, Lock, Users, FileText, MapPin, Clock, Mail } from "lucide-react"
import { useCallback, useEffect, useState } from 'react'


export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = useState<string>("")

  // Only render date on client → eliminates hydration mismatch
  useEffect(() => {
    const date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    setCurrentDate(date) // e.g. "2 December 2025"
  }, [])

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "collection", title: "Information Collection" },
    { id: "usage", title: "How Data is Used" },
    { id: "sharing", title: "Data Sharing" },
    { id: "tracking", title: "Cookies & Tracking" },
    { id: "security", title: "Data Security" },
    { id: "rights", title: "User Rights" },
    { id: "changes", title: "Changes to Policy" },
    { id: "contact", title: "Contact Information" },
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
              <Shield className="w-4 h-4 text-primary" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[88px] leading-[96px] tracking-[0%] text-[#110C22] dark:text-white">
              Privacy Policy
            </h1>
            <p className="font-inter font-medium text-[20px] leading-[32px] tracking-[-0.01em] text-[#4F4B5C] dark:text-[#C2C2C2] max-w-3xl">
              Your privacy is important to us. We are committed to protecting your personal information and being transparent about our practices.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Updated: {currentDate || "2 December 2025"}</span>
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
                  <h4 className="font-medium text-foreground mb-3">Our Commitment</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Lock className="w-4 h-4 text-green-500" />
                      <span>Data Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>User Control</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Sections */}
            <div className="lg:col-span-3">
              <div className="space-y-12">

                <section id="introduction" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Introduction
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    This Privacy Policy explains how Kosal IT Solutions collects, uses, and protects your personal information when you use our website, applications, or related services.
                  </p>
                </section>

                <section id="collection" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Information Collection
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We may collect information you provide directly (name, email, payment details) and automatically (cookies, device info, analytics).
                  </p>
                </section>

                <section id="usage" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    How Data is Used
                  </h2>
                  <ul className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2] space-y-2 list-disc list-inside">
                    <li>To provide and improve services</li>
                    <li>To personalize user experience</li>
                    <li>To send updates, notices, and support messages</li>
                    <li>To protect against fraud and abuse</li>
                  </ul>
                </section>

                <section id="sharing" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Data Sharing
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We do not sell your personal data. We may share information with trusted partners (payment processors, analytics providers) or when required by law.
                  </p>
                </section>

                <section id="tracking" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Cookies & Tracking
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can control cookies through browser settings.
                  </p>
                </section>

                <section id="security" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    Data Security
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We use encryption and other safeguards to protect your personal information. However, no system is 100% secure, and users should also take precautions.
                  </p>
                </section>

                <section id="rights" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    User Rights
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    You have the right to access, update, or delete your personal data. Contact us at{" "}
                    <a href="mailto:privacy@kosal.io" className="text-primary hover:underline">
                      privacy@kosal.io
                    </a>{" "}
                    to make a request.
                  </p>
                </section>

                <section id="changes" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Changes to Policy
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date.
                  </p>
                </section>

                <section id="contact" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact Information
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    If you have questions about this Privacy Policy, contact us at{" "}
                    <a href="mailto:privacy@kosal.io" className="text-primary hover:underline">
                      privacy@kosal.io
                    </a>.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/icons/Kosallogo 1.svg" alt="Kosal Logo" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Kosal. All rights reserved. • Committed to your privacy and security.
          </div>
        </div>
      </footer>
    </div>
  )
}