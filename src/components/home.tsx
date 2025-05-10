import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ExperienceTimeline from "./ExperienceTimeline";
import ContactForm from "./ContactForm";
import { Separator } from "./ui/separator";

const HomePage = () => {
  // Create a placeholder SkillsSection component since it's not available
  const SkillsSection = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Business Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Business Expertise
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Strategic Planning
                  </span>
                  <span className="text-sm font-medium text-gray-700">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Market Analysis
                  </span>
                  <span className="text-sm font-medium text-gray-700">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Team Leadership
                  </span>
                  <span className="text-sm font-medium text-gray-700">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Technical Knowledge
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Automotive Industry
                  </span>
                  <span className="text-sm font-medium text-gray-700">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Data Analysis
                  </span>
                  <span className="text-sm font-medium text-gray-700">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Project Management
                  </span>
                  <span className="text-sm font-medium text-gray-700">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Communication
                  </span>
                  <span className="text-sm font-medium text-gray-700">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Negotiation
                  </span>
                  <span className="text-sm font-medium text-gray-700">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Problem Solving
                  </span>
                  <span className="text-sm font-medium text-gray-700">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "96%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-red-600">Ken Honda</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24">
          <HeroSection />
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Experience Timeline Section */}
        <section id="experience" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My career journey at Honda, showcasing leadership and business
                expertise in the automotive industry.
              </p>
            </motion.div>
            <ExperienceTimeline />
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Core competencies and professional skills developed throughout
                my career at Honda.
              </p>
            </motion.div>
            <SkillsSection />
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Ken Honda at Honda corporate office"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  With over 15 years at Honda, I've dedicated my career to
                  driving business growth and innovation in the automotive
                  industry. My journey has taken me through various leadership
                  roles, from regional sales management to corporate strategy
                  development.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  I'm passionate about the intersection of technology and
                  mobility solutions, working to shape Honda's future in an
                  evolving market landscape. My approach combines data-driven
                  decision making with strong relationship building.
                </p>
                <p className="text-lg text-gray-600">
                  Outside of work, I enjoy automotive design, participating in
                  industry conferences, and mentoring the next generation of
                  business leaders in the automotive sector.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Interested in connecting? Feel free to reach out through the
                form below or via my professional networks.
              </p>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-red-500">Ken Honda</span>
              <p className="mt-2 text-gray-400">
                Business Professional at Honda
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="mailto:ken.honda@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Ken Honda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
