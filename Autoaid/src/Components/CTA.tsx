import React from "react";

function CTA() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="cta-car z-50">
          <img src="/service-Images/cta-car.png" alt="Car fix" />
        </div>
        <div
          className="cta-text bg-primary w-half
          z-50
        border-2 border-mint-green"
        >
          <h2 className="text-4xl font-bold ">
            Get in touch with us for your service related query
          </h2>

          <button className="bg-dark-gray text-white hover:bg-steal-dark py-2 px-10 rounded-md">
            Book Now
          </button>
        </div>
        <div className="cta-engine">
          <img
            src="/public/service-Images/cta-jump.png"
            alt="Car Jump-starter"
          />
        </div>
      </div>
    </>
  );
}

export default CTA;
