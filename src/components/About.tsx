import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar activePage="about" />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[400px] bg-[#f5f5f5] overflow-hidden">
          <div className="container mx-auto h-full flex items-center justify-center px-4 lg:px-8">
            <motion.div
              className="z-10 max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 leading-tight mb-4">
                ABOUT
              </h1>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                HERE TO MAKE BIG IDEAS HAPPEN
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our multidisciplinary team has the experience and expertise to
                help you with business development, strategy development,
                creative design, branding & merchandising, and fabrication.
              </p>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-16 -left-16 w-48 h-48 bg-gray-200 rounded-full opacity-40 blur-3xl"></div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              MEET THE TEAM
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=ezekiel"
                    alt="Ezekiel Yuaya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">EZEKIEL YUAYA</h3>
                <p className="text-gray-600">CO-FOUNDER & FINANCE DIRECTOR</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=elijohn"
                    alt="Elijohn Njema"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">ELIJOHN NJEMA</h3>
                <p className="text-gray-600">CO-FOUNDER & CHIEF EXECUTIVE</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=elijah"
                    alt="Elijah Mugah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">ELIJAH MUGAH</h3>
                <p className="text-gray-600">CO-FOUNDER & BRAND DIRECTOR</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=sidney"
                    alt="Sidney Safari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">SIDNEY SAFARI</h3>
                <p className="text-gray-600">PARTNER & OPERATIONS DIRECTOR</p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=esther"
                    alt="Esther Muchene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">ESTHER MUCHENE</h3>
                <p className="text-gray-600">HEAD OF COMMUNICATIONS & PR</p>
              </div>

              {/* Team Member 6 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=frank"
                    alt="Frank Mukabana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">FRANK MUKABANA</h3>
                <p className="text-gray-600">HEAD OF CREATIVE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">JOIN US</h2>
            <p className="text-gray-600 mb-8">
              Do you want to work with leading brands as part of a fast moving
              and exciting agency? We're waiting to hear from you.
            </p>
            <button className="px-8 py-3 bg-[#3498db] text-white font-bold rounded-md hover:bg-blue-600 transition-colors">
              JOB OPENINGS
            </button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              WHAT'S NEXT STARTS HERE.
            </h2>
            <p className="text-gray-600 mb-6">
              Get in touch at info@popnetwork.co.ke / +254 732 966 666
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#3498db] text-white rounded-md hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <label className="flex items-center justify-center gap-2">
                <input type="checkbox" className="rounded text-[#3498db]" />
                Yes, subscribe me to your newsletter.*
              </label>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-[#3498db]">
              POP NETWORK
            </h3>
            <p className="text-gray-400">
              Empowering businesses with innovative digital marketing solutions.
            </p>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SERVICES
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  JOBS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} by Pop Network Labs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
