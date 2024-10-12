import React from "react";
import Cards from "./Card";
function GridServices() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border-2 border-mint-green">
        <Cards label="Auto Analytics" Image="/service-Images/car-ant.png" />
        <Cards label="Auto Analytics" Image="/service-Images/car-ant.png" />
        <Cards
          label="Auto Analytics"
          Image="/public/service-Images/car-ant.png"
        />
        <Cards
          label="Auto Analytics"
          Image="/public/service-Images/car-ant.png"
        />
        <Cards
          label="Auto Analytics"
          Image="/public/service-Images/car-ant.png"
        />

        <Cards
          label="Auto Analytics"
          Image="/public/service-Images/car-ant.png"
        />
      </div>
    </>
  );
}

export default GridServices;
