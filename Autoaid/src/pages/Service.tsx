import React from "react";
import Service from "../components/ServiceHero";
import Diagnostic from "../components/Diagnotics";
import Work from "../components/Work";
import CarFix from "../components/CarFix";
import CTAction from "../components/CTA";

function services() {
  return (
    <>
      <Service />
      <Diagnostic />
      <Work />
      <CarFix />
      <CTAction />
    </>
  );
}

export default services;
