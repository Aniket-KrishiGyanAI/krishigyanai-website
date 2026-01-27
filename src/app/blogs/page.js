"use client";
import React from "react";
import { blogs } from "@/data/blogs.js";
import Link from "next/link";
import Image from "next/image";
import blogsHero from "../../../public/blogs/blogs-hero.jpg";
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

function Blogs() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full flex justify-center items-center flex-col mb-10 mt-[56px] sm:mt-10">
        <div className="relative w-full h-[300px] md:h-[520px] lg:h-[440px] overflow-hidden my-6 lg:my-10">
          <Image
            src={blogsHero}
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
                Our Blogs
              </motion.h2>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUpVariants.paragaph}
                className="mb-6 text-base md:text-lg text-left sm:text-center"
              >
                Discover how AI, machine learning, sensors, and automation are
                transforming modern agriculture. Stay updated with deep
                research, practical guides, and innovation-driven insights.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blogs/${blog.slug}`}
              className="block rounded-xl overflow-hidden shadow hover:shadow-lg hover:bg-bgColor transition"
            >
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-lightText">{blog.category}</p>
                <h2 className="text-xl font-semibold mt-1 text-textColor">
                  {blog.title}
                </h2>
                <p className="text-lightText text-sm mt-2">
                  {blog.publishedAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
