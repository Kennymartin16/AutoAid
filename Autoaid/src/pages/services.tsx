import React from "react";
import Service from "../components/ServiceHero";
import Diagnostic from "../components/Diagnotics";
import Work from "../components/Work";
import CarFix from "../components/CarFix";

function services() {
  return (
    <>
      <Service />
      <Diagnostic />
      <Work />
      <CarFix />
    </>
  );
}

export default services;
