"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FiCheckCircle } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <SectionWrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-3xl md:text-5xl text-dark mb-4">
              Start Your{" "}
              <span className="text-gradient">Franchise Journey</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg">
              Take the first step towards owning a profitable franchise. Fill
              out the application below to get matched with the best
              opportunities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/40">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Personal Details */}
              <div>
                <h3 className="font-display font-bold text-xl text-dark mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent text-primary text-xs flex items-center justify-center">
                    1
                  </span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark"
                      placeholder="e.g. Mumbai"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Investment Details */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="font-display font-bold text-xl text-dark mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent text-primary text-xs flex items-center justify-center">
                    2
                  </span>
                  Investment Profile
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Investment Budget *
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark appearance-none">
                      <option value="">Select Budget Range</option>
                      <option value="under10">Under ₹10 Lakhs</option>
                      <option value="10to25">₹10 Lakhs - ₹25 Lakhs</option>
                      <option value="25to50">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="50to1cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="above1cr">Above ₹1 Crore</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Preferred Industry (Optional)
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none font-medium text-dark appearance-none">
                      <option value="">Select Industry</option>
                      <option value="fnb">Food & Beverage</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail & Fashion</option>
                      <option value="health">Healthcare & Wellness</option>
                      <option value="other">Other / Open to all</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">
                      Do you currently own a property for the franchise?
                    </label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer font-medium text-dark text-sm">
                        <input
                          type="radio"
                          name="property"
                          className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                          value="yes"
                        />{" "}
                        Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-medium text-dark text-sm">
                        <input
                          type="radio"
                          name="property"
                          className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                          value="no"
                          defaultChecked
                        />{" "}
                        No, I need help finding one
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 flex flex-col items-center">
                <p className="text-xs text-center text-gray-400 font-medium max-w-sm mb-6">
                  By submitting this application, you agree to our Terms of
                  Service and Privacy Policy. A consultant will contact you
                  within 24 hours.
                </p>
                <Button
                  size="lg"
                  className="w-full md:w-auto md:min-w-[300px] shadow-lg shadow-primary/20"
                >
                  Submit Application <FiCheckCircle className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
