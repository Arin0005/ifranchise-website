"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FiArrowRight } from "react-icons/fi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    id: "consulting",
    num: "01",
    title: "Franchise Consulting",
    subtitle: "End-to-End Franchise Development",
    desc: "We design scalable, investor-ready franchise models tailored to your brand DNA. From operations manual to territory mapping — we do it all.",
    features: [
      "Franchise Model Design",
      "Operations Manual Creation",
      "Territory Mapping & Pricing",
      "Franchise Fee Structuring",
      "FDD Preparation Guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=75",
    flip: false,
  },
  {
    id: "expansion",
    num: "02",
    title: "Brand Expansion Strategy",
    subtitle: "Strategic Market Penetration",
    desc: "Our data-driven expansion strategy ensures you enter new markets with confidence, backed by deep market research and consumer insights.",
    features: [
      "Market Feasibility Studies",
      "City & State Prioritization",
      "Competitive Benchmarking",
      "Pilot to Scale Roadmap",
      "Brand Positioning Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=75",
    flip: true,
  },
  {
    id: "investor",
    num: "03",
    title: "Investor Acquisition",
    subtitle: "Access a Network of 10,000+ Investors",
    desc: "We connect your brand with pre-qualified, serious franchise investors from our exclusive database, reducing your time-to-franchise by 60%.",
    features: [
      "Investor Lead Generation",
      "Franchise Pitch Deck Creation",
      "Investor Screening & Qualification",
      "Deal Structuring Support",
      "Franchise Sales Management",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=75",
    flip: false,
  },
  {
    id: "legal",
    num: "04",
    title: "Legal & Compliance Support",
    subtitle: "Zero-Risk Legal Framework",
    desc: "Our in-house legal team ensures your franchise is compliant with all Indian regulations and protected by iron-clad agreements.",
    features: [
      "Franchise Agreement Drafting",
      "IP & Trademark Registration",
      "State-wise Compliance",
      "Dispute Resolution Framework",
      "FDD Audit Support",
    ],
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=700&q=75",
    flip: true,
  },
  {
    id: "marketing",
    num: "05",
    title: "Marketing & Launch Support",
    subtitle: "Market Entry That Makes Noise",
    desc: "From pre-launch buzz to post-opening campaigns, our marketing team ensures maximum visibility for your new franchise locations.",
    features: [
      "Launch Campaign Strategy",
      "Digital & Social Media",
      "PR & Media Coverage",
      "Franchisee Training Programs",
      "Ongoing Brand Support",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=75",
    flip: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=70')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-lavender mb-4 block"
            >
              What We Do
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight"
            >
              Comprehensive Franchise Services for Ambitious Brands
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-lg">
              Five core service pillars designed to take your brand from concept
              to a thriving national franchise network.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      {services.map((s, idx) => (
        <SectionWrapper
          key={s.id}
          id={s.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${s.flip ? "lg:flex-row-reverse" : ""}`}
          >
            <motion.div
              variants={fadeUp}
              className={s.flip ? "lg:order-2" : ""}
            >
              <span className="text-xs font-semibold text-lavender bg-primary rounded-full px-3 py-1 mb-4 inline-block">
                {s.num}
              </span>
              <h2 className="font-display font-bold text-3xl text-dark mb-2">
                {s.title}
              </h2>
              <p className="text-secondary font-medium text-sm mb-4">
                {s.subtitle}
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-dark"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/apply">
                Get Started <FiArrowRight className="ml-2" />
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className={s.flip ? "lg:order-1" : ""}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      ))}

      {/* CTA */}
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
            Let&apos;s Build Your Franchise Together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-secondary/80 mb-8 max-w-lg mx-auto"
          >
            Book a free 30-minute consultation and discover how we can scale
            your brand nationally.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="/contact" size="lg">
              Book Free Consultation <FiArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
