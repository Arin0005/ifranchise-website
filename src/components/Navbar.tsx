"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership Team", href: "/about#leadership" },
      { label: "Why iFranchise", href: "/about#why" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Franchise Consulting", href: "/services#consulting" },
      { label: "Brand Expansion", href: "/services#expansion" },
      { label: "Investor Acquisition", href: "/services#investor" },
      { label: "Legal & Compliance", href: "/services#legal" },
      { label: "Marketing & Launch", href: "/services#marketing" },
    ],
  },
  {
    label: "Opportunities",
    href: "/opportunities",
    dropdown: [
      { label: "Browse Sectors", href: "/opportunities" },
      { label: "Investment Guide", href: "/opportunities#guide" },
      { label: "ROI Calculator", href: "/opportunities#roi" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog & News", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Success Stories", href: "/#stories" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const renderNavContent = (isFloating: boolean = false) => (
    <>
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="iFranchise Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-display font-bold text-xl text-primary tracking-tight">
          i<span className="text-secondary">Franchise</span>
        </span>
      </Link>

      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() =>
              item.dropdown &&
              handleMouseEnter(item.label + (isFloating ? "float" : "static"))
            }
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-primary bg-accent dark:text-primary dark:bg-accent"
                  : "text-dark hover:text-primary hover:bg-accent/60 dark:text-gray-200 dark:hover:text-primary dark:hover:bg-accent/30"
              }`}
            >
              {item.label}
              {item.dropdown && (
                <motion.span
                  animate={{
                    rotate:
                      activeDropdown ===
                      item.label + (isFloating ? "float" : "static")
                        ? 180
                        : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown size={14} />
                </motion.span>
              )}
            </Link>

            <AnimatePresence>
              {item.dropdown &&
                activeDropdown ===
                  item.label + (isFloating ? "float" : "static") && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={() =>
                      handleMouseEnter(
                        item.label + (isFloating ? "float" : "static"),
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 pt-3 min-w-[200px]"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-[0_12px_40px_rgba(45,12,87,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 overflow-hidden py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-dark dark:text-gray-200 hover:bg-accent hover:text-primary dark:hover:bg-gray-800 transition-colors font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-2 ml-2 shrink-0">
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-xl bg-accent text-primary transition-colors hover:bg-lavender dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 h-10 w-10 flex items-center justify-center shrink-0"
          aria-label="Toggle Dark Mode"
        >
          {mounted ? (
            theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />
          ) : (
            <div className="w-[18px] h-[18px]" />
          )}
        </button> */}
        <Link
          href="/apply"
          className="btn-glow bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5"
        >
          Apply Now
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden md:block sticky top-0 z-50 h-[73px]">
        <motion.header
          className={`absolute left-0 right-0 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            scrolled
              ? "top-4 bg-transparent px-4 2xl:px-0"
              : "top-0 w-full px-8 py-4 bg-white dark:bg-[#121212] shadow-sm border-b border-gray-100 dark:border-gray-800"
          }`}
          initial={false}
        >
          <div
            className={`flex items-center justify-between w-full transition-all duration-500 mx-auto ${
              scrolled
                ? "max-w-6xl px-6 py-3 nav-floating bg-white/95 dark:bg-gray-900/95 shadow-[0_8px_32px_rgba(45,12,87,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/60 dark:border-gray-700/60 rounded-2xl"
                : "max-w-7xl"
            }`}
          >
            {renderNavContent(scrolled)}
          </div>
        </motion.header>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-100 dark:border-gray-800 shadow-sm relative">
        <div className="flex items-center justify-between px-4 py-3.5">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="iFranchise Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg text-primary tracking-tight">
              i<span className="text-secondary">Franchise</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-primary rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 overflow-hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#121212] shadow-xl"
            >
              <div className="px-4 pt-6 pb-4 max-h-[85vh] overflow-y-auto">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/logo.svg"
                      alt="iFranchise Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center border-b border-gray-50 dark:border-gray-800/50 last:border-none">
                        <Link
                          href={item.href}
                          className="flex-1 py-3 px-3 text-sm font-semibold text-dark dark:text-gray-200 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() =>
                              setMobileDropdown(
                                mobileDropdown === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className="p-3 text-secondary transition-colors"
                          >
                            <motion.span
                              animate={{
                                rotate: mobileDropdown === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="block"
                            >
                              <FiChevronDown size={16} />
                            </motion.span>
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {item.dropdown && mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-accent/30 rounded-xl mt-1"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-2.5 px-6 text-sm font-medium text-secondary hover:text-primary transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <div className="pt-6 flex flex-col gap-3">
                    {/* <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-accent text-primary font-semibold transition-colors hover:bg-lavender dark:bg-gray-800 dark:text-gray-200"
                    >
                      {mounted ? (
                        theme === "dark" ? (
                          <>
                            <FiSun size={18} /> Light Mode
                          </>
                        ) : (
                          <>
                            <FiMoon size={18} /> Dark Mode
                          </>
                        )
                      ) : (
                        <div className="h-5" />
                      )}
                    </button> */}
                    <Link
                      href="/apply"
                      className="block w-full text-center bg-primary text-white text-sm font-semibold px-4 py-3.5 rounded-xl hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
                    >
                      Start Your Franchise Journey
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
