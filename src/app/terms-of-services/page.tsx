'use client'

import Link from "next/link"
import { FileText, Users, Lock, Scale, Gavel, Ban, Book, MapPin, Mail, Shield } from "lucide-react"
import { useCallback, useEffect, useState } from 'react'


export default function TermsOfServicePage() {
  const [currentDate, setCurrentDate] = useState<string>("")

  // Safely set date only on client — prevents hydration mismatch
  useEffect(() => {
    const date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    setCurrentDate(date) // e.g. "2 December 2025"
  }, [])

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Use of Services" },
    { id: "accounts", title: "User Accounts" },
    { id: "ip", title: "Intellectual Property" },
    { id: "conduct", title: "User Conduct" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "disputes", title: "Dispute Resolution" },
    { id: "law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Us" },
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
              <span>Trusted & Transparent</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-center">
            <h1 className="font-manrope font-bold text-[88px] leading-[96px] tracking-[0%] text-[#110C22] dark:text-white">
              Terms of Service
            </h1>
            <p className="font-inter font-medium text-[20px] leading-[32px] tracking-[-0.01em] text-[#4F4B5C] dark:text-[#C2C2C2] max-w-3xl">
              Please review these Terms of Service carefully before using our platform. By accessing our services, you agree to these rules and responsibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4" />
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
                  <h4 className="font-medium text-foreground mb-3">Our Principles</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>User First</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Scale className="w-4 h-4 text-green-500" />
                      <span>Fair Practices</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Gavel className="w-4 h-4 text-purple-500" />
                      <span>Legal Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">

                <section id="acceptance" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Acceptance of Terms
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    By accessing our website or services, you agree to comply with these Terms of Service. If you do not agree, you must discontinue use immediately.
                  </p>
                </section>

                <section id="services" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Use of Services
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    You agree to use our services lawfully and responsibly, in compliance with all applicable laws and regulations.
                  </p>
                </section>

                <section id="accounts" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    User Accounts
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    When creating an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your credentials and activities.
                  </p>
                </section>

                <section id="ip" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Intellectual Property
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    All site content is protected by copyright and intellectual property rights. Unauthorized use is prohibited.
                  </p>
                </section>

                <section id="conduct" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Ban className="w-6 h-6 text-primary" />
                    User Conduct
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    Users must not misuse the platform by posting harmful, illegal, or abusive content.
                  </p>
                </section>

                <section id="liability" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    Limitation of Liability
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We are not responsible for damages or losses arising from your use of our services, to the fullest extent permitted by law.
                  </p>
                </section>

                <section id="termination" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Ban className="w-6 h-6 text-primary" />
                    Termination
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We reserve the right to suspend or terminate accounts that violate these Terms.
                  </p>
                </section>

                <section id="disputes" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    Dispute Resolution
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    Disputes will be resolved under applicable arbitration or court procedures in your jurisdiction.
                  </p>
                </section>

                <section id="law" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Book className="w-6 h-6 text-primary" />
                    Governing Law
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    These Terms are governed by the laws of India.
                  </p>
                </section>

                <section id="changes" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Changes to Terms
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    We may update these Terms of Service occasionally. Any changes will be posted with a new “Effective” date.
                  </p>
                </section>

                <section id="contact" className="flex flex-col gap-[16px]">
                  <h2 className="font-manrope font-bold text-[26px] leading-[24px] tracking-[0] text-[#110C22] dark:text-white flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact Us
                  </h2>
                  <p className="font-manrope font-medium text-[16px] leading-[24px] tracking-[0] text-[#4F4B5C] dark:text-[#C2C2C2]">
                    For questions regarding these Terms, please email{" "}
                    <a href="mailto:support@kosal.io" className="text-primary hover:underline">
                      support@kosal.io
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
            <img src="/icons/Kosallogo 1.svg" alt="Logo" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Kosal. All rights reserved. • Fair & Transparent Services.
          </div>
        </div>
      </footer>
    </div>
  )
}