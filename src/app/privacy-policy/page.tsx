import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Eye, Lock, Users, FileText, MapPin, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kosal Privacy Policy",
  description: "Learn about how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
              KOSAL
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className="text-5xl font-bold text-foreground">Privacy Policy</h1>
            </div>
            <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
              Your privacy is important to us. We committed to protecting your personal information and being
              transparent about our practices.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
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

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-primary" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary py-1 hover:pl-2 transition-all duration-200"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                {/* Trust indicators */}
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

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">

                {/* Introduction */}
                <section id="introduction">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Introduction
                  </h2>
                  <p>
                    This Privacy Policy explains how Your Company, Inc. (“we”, “our”, or “us”) collects, uses, and protects your personal information when you use our website, applications, or related services. 
                  </p>
                </section>

                {/* Information Collection */}
                <section id="collection">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Information Collection
                  </h2>
                  <p>We may collect information you provide directly (name, email, payment details) and automatically (cookies, device info, analytics).</p>
                </section>

                {/* How Data is Used */}
                <section id="usage">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    How Data is Used
                  </h2>
                  <ul>
                    <li>To provide and improve services</li>
                    <li>To personalize user experience</li>
                    <li>To send updates, notices, and support messages</li>
                    <li>To protect against fraud and abuse</li>
                  </ul>
                </section>

                {/* Data Sharing */}
                <section id="sharing">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Data Sharing
                  </h2>
                  <p>
                    We do not sell your personal data. We may share information with trusted partners (payment processors, analytics providers) or when required by law.
                  </p>
                </section>

                {/* Cookies & Tracking */}
                <section id="tracking">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Cookies & Tracking
                  </h2>
                  <p>
                    We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can control cookies through browser settings.
                  </p>
                </section>

                {/* Data Security */}
                <section id="security">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Data Security
                  </h2>
                  <p>
                    We use encryption and other safeguards to protect your personal information. However, no system is 100% secure, and users should also take precautions.
                  </p>
                </section>

                {/* User Rights */}
                <section id="rights">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    User Rights
                  </h2>
                  <p>
                    You have the right to access, update, or delete your personal data. Contact us at{" "}
                    <a href="mailto:privacy@yourcompany.com" className="text-primary hover:underline">
                      privacy@yourcompany.com
                    </a>{" "}
                    to make a request.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section id="changes">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Changes to Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date.
                  </p>
                </section>

                {/* Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact Information
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy, contact us at{" "}
                    <a href="mailto:privacy@yourcompany.com" className="text-primary hover:underline">
                      privacy@yourcompany.com
                    </a>.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/icons/Kosallogo 1.svg" alt="Privacy Icon" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Your Company, Inc. All rights reserved. • Committed to your privacy and security.
          </div>
        </div>
      </footer>
    </div>
  )
}
