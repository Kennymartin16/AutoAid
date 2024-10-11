import React from "react";

function Service() {
  return (
    <>
      <div>
        <h1>Service</h1>
        <p>This is the Service component.</p>
        <div className="border-2 border-x-mint-green flex flex-row relative">
          <img src="/public/service-Images/Header-Image.png" alt="" />

          <div className="bg- border-2 border-mint-green">
            <h2 className="font-bold text-2xl">Service Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              nonummy malesuada fames ac turpis egestas. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
