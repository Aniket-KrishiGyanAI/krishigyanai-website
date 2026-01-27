"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import govImage from "../../../public/home/gov.webp";
import startupIndiaImage from "../../../public/home/startupIndia.webp";
import digitalIndiaImage from "../../../public/home/digitalIndia.jpg";
import ciiiImage from "../../../public/home/CIII.png";
import meityImage from "../../../public/home/MEITY.png";
import nabardImage from "../../../public/home/NABARD.png";
import stpiImage from "../../../public/home/STPI.png";

const logos = [
  govImage,
  startupIndiaImage,
  digitalIndiaImage,
  ciiiImage,
  nabardImage,
  meityImage,
  stpiImage,
];

export default function Partners() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-12 my-12">
      <div className="py-5 lg:py-8 rounded-2xl bg-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center">
          Our Partners
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          speed={800}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-[160px] flex items-center justify-center border rounded-lg bg-white">
                <Image
                  src={img}
                  alt="partner logo"
                  width={220}
                  height={120}
                  className="object-contain max-h-[110px] max-w-[200px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
