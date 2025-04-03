import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar activePage="work" />

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
                OUR WORK
              </h1>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Our passion is helping brands connect with their customers
                through creative vision and unforgettable campaigns. We make
                brands feel like part of the future, today.
              </p>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-16 -left-16 w-48 h-48 bg-gray-200 rounded-full opacity-40 blur-3xl"></div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=800&q=80"
                    alt="Achis Stables"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Project
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">ACHIS STABLES</h3>
                <p className="text-gray-500 uppercase tracking-wider text-sm mb-3">
                  CREATION - IDENTITY, SOCIAL
                </p>
                <p className="text-gray-600">
                  Achis Stables, where we developed a comprehensive marketing
                  strategy, brand strategy, branding and merchandising, and
                  social media management that transformed the business.
                </p>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                    alt="Targeted Advertising"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Project
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  TARGETED ADVERTISING
                </h3>
                <p className="text-gray-500 uppercase tracking-wider text-sm mb-3">
                  TRANSIT - ONLINE, OFFLINE
                </p>
                <p className="text-gray-600">
                  We offer online & offline Advertising. We offer advertising
                  space in over 200 public service vehicles, custom signage
                  fabrication & large format printing.
                </p>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                    alt="Creation"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Project
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">CREATION</h3>
                <p className="text-gray-500 uppercase tracking-wider text-sm mb-3">
                  DESIGN - CONTENT CREATION, COMMUNICATION
                </p>
                <p className="text-gray-600">
                  Make your brand stand out. We do creative, visual concept
                  development, 3D modelling, animation and much more. Whatever
                  your creative needs, we can help bring your ideas to life.
                </p>
              </div>

              {/* Project 4 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80"
                    alt="Alba Yoghurt"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Project
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">ALBA YOGHURT</h3>
                <p className="text-gray-500 uppercase tracking-wider text-sm mb-3">
                  STRATEGY - DESIGN, CAMPAIGN
                </p>
                <p className="text-gray-600">
                  The Alba Yoghurt project. Concept design development, brand
                  development, go-to-market strategy development, and market
                  capture strategy development. Learn how we can help your
                  Brand.
                </p>
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

export default Work;
