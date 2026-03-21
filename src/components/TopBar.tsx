"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-1.5 hover:text-lavender transition-colors"
          >
            <FiPhone size={13} />
            <span>+91 12345 67890</span>
          </a>
          <a
            href="mailto:info@ifranchise.in"
            className="flex items-center gap-1.5 hover:text-lavender transition-colors"
          >
            <FiMail size={13} />
            <span>info@ifranchise.in</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-accent/80">
          <FiMapPin size={13} />
          <span>Mumbai, Maharashtra, India</span>
        </div>
      </div>
    </div>
  );
}
