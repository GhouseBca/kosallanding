import type { Metadata } from "next"
import Link from "next/link"
import { Cookie, Shield, BarChart, Settings, Globe, MapPin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kosal Cookie Policy",
  description: "Learn how we use cookies and how you can manage your preferences.",
}

export default function CookiePolicyPage() {
  const sections = [
    {
      id: "what-cookies",
      title: "What Are Cookies?",
      icon: <Cookie className="w-6 h-6 text-accent" />,
      content:
        "Cookies are small text files stored on your device when you visit our website. They help us recognize your device, remember your preferences, and improve your browsing experience.",
    },
    {
      id: "types",
      title: "Types of Cookies We Use",
      icon: <Shield className="w-6 h-6 text-accent" />,
      content:
        "We use essential cookies (for login & security), functional cookies (to remember preferences), analytics cookies (for site performance), and advertising cookies (to deliver personalized ads).",
    },
    {
      id: "third-party",
      title: "Third-Party Cookies",
      icon: <BarChart className="w-6 h-6 text-accent" />,
      content:
        "Some cookies are set by third-party providers like Google Analytics or advertising partners to measure traffic and deliver relevant ads.",
    },
    {
      id: "why-cookies",
      title: "Why We Use Cookies",
      icon: <Settings className="w-6 h-6 text-accent" />,
      content:
        "Cookies allow us to provide a smoother experience by keeping you signed in, remembering settings, analyzing usage, and showing personalized content.",
    },
    {
      id: "managing",
      title: "Managing Cookies",
      icon: <Globe className="w-6 h-6 text-accent" />,
      content:
        "You can manage or disable cookies through your browser settings. Please note that disabling essential cookies may affect site functionality.",
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="w-6 h-6 text-accent" />,
      content:
        <>If you have any questions about our Cookie Policy, contact us at <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>.</>,
    },
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
              <Cookie className="w-4 h-4 text-accent" />
              <span>Cookie Transparency</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-card via-background to-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/Kosallogo 1.svg" alt="Cookie Icon" className="w-8 h-8" />
              <h1 className="text-5xl font-bold text-foreground">Cookie Policy</h1>
            </div>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Learn how we use cookies and how you can manage your preferences.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4" />
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
                  <Cookie className="w-4 h-4 text-accent" />
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
                {/* Indicators */}
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

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      {section.icon}
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground">{section.content}</p>
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
            <img src="/Kosallogo 1.svg" alt="Logo" className="w-5 h-5" />
            <span className="font-medium text-foreground">Kosal IT Solutions</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Your Company, Inc. All rights reserved. • Transparent Cookie Practices.
          </div>
        </div>
      </footer>
    </div>
  )
}
