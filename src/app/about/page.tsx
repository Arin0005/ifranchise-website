"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FiTarget, FiEye, FiAward, FiTrendingUp, FiUsers, FiGlobe } from "react-icons/fi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { val: "500+", label: "Brands Scaled" },
  { val: "12+", label: "Years of Expertise" },
  { val: "28", label: "States Covered" },
  { val: "₹200Cr+", label: "Investments Facilitated" },
  { val: "10,000+", label: "Franchise Partners" },
  { val: "98%", label: "Client Satisfaction" },
];

const trust = [
  { icon: FiAward, title: "Industry Recognized", desc: "Ranked #1 Franchise Consultant by Franchise India for 4 years." },
  { icon: FiUsers, title: "Expert Team", desc: "50+ dedicated franchise specialists, legal experts, and marketing professionals." },
  { icon: FiGlobe, title: "Pan-India Network", desc: "Established presence across 28 states with on-ground support teams." },
  { icon: FiTrendingUp, title: "Proven Results", desc: "500+ brands scaled. Average franchise time-to-market reduced by 40%." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=70')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-lavender mb-4 block">
              About iFranchise
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
              Empowering Brands to Scale with Confidence
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-lg">
              Since 2012, iFranchise has been the trusted growth partner for entrepreneurs and businesses looking to build resilient franchise networks across India.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <SectionWrapper id="story">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Our Story</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-5">
              From a Vision to <span className="text-gradient">India&apos;s Leading</span> Franchise Consultancy
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Founded in 2012 by seasoned entrepreneurs and business strategists, iFranchise was born from a simple belief: every great brand deserves the right partner to scale. We saw too many promising businesses fail to expand due to lack of structured systems, investor access, and expertise.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Today, with a team of 50+ specialists and a network spanning 28 states, we&apos;ve become the go-to partner for brands seeking sustainable, profitable franchise growth.
            </p>
            <Button href="/apply">Start Your Journey</Button>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-accent">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=75"
                alt="iFranchise team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark">
              Mission &amp; <span className="text-gradient">Vision</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <FiTarget size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-dark mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To democratize business growth by making franchise development accessible, transparent, and successful for every brand — from startups to established enterprises — across India and beyond.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-primary rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <FiEye size={22} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the most trusted franchise ecosystem in South Asia — where brands grow confidently, investors thrive, and franchise partners build lasting businesses that create employment and value.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Leadership</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark">
              A Message from <span className="text-gradient">Our Founders</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto bg-accent/50 rounded-2xl p-8 md:p-12 text-center border border-accent">
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
              RB
            </div>
            <blockquote className="text-dark/80 text-lg leading-relaxed italic mb-6">
              &ldquo;We built iFranchise because we knew the franchise model could transform India&apos;s business landscape. Every brand we scale, every investor we empower, brings us closer to that vision. We are not just consultants — we are growth partners for life.&rdquo;
            </blockquote>
            <p className="font-display font-semibold text-primary text-base">Rohit Bhatia</p>
            <p className="text-secondary text-sm">Co-Founder & CEO, iFranchise</p>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Why Trust */}
      <SectionWrapper className="bg-gray-50" id="why">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark">
              Why Brands <span className="text-gradient">Trust Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <t.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2 text-sm">{t.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-primary">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="font-display font-bold text-3xl text-white mb-1">{s.val}</p>
                <p className="text-lavender text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
