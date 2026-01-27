"use client";
import React from "react";
import { services } from "@/data/services.js";
import Image from "next/image";
import servicesImg from "../../../public/services/services-hero.jpg";
import { motion } from "motion/react";

const slideUpVariants = {
  heading: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  paragaph: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  },
};

function Services() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full flex justify-center items-center flex-col mb-10 mt-[56px] sm:mt-10">
        <div className="relative w-full h-[500px] md:h-[520px] lg:h-[440px] overflow-hidden my-6 lg:my-10">
          <Image
            src={servicesImg}
            alt="about us"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            <div className="flex justify-center items-center flex-col max-w-4xl text-center lg:text-left text-white">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.heading}
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
              >
                Our Services
              </motion.h2>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.paragaph}
                className="mb-6 text-base md:text-lg text-left sm:text-center"
              >
                We build end-to-end farm automation solutions that combine
                machine learning, computer vision and AI-driven farm software to
                increase yield, reduce costs, and automate repetitive tasks. Our
                platform integrates edge hardware (cameras, sensors, robotics),
                cloud services, and intelligent models to deliver real-time crop
                monitoring, pest & disease detection, precision irrigation,
                yield estimation, automated harvesting assistance, asset
                tracking, and farm-management workflows - all accessible through
                a modern web and mobile application.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="block rounded-xl overflow-hidden shadow hover:shadow-lg hover:bg-bgColor transition"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={400}
                className="w-full h-48 object-cover object-center"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mt-1 text-textColor">
                  {service.name}
                </h2>
                <p className="text-sm text-lightText">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
