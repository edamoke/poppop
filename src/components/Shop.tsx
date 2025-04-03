import React from "react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const Shop = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Shop Our Collection
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 - This would be the first product */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                  alt="Modern sofa"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Quick View
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-medium">Modern Sofa</h3>
              <p className="text-gray-600 mb-2">$1,299.00</p>
              <div className="flex space-x-1">
                <span className="w-4 h-4 rounded-full bg-gray-700 border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-beige-300 border border-gray-300"></span>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"
                  alt="Dining table"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Quick View
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-medium">Dining Table</h3>
              <p className="text-gray-600 mb-2">$899.00</p>
              <div className="flex space-x-1">
                <span className="w-4 h-4 rounded-full bg-amber-700 border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-gray-800 border border-gray-300"></span>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80"
                  alt="Armchair"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Quick View
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-medium">Armchair</h3>
              <p className="text-gray-600 mb-2">$599.00</p>
              <div className="flex space-x-1">
                <span className="w-4 h-4 rounded-full bg-emerald-600 border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-gray-400 border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-rose-400 border border-gray-300"></span>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&q=80"
                  alt="Pendant lamp"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Quick View
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-medium">Pendant Lamp</h3>
              <p className="text-gray-600 mb-2">$249.00</p>
              <div className="flex space-x-1">
                <span className="w-4 h-4 rounded-full bg-black border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-white border border-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-orange-400 border border-gray-300"></span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-none text-lg h-auto font-bold">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Same as Home for consistency */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#3498db]">
              POPNETWORK AFRICA
            </h3>
            <p className="text-gray-400">
              Creating beautiful spaces with quality furniture since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Living Room
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Office
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} POPNETWORK AFRICA. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
