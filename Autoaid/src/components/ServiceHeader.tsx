import React from "react";

function Service() {
  return (
    <>
      <div className=" p-14 mt-4 items-center mx-auto border-2 border-gray-800">
        <div className="flex flex-row relative mx-auto">
          <img
            src="/service-Images/Header-Image.png"
            alt="Car Repair"
            className="min-w-96"
          />

          <div className="bg-dark-gray absolute right-64 max-w-full   p-16 text-white min-h-96">
            <h2 className="font-extrabold text-6xl mb-4">Our services</h2>
            <p className="leading-8 max-w-xl my-4">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </p>
            <div className="my-8">
              <button className="bg-primary p-4 rounded-md font-semibold">
                Book a service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
