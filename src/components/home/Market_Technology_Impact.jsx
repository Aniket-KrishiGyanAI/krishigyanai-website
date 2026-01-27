import Image from "next/image";
import React from "react";
import smartAgri from "../../../public/home/smart-agri.jpeg";
import droneImg from "../../../public/home/drone.jpg";
import smartFarming from "../../../public/home/smartFarming.jpg";

const smartFarmingData = [
  {
    heading: "Market & Growth Outlook",
    mainIdea:
      "Smart farming is expanding rapidly with IoT, AI, and automation driving efficiency and sustainability.",
    image: smartAgri,
    points: [
      {
        title: "Rising Market Value",
        description:
          "IoT in Agriculture is projected to reach USD 34.7 billion by 2035, growing at 11.15% CAGR.",
      },
      {
        title: "Sustainability Focus",
        description:
          "Smart agriculture promotes efficient resource use and reduced environmental impact.",
      },
      {
        title: "Crop Productivity Boost",
        description:
          "Real-time insights on soil and climate increase average yield by up to 25%.",
      },
    ],
  },
  {
    heading: "Technology & Devices",
    mainIdea:
      "Hardware and IoT innovations are transforming how farms are monitored and managed.",
    image: droneImg,
    points: [
      {
        title: "Smart Sensors",
        description:
          "Monitor soil moisture, pH, and nutrient levels to optimize irrigation and fertilization.",
      },
      {
        title: "Agricultural Drones",
        description:
          "Capture aerial images, detect crop health, and automate pesticide spraying.",
      },
      {
        title: "Solar-Powered IoT Devices",
        description:
          "Enable 24/7 remote monitoring even in low-connectivity rural regions.",
      },
    ],
  },
  {
    heading: "Impact & Adoption",
    mainIdea:
      "IoT integration is delivering measurable results in productivity, efficiency, and sustainability.",
    image: smartFarming,
    points: [
      {
        title: "Precision Irrigation",
        description: "Smart water systems reduce water waste by up to 40%.",
      },
      {
        title: "Yield Analytics",
        description:
          "Data dashboards help farmers predict output and detect issues early.",
      },
      {
        title: "Climate Resilience",
        description:
          "Sensor networks help adapt crop plans to changing weather.",
      },
    ],
  },
];

function Section2() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-center items-center flex-col">
        {/* new layout */}
        {smartFarmingData.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={section.heading}
              className={`px-4 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-center gap-12 my-6 lg:my-10 py-6 ${
                !isEven ? "lg:flex-row-reverse bg-bgColor" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full flex justify-center lg:w-1/2">
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-3">
                  {section.heading}
                </h2>
                <p className="text-lightText mb-8">{section.mainIdea}</p>

                <div className="grid gap-5">
                  {section.points.map((point) => (
                    <div
                      key={point.title}
                      className="p-5 bg-white rounded-xl shadow-md transition"
                    >
                      <h3 className="text-lg font-semibold text-textColor mb-1">
                        {point.title}
                      </h3>
                      <p className="text-lightText text-sm">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section2;
