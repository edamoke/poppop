import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  isHomePage?: boolean;
}

const HeroSection = ({
  title = "CONNECTING PEOPLE, BUILDING BRANDS",
  subtitle = "CREATIVE. BRAND ARCHITECTS",
  description = "Everything marketing Online & Offline(360°). Brand Strategy & Execution planning. Promotion & Engagement Campaigns. Brand Launch & Public Relations.",
  ctaText = "WHAT WE DO",
  onCtaClick = () => console.log("CTA clicked"),
  imageSrc = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  isHomePage = true,
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] bg-[#f5f5f5] overflow-hidden">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="z-10 max-w-xl pt-16 lg:pt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isHomePage ? (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 leading-tight mb-4">
                {title}
              </h1>
              <h3 className="text-xl uppercase tracking-widest text-[#3498db] font-bold mb-4">
                {subtitle}
              </h3>
            </>
          ) : (
            <>
              <h3 className="text-sm uppercase tracking-widest text-[#3498db] font-medium mb-2">
                {subtitle}
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 leading-tight mb-4">
                {title}
              </h1>
            </>
          )}
          <p className="text-gray-600 mb-8 text-lg">{description}</p>
          <Button
            onClick={onCtaClick}
            className="bg-[#3498db] hover:bg-blue-600 text-white px-8 py-6 rounded-none text-lg h-auto font-bold"
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[300px] lg:h-full mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={imageSrc}
              alt="POP NETWORK"
              className="object-cover h-full w-full lg:w-auto lg:max-h-[500px] rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-16 -left-16 w-48 h-48 bg-gray-200 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
