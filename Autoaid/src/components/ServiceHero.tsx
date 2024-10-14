import React from "react";
import Button from "./Button";

function Service() {
  return (
    <>
      <div className=" p-14 mt-4 items-center mx-auto">
        <div className="flex  flex-col md:flex-row md:relative lg:relative mx-auto">
          <img
            src="/service-Images/Header-Image.png"
            alt="Car Repair"
            className="min-w-96"
          />

          <div className="bg-dark-gray md:absolute w-4/4  md:right-40 md:max-w-full md:-mt-8  md:p-16 text-white md:max-h-screen">
            <div className="md:mt-12 md:min-w-3.5/4">
              <h2 className="font-extrabold text-3xl  mt-4 text-center md:text-start  md:text-6xl mb-4">
                Our services
              </h2>
              <p className="leading-8 text-center md:text-start p-1 md:leading-8 md:max-w-xl my-8">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw Through True Rich Attended does
              </p>
              <div className="my-8 mx-auto text-center md:text-start">
                <Button label="Book a Service" id="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
