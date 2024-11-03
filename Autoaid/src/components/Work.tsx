import React from "react";

export default function Work() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 md:px-32 md:py-20">
        <div className="p-8">
          <h2 className="font-bold text-4xl w-full md:w-96 mb-12 text-center md:text-start">
            How we work and the process we follow
          </h2>

          <div>
            <div className="flex flex-row items-center gap-4 mb-6 min-w-20 ">
              <img
                src="/service-Images/Checkmark.png"
                alt="check image"
                className="w-10"
              />
              <p className="text-xl w-96 px-2">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 mb-6 min-w-20 text-xl">
              <img
                src="/service-Images/Checkmark.png"
                alt="check image"
                className="w-10"
              />
              <p className="text-xl px-2 m:w-96">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 mb-6 min-w-20 ">
              <img
                src="/service-Images/Checkmark.png"
                alt="check image"
                className="w-10"
              />
              <p className="text-xl px-2 w-96">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 max-h-screen">
          <div>
            <img src="/service-Images/car-left.png" alt="" />
          </div>
          <div>
            <img src="/service-Images/car-right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
