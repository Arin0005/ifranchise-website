"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-primary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-lavender text-xs font-bold uppercase tracking-widest mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Contact iFranchise
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg font-medium"
            >
              Have questions about franchising your brand or investing in one?
              Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Contact Details */}
          <motion.div variants={fadeUp} className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/50 text-primary flex items-center justify-center mb-5">
                <FiMapPin size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-dark mb-2">
                Our Headquarters
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Level 12, Business Bay Tower,
                <br />
                BKC, Mumbai – 400051
                <br />
                Maharashtra, India
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/50 text-primary flex items-center justify-center mb-5">
                <FiPhone size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-dark mb-2">
                Call Us
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-1">
                New Inquiries:
              </p>
              <a
                href="tel:+911234567890"
                className="text-primary font-bold hover:underline"
              >
                +91 12345 67890
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/50 text-primary flex items-center justify-center mb-5">
                <FiMail size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-dark mb-2">
                Email Us
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-1">
                Support & Investment:
              </p>
              <a
                href="mailto:info@ifranchise.in"
                className="text-primary font-bold hover:underline"
              >
                info@ifranchise.in
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/40">
              <h2 className="font-display font-bold text-3xl text-dark mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-500 font-medium mb-8">
                Fill out the form below and our franchise expert will get back
                to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    I am interested in:
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark appearance-none">
                    <option value="">Select an option</option>
                    <option value="buy">Buying a Franchise</option>
                    <option value="sell">Franchising my Business</option>
                    <option value="consult">General Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none font-medium text-dark resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <Button
                  size="lg"
                  className="w-full shadow-lg shadow-primary/20"
                >
                  Send Message <FiSend className="ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
