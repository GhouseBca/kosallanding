import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Users, Lock, Scale, Gavel, Ban, Book, MapPin, Mail, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Kosal Terms of Service",
  description: "Review the Terms of Service for using our platform, including rules, user responsibilities, and legal agreements.",
}

export default function TermsOfServicePage() {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
              KOSAL
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" />
              <span>Trusted & Transparent</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/Kosallogo 1.svg" alt="Terms Icon" className="w-8 h-8" />
              <h1 className="text-5xl font-bold text-foreground">Terms of Service</h1>
            </div>
            {/* CHANGED LINE: text-secondary instead of text-black */}
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Please review these Terms of Service carefully before using our platform. By accessing our services, you
              agree to these rules and responsibilities.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                <span>Updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>219/b,Tiruchendur Main Road, Samathanapuram, Palayamkottai, Tirunelveli</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-accent py-1 hover:pl-2 transition-all duration-200"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                {/* Trust indicators */}
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
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
                <section id="acceptance">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Acceptance of Terms
                  </h2>
                  <p>
                    By accessing our website or services, you agree to comply with these Terms of Service. If you do not
                    agree, you must discontinue use immediately.
                  </p>
                </section>

                <section id="services">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-accent" />
                    Use of Services
                  </h2>
                  <p>
                    You agree to use our services lawfully and responsibly, in compliance with all applicable laws and
                    regulations.
                  </p>
                </section>

                <section id="accounts">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-accent" />
                    User Accounts
                  </h2>
                  <p>
                    When creating an account, you must provide accurate information. You are responsible for maintaining
                    the confidentiality of your credentials and activities.
                  </p>
                </section>

                <section id="ip">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Intellectual Property
                  </h2>
                  <p>
                    All site content is protected by copyright and intellectual property rights. Unauthorized use is
                    prohibited.
                  </p>
                </section>

                <section id="conduct">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Ban className="w-6 h-6 text-accent" />
                    User Conduct
                  </h2>
                  <p>Users must not misuse the platform by posting harmful, illegal, or abusive content.</p>
                </section>

                <section id="liability">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-accent" />
                    Limitation of Liability
                  </h2>
                  <p>
                    We are not responsible for damages or losses arising from your use of our services, to the fullest
                    extent permitted by law.
                  </p>
                </section>

                <section id="termination">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Ban className="w-6 h-6 text-accent" />
                    Termination
                  </h2>
                  <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
                </section>

                <section id="disputes">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Gavel className="w-6 h-6 text-accent" />
                    Dispute Resolution
                  </h2>
                  <p>Disputes will be resolved under applicable arbitration or court procedures in your jurisdiction.</p>
                </section>

                <section id="law">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Book className="w-6 h-6 text-accent" />
                    Governing Law
                  </h2>
                  <p>These Terms are governed by the laws of your country/state of operation.</p>
                </section>

                <section id="changes">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Changes to Terms
                  </h2>
                  <p>
                    We may update these Terms of Service occasionally. Any changes will be posted with a new “Effective”
                    date.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-accent" />
                    Contact Us
                  </h2>
                  <p>
                    For questions regarding these Terms, please email{" "}
                    <a href="mailto:support@yourcompany.com" className="text-primary hover:underline">
                      [support@yourcompany.com](mailto:support@yourcompany.com)
                    </a>
                    .
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
            <img src="/Kosallogo 1.svg" alt="Logo" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Your Company, Inc. All rights reserved. • Fair & Transparent Services.
          </div>
        </div>
      </footer>
    </div>
  )
}
