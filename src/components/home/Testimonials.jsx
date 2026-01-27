"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import farmer1 from "../../../public/home/farmer1.jpg"
import farmer2 from "../../../public/home/farmer2.jpg"
import farmer3 from "../../../public/home/farmer3.jpg"
import farmer4 from "../../../public/home/farmer4.jpg"
import farmer5 from "../../../public/home/farmer5.jpg"
import Image from "next/image";

// testimonialData.js
const testimonialData = [
  {
    id: 1,
    name: "Aarav Sharma",
    village: "Bhavani Pur",
    image: farmer1,
    message:
      "This initiative has truly transformed farming in our village. The support and technology are top-notch!",
  },
  {
    id: 2,
    name: "Raj Patel",
    village: "Navgaon",
    image: farmer2,
    message:
      "I’ve learned so much about smart agriculture! The community support is amazing and inspiring.",
  },
  {
    id: 3,
    name: "Ravi Mehta",
    village: "Sundarpur",
    image: farmer3,
    message:
      "The experience was incredible - I can now monitor my crops efficiently using the app!",
  },
  {
    id: 4,
    name: "Anup Reddy",
    village: "Anantapur",
    image: farmer4,
    message:
      "Highly recommend this platform! It bridges the gap between traditional and smart farming beautifully.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    village: "Rampura",
    image: farmer5,
    message:
      "From soil tracking to irrigation - everything is simplified. A true revolution for small farmers!",
  },
];

function Testimonials() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 22,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-center items-center flex-col my-6 lg:my-8 px-4 lg:px-12">
        <h2 className="text-textColor text-xl md:text-2xl lg:text-4xl font-semibold my-5 text-center">
          Testimonials
        </h2>
        <div className="glide-04 relative w-full mt-5">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {testimonialData.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col items-center justify-center rounded-2xl p-6 text-center bg-bgColor"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
                  />
                  <p className="text-primary italic mb-3">"{item.message}"</p>
                  <h3 className="text-lg font-semibold text-textColor">
                    {item.name}
                  </h3>
                  <p className="text-sm text-lightText">{item.village}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="flex w-full items-center justify-center gap-5 p-4"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-primary transition duration-300 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-primary transition duration-300 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
