"use client";
import React from "react";
import aboutImg from "../../../public/about/about-hero.jpg";
import Image from "next/image";
import { motion } from "motion/react";
import SushantPanditImage from "../../../public/about/Sushant.png";
import AshutoshJoshiImage from "../../../public/about/Ashutosh.png";
import RamKashyapImage from "../../../public/about/Ram.png";

const slideUpVariants = {
  heading: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  paragaph1: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  },
  paragaph2: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
  },
};

const values = [
  {
    title: "Innovation",
    description:
      "We continuously explore new technologies and approaches to make farming smarter and more efficient. From machine learning models to autonomous field devices, we prototype rapidly and iterate with real farmers to deliver practical, high-impact tools.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#8bc34a"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We design solutions that help farms use less water, energy, and chemicals while maintaining or improving yields. Our goal is to protect natural resources and support farming systems that are resilient for generations to come.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8bc34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10A8 8 0 0 0 4 12c0 6 8 10 8 10z" />
        <path d="M12 22c0-4-3-10-8-10" />
      </svg>
    ),
  },
  {
    title: "Farmer-first approach",
    description:
      "Farmers are at the heart of everything we build. We listen to their needs, validate ideas in the field, and prioritize solutions that reduce workload, lower costs, and increase reliability for everyday farming operations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#8bc34a"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We believe in clear, honest communication - from how our systems use data to how we price and support our products. Farmers deserve visibility into insights and decisions so they can trust and act on the recommendations we provide.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#8bc34a"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Data-driven decision making",
    description:
      "We transform raw field data into clear, actionable insights. By combining sensor readings, imagery, and weather data, we help growers make decisions backed by evidence - reducing guesswork and improving outcomes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#8bc34a"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 11V3m0 8a4 4 0 110 8 4 4 0 010-8zm8-2v6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 21h18"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We engineer every solution to perform consistently in real-world farm conditions. Our systems are tested across diverse climates and field environments to ensure dependable operation season after season.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8bc34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
      </svg>
    ),
  },
];

const leaders = [
  {
    id: 1,
    name: "Sushant Pandit",
    designation: "Founder & Chief Executive Officer (CEO)",
    experience:
      "18+ years of experience in Market Develoment and Technology implementation.",
    image: SushantPanditImage,
  },
  {
    id: 2,
    name: "Ashutosh Joshi",
    designation: "Co-Founder & Chief Business Officer (CBO)",
    experience: "MSC Agronomy. Experience in Sales & Agribusiness Management.",
    image: AshutoshJoshiImage,
  },
  {
    id: 3,
    name: "Ram Gopal Kashyap",
    designation: "Co-Founder & Chief Technology Officer (CTO)",
    experience:
      "M.Tech (Agricultural system & Management) IIT Kharagpur & 3 years of experience in Software Development.",
    image: RamKashyapImage,
  },
];

function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full flex justify-center items-center flex-col mb-10 mt-[56px] sm:mt-10">
        <div className="relative w-full h-[520px] md:h-[520px] lg:h-[440px] overflow-hidden my-6 lg:my-10">
          <Image
            src={aboutImg}
            alt="about us"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            <div className="flex justify-center items-center flex-col max-w-4xl text-center lg:text-left text-white">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.heading}
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
              >
                About Us
              </motion.h2>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.paragaph1}
                className="mb-6 text-base md:text-lg text-left sm:text-center"
              >
                We are passionate experts solving global food challenges with
                innovative technology. Krishiai leads the global agriculture
                sector toward a sustainable farming future. We empower growers
                to make data-driven decisions, enhancing productivity and
                profitability while conserving vital resources such as water,
                energy, and land.
              </motion.p>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.paragaph2}
                className="text-base md:text-lg text-left sm:text-center"
              >
                We collaborate closely with farmers, agronomists, and industry
                experts to understand the unique challenges they face. Through
                these partnerships, we co-create solutions and deliver
                cutting-edge technology tailored to their specific needs.
              </motion.p>
            </div>
          </div>
        </div>

        {/* leadership */}
        <div className="my-10 px-4 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-textColor">
              Our Leadership
            </h2>
            <p className="text-textColor mt-2">
              Meet the team driving our vision and success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {leaders.map((leader) => (
              <div key={leader.id} className="flex flex-col items-center">
                <div className="w-40 h-40 mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover w-full h-full border-4 border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>

                <p className="text-primary font-medium mt-1">
                  {leader.designation}
                </p>

                <p className="text-textColor mt-2 text-sm max-w-xs">
                  {leader.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* vission and misson */}
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 mt-8 mb-5 px-4 lg:px-12">
          <div className="flex justify-center items-center flex-col bg-bgColor p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-textColor mb-3">
              Our Mission
            </h3>
            <p className="text-lightText">
              We envision a farm of the future where AI-driven solutions
              optimize farming practices. At the forefront of agricultural
              innovation, we push boundaries and provide intelligent solutions
              with Krishigyanai to achieve productivity, profitability, and
              sustainability.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col bg-bgColor p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-textColor mb-3">
              Our Vission
            </h3>
            <p className="text-lightText">
              To empower farmers to make data-driven decisions, optimize
              resource utilization, and enhance yields. Together, we are
              committed to driving positive change in the agricultural industry,
              promoting environmental stewardship, reducing suicide rates, and
              transforming the agricultural landscape.
            </p>
          </div>
        </div>

        {/* values */}
        <div className="mt-5 flex justify-center items-center flex-col px-4 lg:px-12">
          <h2 className="text-3xl font-bold my-5">Our Values</h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bgColor">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-medium">{v.title}</h3>
                </div>

                <p className="mt-4 text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
