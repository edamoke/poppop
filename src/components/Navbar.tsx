import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  activePage?: string;
}

const Navbar = ({ activePage = "home" }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 border-b border-gray-100 bg-white">
      <div className="flex items-center">
        <img
          src="/popnetwork-logo.svg"
          alt="POP NETWORK Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold tracking-tight text-[#3498db]">
          POP NETWORK
        </h1>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link
          to="/"
          className={`text-sm font-medium ${activePage === "home" ? "text-orange-400" : "hover:text-orange-400"} transition-colors`}
        >
          HOME
        </Link>
        <Link
          to="/work"
          className={`text-sm font-medium ${activePage === "work" ? "text-orange-400" : "hover:text-orange-400"} transition-colors`}
        >
          WORK
        </Link>
        <Link
          to="/services"
          className={`text-sm font-medium ${activePage === "services" ? "text-orange-400" : "hover:text-orange-400"} transition-colors`}
        >
          SERVICES
        </Link>
        <Link
          to="/about"
          className={`text-sm font-medium ${activePage === "about" ? "text-orange-400" : "hover:text-orange-400"} transition-colors`}
        >
          ABOUT US
        </Link>
        <Link
          to="/shop"
          className={`text-sm font-medium ${activePage === "shop" ? "text-orange-400" : "hover:text-orange-400"} transition-colors`}
        >
          SHOP
        </Link>
      </div>

      <div className="flex items-center">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
