import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import GridServices from "./GridServices";

function Diagnotics() {
  return (
    <>
      <div className="bg-steal-gray p-4 md:px-32 md:py-20">
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="flex flex-col gap-4 p-8 bg-white">
              <img
                src="service-Images/Image.png"
                alt="Car-diagnostic"
                className="w-full"
              />
              <h2 className="font-extrabold text-5xl mb-4">Auto Diagnotics</h2>
              <p className="leading-10 text-lg max-w-xl my-8">
                "Harnessing cutting-edge technology to decode your vehicle's
                health, ensuring peak performance, safety, and longevity through
                real-time, comprehensive insights. Whether it’s for routine
                maintenance or troubleshooting a warning light, auto diagnostics
                is key to keeping vehicles running smoothly and ensuring road
                safety."
              </p>
              <div className="">
                <button className="py-2 rounded-md items-center flex gap-4  font-bold">
                  <span>See service details</span>
                  <FaArrowRight width={40} className="mt-1" />
                </button>
              </div>
            </div>
          </div>
          <GridServices />
        </div>
      </div>
    </>
  );
}

export default Diagnotics;
