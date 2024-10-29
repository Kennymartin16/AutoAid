import React from "react";

function CTA() {
  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="cta-car z-40 absolute left-0">
          <img
            src="/service-Images/cta-car.png"
            alt="Car fix"
            className="h-96 w-full"
          />
        </div>
        <div
          className="cta-text bg-primary max-w-xl
          z-50 p-12 h-96
         relative left-96"
        >
          <h2 className="text-5xl font-extrabold py-6 ">
            Get in touch with us for your service related query
          </h2>

          <button className="bg-dark-gray text-white hover:bg-steal-dark py-2 px-10 rounded-md my-6">
            Book Now
          </button>
        </div>
        <div className="cta-engine absolute right-0">
          <img
            src="/service-Images/cta-jump.png"
            alt="Car Jump-starter"
            className="h-96 w-full"
          />
        </div>
      </div>
    </>
  );
}

export default CTA;
