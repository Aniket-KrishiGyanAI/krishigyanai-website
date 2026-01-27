import React from "react";

function PricingSections() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-12 my-10">
      <div className="bg-white shadow rounded-xl p-6 border transition-all duration-300">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2 text-center">
          Service Pricing
        </h2>
        <p className="text-lightText mb-4 text-center">
          Affordable and reliable agricultural services designed to help farmers
          grow more efficiently and sustainably.
        </p>

        <div className="bg-bgColor p-4 rounded-lg text-center">
          <p className="text-textColor text-base">Starting From</p>
          <h3 className="text-2xl font-extrabold text-green-800">
            ₹50,000<span className="text-sm font-semibold"> / service</span>
          </h3>
          <p className="text-textColor text-sm">
            Up to ₹2,50,000 depending on service type
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingSections;
