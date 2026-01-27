"use client";
import React from "react";
import hardwareSolution from "../../../public/home/hardwareSolution.jpg";
import softwareSolution from "../../../public/home/softwareSolution.jpg";
import Link from "next/link";

const data = [
  {
    type: "hardware",
    hardwareSolutions: [
      {
        name: "AI-powered Rover",
        link: "/products/ai-powered-rover",
      },
      {
        name: "Precision Soil Sensors",
        link: "/products/precision-soil-sensor",
      },
      {
        name: "Automated Irrigation Systems",
        link: "/products/automated-irrigation-system",
      },
      {
        name: "Real-time Data Collection",
        link: "/products/real-time-data-collection",
      },
    ],
  },
  {
    type: "software",
    softwareSolutions: [
      {
        name: "Smart Farm Management App",
        link: "/products/smart-farm-management-app",
      },
      {
        name: "AI Crop Prediction",
        link: "/products/ai-crop-prediction",
      },
      {
        name: "Weather Insights Dashboard",
        link: "/products/weather-insights-dashboard",
      },
      {
        name: "Cloud-based Analytics",
        link: "/products/cloud-based-analytics",
      },
    ],
  },
];

function OurProducts() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-center items-center flex-col px-4 lg:px-12">
        <h2 className="text-textColor text-xl md:text-2xl lg:text-4xl font-semibold my-5 lg:mb-10 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${hardwareSolution.src})` }} // 🛠 replace with your image path
            ></div>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Hardware Solutions
              </h3>
              <ul className="space-y-2 text-base md:text-lg">
                {data[0].type == "hardware" &&
                  data[0].hardwareSolutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block bg-white/10 hover:bg-primary/50 py-2 px-3 rounded-md backdrop-blur-md text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
              </ul>
            </div>
          </div>

          {/* Software Card */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${softwareSolution.src})` }}
            ></div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Software Solutions
              </h3>
              <ul className="space-y-2 text-base md:text-lg">
                {data[1].type == "software" &&
                  data[1].softwareSolutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block bg-white/10 hover:bg-primary/50 py-2 px-3 rounded-md backdrop-blur-md text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
