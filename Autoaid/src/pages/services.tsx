import React from "react";
import Service from "../Components/ServiceHero.tsx";
import Diagnostic from "../Components/Diagnotics.tsx";
import Work from "../Components/Work.tsx";
import CarFix from "../Components/CarFix.tsx";

function Services() {
  return (
    <>
      <Service />
      <Diagnostic />
      <Work />
      <CarFix />
    </>
  );
}

export default Services;
