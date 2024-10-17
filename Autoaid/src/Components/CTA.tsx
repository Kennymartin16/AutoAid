import React from "react";

function CTA() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="cta-car">
          <img src="/service-Images/cta-car.png" alt="Car fix" />
        </div>
        <div className="cta-text bg-primary w-72">
          <h2 className="text-4xl font-bold -z-20">
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
