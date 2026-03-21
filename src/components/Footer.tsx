import Link from "next/link";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Franchise Consulting", href: "/services#consulting" },
  { label: "Brand Expansion", href: "/services#expansion" },
  { label: "Investor Acquisition", href: "/services#investor" },
  { label: "Legal & Compliance", href: "/services#legal" },
  { label: "Marketing & Launch", href: "/services#marketing" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 bg-white/5 p-2 rounded-xl inline-flex w-max">
              <div className="relative w-10 h-10 flex items-center justify-center filter brightness-0 invert">
                <Image src="/logo.svg" alt="iFranchise Logo" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight pr-2">
                i<span className="text-lavender">Franchise</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              India&apos;s trusted franchise consulting partner helping brands
              scale nationally through strategic planning, investor acquisition,
              and complete franchise support.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FiLinkedin, href: "#" },
                { icon: FiTwitter, href: "#" },
                { icon: FiFacebook, href: "#" },
                { icon: FiInstagram, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 hover:-translate-y-1 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-lavender mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white hover:pl-1 text-sm transition-all duration-200 font-medium inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-lavender mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white hover:pl-1 text-sm transition-all duration-200 font-medium inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-lavender mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors font-medium group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                    <FiPhone size={14} />
                  </div>
                  <span className="mt-1">+91 12345 67890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ifranchise.in"
                  className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors font-medium group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                    <FiMail size={14} />
                  </div>
                  <span className="mt-1">info@ifranchise.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <FiMapPin size={14} />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    Level 12, Business Bay Tower,
                    <br />
                    BKC, Mumbai – 400051
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
          <p>© {new Date().getFullYear()} iFranchise. All rights reserved.</p>
          <p className="text-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            Concept website designed for iFranchise Internship Evaluation
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
