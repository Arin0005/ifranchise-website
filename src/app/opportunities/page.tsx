"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  FiSearch,
  FiChevronRight,
  FiFilter,
  FiDollarSign,
} from "react-icons/fi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const categories = [
  "All Sectors",
  "Food & Beverage",
  "Retail",
  "Education",
  "Healthcare",
  "Automotive",
  "Beauty & Salons",
];

const franchises = [
  {
    id: 1,
    name: "Burger Singh",
    category: "Food & Beverage",
    investment: "₹30L - ₹50L",
    area: "1000 - 1500 sq.ft",
    roi: "18-24 Months",
    tag: "Hot",
    bg: "from-orange-50 to-orange-100",
  },
  {
    id: 2,
    name: "Lenskart",
    category: "Retail & Fashion",
    investment: "₹25L - ₹40L",
    area: "500 - 800 sq.ft",
    roi: "15-20 Months",
    tag: "Premium",
    bg: "from-blue-50 to-blue-100",
  },
  {
    id: 3,
    name: "EuroKids",
    category: "Education",
    investment: "₹12L - ₹20L",
    area: "2000 - 3000 sq.ft",
    roi: "24-30 Months",
    tag: "Steady",
    bg: "from-green-50 to-green-100",
  },
  {
    id: 4,
    name: "Apollo Pharmacy",
    category: "Healthcare",
    investment: "₹15L - ₹25L",
    area: "300 - 500 sq.ft",
    roi: "12-18 Months",
    tag: "High ROI",
    bg: "from-teal-50 to-teal-100",
  },
  {
    id: 5,
    name: "Jawed Habib",
    category: "Beauty & Salons",
    investment: "₹20L - ₹30L",
    area: "800 - 1200 sq.ft",
    roi: "18-24 Months",
    tag: "",
    bg: "from-purple-50 to-purple-100",
  },
  {
    id: 6,
    name: "Chai Sutta Bar",
    category: "Food & Beverage",
    investment: "₹10L - ₹15L",
    area: "200 - 400 sq.ft",
    roi: "10-15 Months",
    tag: "Trending",
    bg: "from-red-50 to-red-100",
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-primary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-lavender text-xs font-bold uppercase tracking-widest mb-6"
            >
              Browse Franchises
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
            >
              Find Your Perfect Franchise Investment
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto font-medium"
            >
              Explore 500+ verified franchise opportunities across multiple
              sectors, curated for high ROI and sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 shrink-0 space-y-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <FiFilter className="text-primary" />
                <h3 className="font-display font-bold text-lg text-dark">
                  Filters
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-dark mb-3">
                    Categories
                  </h4>
                  <ul className="space-y-2.5">
                    {categories.map((c, i) => (
                      <li key={c} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={`cat-${i}`}
                          className="rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                          defaultChecked={i === 0}
                        />
                        <label
                          htmlFor={`cat-${i}`}
                          className="text-sm font-medium text-gray-600 cursor-pointer"
                        >
                          {c}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-dark mb-3">
                    Investment Range
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Under ₹10L",
                      "₹10L - ₹25L",
                      "₹25L - ₹50L",
                      "₹50L - ₹1Cr",
                      "Above ₹1Cr",
                    ].map((r, i) => (
                      <li key={r} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={`range-${i}`}
                          className="rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                        />
                        <label
                          htmlFor={`range-${i}`}
                          className="text-sm font-medium text-gray-600 cursor-pointer"
                        >
                          {r}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-dark font-medium">
                <span className="font-bold text-primary">500+</span>{" "}
                opportunities found
              </p>
              <div className="relative w-full sm:w-72">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {franchises.map((f) => (
                <motion.div key={f.id} variants={fadeUp} className="group">
                  <Link
                    href="/apply"
                    className="block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.bg} border border-white shadow-sm flex items-center justify-center font-bold text-lg text-primary`}
                      >
                        {f.name.charAt(0)}
                      </div>
                      {f.tag && (
                        <span className="px-3 py-1 bg-accent/50 text-primary text-xs font-bold rounded-full">
                          {f.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl text-dark mb-1 group-hover:text-primary transition-colors">
                      {f.name}
                    </h3>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-5">
                      {f.category}
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm mb-6">
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Investment</p>
                        <p className="font-bold text-dark flex items-center gap-1">
                          <FiDollarSign className="text-primary" />{" "}
                          {f.investment}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Area Req.</p>
                        <p className="font-bold text-dark">{f.area}</p>
                      </div>
                      <div className="col-span-2 pt-3 border-t border-gray-100">
                        <p className="text-gray-400 text-xs mb-1">
                          Expected ROI
                        </p>
                        <p className="font-bold text-primary">{f.roi}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-primary font-semibold text-sm group-hover:text-secondary">
                      Apply Now{" "}
                      <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="bg-white">
                Load More Franchises
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
