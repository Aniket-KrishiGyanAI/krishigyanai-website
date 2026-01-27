import React from "react";
import contactImg from "../../../public/contact/contact.jpg";
import Image from "next/image";
import leafImg from "../../../public/contact/leafImg.jpeg";
import leafTopImg from "../../../public/contact/leafTopImg.jpeg";

function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto my-20">
      <div className="px-4 lg:px-12 py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[40%_40%] place-content-center gap-10 items-center">
          {/* Image */}
          <div className="md:flex justify-center p-8 hidden">
            <Image
              src={contactImg}
              alt="Contact"
              className="w-full h-auto max-h-[632px] object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="hidden md:block absolute top-0 right-0 -z-10">
            <Image src={leafTopImg} alt="Leaf" className="w-[420px] h-auto" />
          </div>

          <div className="hidden md:block absolute -bottom-32 right-0 -z-10">
            <Image src={leafImg} alt="Leaf" className="w-[420px]  h-auto" />
          </div>

          {/* Form */}
          <div className="rounded-2xl p-8 shadow-sm border lg:bg-white lg:backdrop-blur-md lg:bg-opacity-10 bg-bgColor">
            <h2 className="text-xl lg:text-2xl text-center font-semibold text-textColor mt-1 mb-2">
              Contact Us
            </h2>
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-textColor text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-textColor text-sm mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-textColor text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Pin Code */}
              <div>
                <label className="block text-textColor text-sm mb-1">
                  Pin Code
                </label>
                <input
                  type="text"
                  placeholder="Enter your pin code"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-textColor text-sm mb-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-medium transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
