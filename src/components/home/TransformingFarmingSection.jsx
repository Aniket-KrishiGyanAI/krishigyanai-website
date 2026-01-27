"use client";
import React from "react";
import {
  SatelliteDish,
  CloudSun,
  Drone,
  ChartBarIncreasing,
} from "lucide-react";

const data = [
  {
    title: "Precision Farming",
    subTitle:
      "Data-driven insights for efficient irrigation, fertilization, and crop management.",
    image: SatelliteDish,
  },
  {
    title: "Real-time Weather Monitoring",
    subTitle:
      "Smart sensors and forecasts help farmers plan ahead for weather changes.",
    image: CloudSun,
  },
  {
    title: "IoT-based Smart Equipment",
    subTitle:
      "Automated tractors and drones increase productivity and reduce labor costs.",
    image: Drone,
  },
  {
    title: "Farm Data Analytics",
    subTitle:
      "Centralized dashboards to track yield, soil health, and performance trends.",
    image: ChartBarIncreasing,
  },
];

function TransformingFarmingSection() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-bgColor py-10">
      <div className="flex justify-center items-center flex-col px-4 lg:px-12">
        <h2 className="text-textColor text-xl md:text-2xl lg:text-4xl font-semibold mt-5 m-5 lg:mb-10 text-center">
          Transforming Farming with Innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-4">
          {data.map((d) => (
            <div
              key={d.title}
              className="group hover:scale-105 transition-all duration-300 p-4 rounded-lg flex justify-between cursor-pointer items-center flex-col text-center bg-white hover:bg-secondary shadow"
            >
              <d.image className="size-10 text-white bg-accent p-1 rounded-lg" />
              <h2 className="my-3 text-lg font-medium text-textColor group-hover:text-white hover:transition-all hover:duration-300">
                {d.title}
              </h2>
              <h3 className="text-lightText group-hover:text-white hover:transition-all hover:duration-300">
                {d.subTitle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransformingFarmingSection;
