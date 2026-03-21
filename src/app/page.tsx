"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiAward,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// ---------- Hero ----------
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={heroRef} className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/85 to-primary/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender animate-pulse" />
              India&apos;s #1 Franchise Consulting Partner
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-5 drop-shadow-lg"
          >
            Scale Your Brand.
            <br />
            <span className="text-lavender">Franchise Smarter.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium drop-shadow"
          >
            Expert-led franchise development that turns ambitious brands into
            nationwide networks. Strategy, investors, and execution — all in one
            partner.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button href="/apply" size="lg" className="shadow-lg shadow-black/20">
              Start Your Journey
              <FiArrowRight className="ml-2" />
            </Button>
            <Button href="/opportunities" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
              Explore Opportunities
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { val: "500+", label: "Brands Scaled" },
              { val: "28+", label: "States Covered" },
              { val: "₹200Cr+", label: "Investments Facilitated" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-2xl sm:text-3xl text-white drop-shadow-md">
                  {s.val}
                </p>
                <p className="text-lavender text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center pt-1 backdrop-blur-sm">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

// ---------- Trusted By ----------
const brands = [
  "Subway", "Domino's", "VLCC", "Chai Sutta Bar", "Lenskart",
  "Jockey", "FirstCry", "Dr. Lal PathLabs", "Amul", "Wow! Momo",
  "Subway", "Domino's", "VLCC", "Chai Sutta Bar", "Lenskart",
  "Jockey", "FirstCry", "Dr. Lal PathLabs", "Amul", "Wow! Momo",
];

function TrustedBy() {
  return (
    <SectionWrapper tight className="bg-accent/40 border-y border-primary/5">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-primary/60 mb-8">
        Trusted by Category-Leading Brands
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-12 w-max">
          {brands.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-display text-lg font-bold text-primary/40 hover:text-primary transition-colors whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ---------- Why Choose ----------
const features = [
  {
    icon: FiTrendingUp,
    title: "Proven Growth Strategy",
    desc: "Data-driven franchise blueprints tailored to your brand's expansion goals and market potential.",
  },
  {
    icon: FiShield,
    title: "Legal & Compliance Ready",
    desc: "End-to-end legal documentation, FDD preparation, and compliance support across all Indian states.",
  },
  {
    icon: FiUsers,
    title: "Investor Network Access",
    desc: "Access to 10,000+ pre-qualified franchise investors actively seeking new opportunities.",
  },
  {
    icon: FiAward,
    title: "Award-Winning Execution",
    desc: "Ranked India's Top Franchise Consultant for 4 consecutive years by Franchise India Magazine.",
  },
];

function WhyChoose() {
  return (
    <SectionWrapper id="why" className="relative bg-gradient-to-b from-accent/5 to-accent/20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative z-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-accent text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Why Partner With Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-dark">
            Why Choose <span className="text-gradient">iFranchise</span>
          </h2>
          <p className="text-secondary/80 font-medium mt-5 max-w-xl mx-auto">
            From blueprint to expansion — we deliver end-to-end franchise solutions designed for serious growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="card-hover bg-white border border-accent/60 rounded-2xl p-8 shadow-[0_4px_24px_rgba(45,12,87,0.04)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-white/50 border border-accent/50 flex items-center justify-center mb-6 shadow-sm">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-dark text-lg mb-3">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

// ---------- Opportunities ----------
const sectors = [
  { name: "Food & Beverage", range: "₹5L – ₹50L", count: "120+ brands", color: "from-orange-50 to-orange-100", border: "border-orange-200" },
  { name: "Education & EdTech", range: "₹3L – ₹25L", count: "80+ brands", color: "from-blue-50 to-blue-100", border: "border-blue-200" },
  { name: "Health & Wellness", range: "₹8L – ₹80L", count: "65+ brands", color: "from-green-50 to-green-100", border: "border-green-200" },
  { name: "Retail & Fashion", range: "₹10L – ₹1Cr", count: "95+ brands", color: "from-pink-50 to-pink-100", border: "border-pink-200" },
  { name: "Beauty & Grooming", range: "₹5L – ₹40L", count: "70+ brands", color: "from-purple-50 to-purple-100", border: "border-purple-200" },
  { name: "Technology & IT", range: "₹2L – ₹20L", count: "45+ brands", color: "from-sky-50 to-sky-100", border: "border-sky-200" },
];

function Opportunities() {
  return (
    <SectionWrapper id="opportunities" className="bg-lavender/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-white text-secondary text-xs font-bold uppercase tracking-widest rounded-full shadow-sm mb-4">
            Franchise Categories
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-dark">
            Explore <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-gray-500 font-medium mt-5 max-w-xl mx-auto">
            Browse curated franchise opportunities across high-growth sectors with proven ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <motion.div key={s.name} variants={fadeUp}>
              <Link
                href="/opportunities"
                className={`group flex items-center justify-between rounded-2xl p-6 bg-gradient-to-br ${s.color} border ${s.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div>
                  <h3 className="font-display font-bold text-dark text-lg mb-1">
                    {s.name}
                  </h3>
                  <p className="text-gray-600 text-xs font-medium mb-3">{s.count}</p>
                  <span className="inline-block bg-white text-primary font-bold text-xs px-2.5 py-1 rounded-md shadow-sm">
                    {s.range}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiChevronRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="text-center mt-12">
          <Button href="/opportunities" variant="outline" size="lg" className="bg-white">
            View All Opportunities
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

// ---------- How It Works ----------
const steps = [
  { num: "01", title: "Consultation", desc: "Book a free strategy call with experts." },
  { num: "02", title: "Assessment", desc: "Audit brand readiness & plan expansion." },
  { num: "03", title: "Matching", desc: "Connect with verified serious investors." },
  { num: "04", title: "Onboarding", desc: "Legal docs, agreements & full support." },
  { num: "05", title: "Scale", desc: "Go live with marketing & consulting." },
];

function HowItWorks() {
  return (
    <SectionWrapper id="how" className="bg-gradient-to-b from-accent/20 to-lavender/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-white border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm">
            Our Process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-dark">
            How It <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-accent via-lavender to-accent z-0 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} custom={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white text-primary font-display font-bold text-2xl flex items-center justify-center mb-6 shadow-xl ring-4 ring-accent tilt-hover transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-dark mb-2 text-base">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

// ---------- Testimonials ----------
const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Founder, TastyBite Foods",
    text: "iFranchise helped us go from 2 outlets to 45 in just 18 months. Their investor network is unmatched.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, EduSpark Academy",
    text: "The entire franchising journey was smooth. From legal compliance to franchise partner recruitment — professional throughout.",
    rating: 5,
  },
  {
    name: "Amit Kulkarni",
    role: "MD, FitZone Health Clubs",
    text: "We scaled from Maharashtra to 8 states in one year. iFranchise's strategic planning made it possible.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <SectionWrapper className="bg-primary relative overflow-hidden" id="stories">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] opacity-60" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-purple-900 rounded-full blur-[120px] opacity-60" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="relative z-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-white/10 border border-white/20 text-lavender font-bold text-xs uppercase tracking-widest rounded-full mb-4 backdrop-blur-sm">
            Success Stories
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-2xl shadow-black/20"
            >
              <div className="flex gap-1.5 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} size={16} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 font-medium italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-lavender text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

// ---------- CTA Banner ----------
function CTABanner() {
  return (
    <SectionWrapper tight className="bg-accent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
        className="text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-3xl md:text-4xl text-primary mb-4"
        >
          Ready to Franchise Your Brand?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-secondary/80 font-medium mb-8 max-w-lg mx-auto">
          Join 500+ brands that have successfully scaled with iFranchise. Book your free strategy session today.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <Button href="/apply" size="lg">
            Apply Now <FiArrowRight className="ml-2" />
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="bg-white">
            Talk to an Expert
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

// ---------- Page ----------
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChoose />
      <Opportunities />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
