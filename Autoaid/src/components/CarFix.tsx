import React from "react";
import Button from "./Button";

function CarFix() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-8 md:px-32 md:py-20">
        <div className="flex flex-row gap-4">
          <div className="">
            <img
              src="/public/service-Images/car-left-2.png"
              alt=""
              className="max-h-screen"
            />
          </div>
          <div>
            <img
              src="/public/service-Images/car-right-2.png"
              alt=""
              className="max-h-screen"
            />
          </div>
        </div>

        <div className="px-8 md:w-2/4">
          <h2 className="font-extrabold text-4xl w-full md:max-w-fit  mb-8 text-center md:text-start">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h2>

          <p className="mb-8 leading-8 text-xl">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>

          <div className="text-white my-4 text-center md:text-start">
            <Button label="Book a Service" id="service" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarFix;
