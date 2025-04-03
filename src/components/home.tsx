import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar activePage="home" />

      {/* Main Content */}
      <main>
        <HeroSection isHomePage={true} />

        {/* What We Do Section */}
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">WHAT WE DO</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Everything marketing Online & Offline(360°)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Brand Strategy & Execution planning
                </h3>
                <p className="text-gray-600">
                  We develop comprehensive brand strategies tailored to your
                  business goals and execute them with precision.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Promotion & Engagement Campaigns
                </h3>
                <p className="text-gray-600">
                  Create memorable campaigns that connect with your audience and
                  drive engagement across all channels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Brand Launch & Public Relations
                </h3>
                <p className="text-gray-600">
                  Launch your brand with impact and maintain a strong public
                  presence through strategic PR initiatives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Content creation & Advertising
                </h3>
                <p className="text-gray-600">
                  Develop compelling content and advertising that resonates with
                  your target audience and drives results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Web design & management
                </h3>
                <p className="text-gray-600">
                  Create stunning websites that reflect your brand identity and
                  provide seamless user experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  All Branding & Fabrication
                </h3>
                <p className="text-gray-600">
                  Comprehensive branding solutions from concept to execution,
                  including physical fabrication for all your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">FEATURED WORK</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SELECTED PROJECTS THAT UNITE RESEARCH, STRATEGY & CREATIVE
                FIREPOWER.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg h-80"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                  alt="Making You Look"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">MAKING YOU LOOK</h3>
                  <p className="text-sm mb-4">SIGNAGE - INTRIGUE - IDENTITY</p>
                  <a href="/work" className="text-white underline">
                    INFO
                  </a>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg h-80"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Online & Offline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">ONLINE & OFFLINE</h3>
                  <p className="text-sm mb-4">
                    EXPERIENTIAL - CONNECTION - ATTENTION
                  </p>
                  <a href="/work" className="text-white underline">
                    INFO
                  </a>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg h-80"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Connecting Brands"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    CONNECTING BRANDS TO AUDIENCES
                  </h3>
                  <p className="text-sm mb-4">
                    STRATEGIC - CAPTIVATING - TARGETING
                  </p>
                  <a href="/work" className="text-white underline">
                    INFO
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/work"
                className="inline-block px-8 py-3 bg-[#3498db] text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
              >
                VIEW ALL WORK
              </a>
            </div>
          </div>
        </section>

        {/* Selected Clients Section */}
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              SELECTED CLIENTS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  GENERATION NEXT
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">ALBA</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">SEMBE KING</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  ENTARAKUET HOTEL
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  ACHIS STABLES
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-gray-50">
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
                  href="/shop"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SHOP
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

export default Home;
