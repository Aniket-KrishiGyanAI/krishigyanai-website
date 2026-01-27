"use client";
import Image from "next/image";
import React from "react";
import HomeHeroImg from "../../../public/home/HomeHero2.jpg";
import { motion } from "motion/react";

const title = "Empowering Agriculture with AI Innovations";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each word
    },
  },
};

const word = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <div className="mt-[56px] max-w-screen-2xl mx-auto">
      <div className="relative w-full h-full">
        <Image
          src={HomeHeroImg}
          alt="Home Hero Image"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-white text-lg sm:text-3xl md:text-7xl font-extrabold mb-4 drop-shadow-lg max-w-5xl leading-6 sm:leading-normal flex flex-wrap justify-center"
          >
            {title.split(" ").map((wordText, i) => (
              <motion.span
                key={i}
                variants={word}
                className="lg:mr-5 mr-2 lg:mt-3"
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-white text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-md">
            Discover the latest in agriculture technology and AI advancements
            for a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
