import React from "react";
import Cards from "../Components/Card";
// import { Camera } from "lucide-react";
// import {ImageUrl} from "./service-Image";
// import Car from "/public/service-Images/car-ant.png";
function GridServices() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8 items-center  max-h-full">
        <Cards label="Auto Analytics" image="/service-Images/car-ant.png" />
        <Cards label="Auto Analytics" image="/service-Images/Engine-car.png" />
        <Cards label="Auto Analytics" image="/public/service-Images/car.png" />
        <Cards label="Auto Analytics" image="/service-Images/battery.png" />
        <Cards label="Auto Analytics" image="/service-Images/caant.png" />
        <Cards label="Auto Analytics" image="/service-Images/Engine-car.png" />
      </div>
    </>
  );
}

export default GridServices;
