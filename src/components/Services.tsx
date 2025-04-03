import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar activePage="services" />

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
                WHAT WE DO
              </h1>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                We innovate and create at the intersection of digital,
                advertising and design to provide the best possible impact for
                our clients & partners.
              </p>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-16 -left-16 w-48 h-48 bg-gray-200 rounded-full opacity-40 blur-3xl"></div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">SERVICES</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Service 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">STRATEGY</h3>
                <p className="text-gray-600">
                  Our specialty is in brand strategy development, market plan
                  development, go to market plans and sales plans. We work
                  closely with your team to understand your needs and goals, and
                  we provide a bespoke approach to achieve them. With our
                  strategy development services, you can expect a comprehensive
                  plan that will take your business to new heights.
                </p>
              </div>

              {/* Service 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">ADVERTISING</h3>
                <p className="text-gray-600">
                  Our Advertising service is the perfect tool for businesses
                  that are serious about growth. At our company, we offer online
                  and offline advertising, so you can reach your audience no
                  matter where they are. With our advertising space in over 200
                  public service vehicles across Kenya, your message will be
                  seen by thousands of potential customers every day. Our
                  experienced team of advertising professionals will work
                  closely with you to manage your advertising campaigns and
                  ensure that you get the results you need.
                </p>
              </div>

              {/* Service 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">CONTENT DEVELOPMENT</h3>
                <p className="text-gray-600">
                  Good content is all about effective storytelling. Our team of
                  experts is here to help you tell your brand's story in a way
                  that resonates with your audience. We offer a range of
                  services, including content strategy development, professional
                  video and photo shoots, all designed to help your content
                  stand out. Plus, we can provide training so that you can
                  create compelling content on your own.
                </p>
              </div>

              {/* Service 4 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  VISUAL IDENTITY & CUSTOMIZATIONS
                </h3>
                <p className="text-gray-600">
                  Your business deserves a unique visual identity that truly
                  represents your brand. Our branding & merchandising services
                  focus on creating custom designs, fabrications, and prints on
                  various surfaces to give your brand the recognition it
                  deserves. Our team of professionals has the experience and
                  creativity to deliver top-quality products that go beyond your
                  expectations.
                </p>
              </div>

              {/* Service 5 */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  ONLINE & OFFLINE MARKETING
                </h3>
                <p className="text-gray-600">
                  Looking for a reliable partner to help you with your online &
                  offline marketing needs? Look no further than Pop Network. Our
                  experienced team can help with everything from experiential &
                  engagement marketing, social media management to creative
                  digital designs. We work closely with you to create a custom
                  strategy that drives engagement and generates results. Contact
                  us today to learn more.
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

export default Services;
