import React from "react";
import logo from "../../public/krishigyanai-logo.png";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-bgColor py-5">
      <div className="w-full px-4 lg:px-12">
        <div className="w-full mt-8 p-1 grid grid-cols-1 md:grid-cols-3 custom-width:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 text-left text-textColor">
          {/* logo & description */}
          <div className="items-start flex flex-row lg:flex-col gap-3">
            <Image src={logo} width={56} height={56} alt="main logo" />
            <p className="text-[14px] leading-relaxed">
              Discover the latest in agriculture technology and AI advancements
              for a sustainable future.
            </p>
          </div>

          {/* quick links */}
          <div className="items-start flex flex-col md:items-center gap-3">
            <h2 className="relative text-xl font-semibold after:content-[''] after:block after:w-16 after:h-[2px] after:bg-primary after:mx-auto after:mt-2">
              Quick Links
            </h2>
            <div className="flex flex-col items-start lg:items-start lg:mr-10">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1.5 text-[14px] hover:text-primary font-medium transition-colors duration-300 uppercase`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="items-start flex flex-col md:items-center gap-3">
            <h2 className="relative text-xl font-semibold after:content-[''] after:block after:w-16 after:h-[2px] after:bg-primary after:mx-auto after:mt-2">
              Connect with Us
            </h2>
            <div className="flex gap-2 text-[14px] mt-2">
              <a
                href="#"
                className="p-1.5 rounded-full hover:transform hover:scale-110 duration-300 bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full hover:transform hover:scale-110 duration-300 bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/krishigyanai/"
                className="p-1.5 rounded-full hover:transform hover:scale-110 duration-300 bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/luminoidtechnologies/"
                className="p-1.5 rounded-full hover:transform hover:scale-110 duration-300 bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* contact */}
          <div className="items-start flex flex-col md:items-center gap-3">
            <h2 className="relative text-xl font-semibold after:content-[''] after:block after:w-16 after:h-[2px] after:bg-primary after:mx-auto after:mt-2">
              For Any Queries
            </h2>

            <div className="flex justify-start flex-col items-start">
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="p-1.5 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                  </svg>
                </span>
                <p className="text-[14px] font-medium">(+91) 7249559349</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="p-1.5 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                  </svg>
                </span>
                <p className="text-[14px] font-medium">
                  contact@krishigyanai.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start lg:flex-row-reverse lg:items-center gap-4 w-full mt-5 pt-3 text-[14px] border-t">
          <div className="flex text-nowrap gap-1 md:gap-4 flex-col lg:flex-row">
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/refund-policy"}>Refund Policy</Link>
          </div>
          <div className="text-wrap text-center">
            &copy; Copyright Krishigyanai 2025 (Powered by Luminoid Technologies
            Pvt Ltd). All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
