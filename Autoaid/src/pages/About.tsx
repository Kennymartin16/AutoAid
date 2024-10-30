import React from "react";
import StepComponent from "../components/Steps"; 
import ColorImage from "../components/Color";
import Features from "../components/Features";
import Numbers from "../components/Numbers";
import Teams from ".";

const About: React.FC = () => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen mt-24cla">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden shadow-lg">
          <section className="relative w-full md:w-1/2 h-[400px]">
            <img
              src="/about-images/Image.png"
              alt="About hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </section>

          <section className="w-full bg-black md:w-1/2 p-8 flex flex-col justify-center">
            <div className="relative inset-0 bg-opacity-50 flex items-center mb-3">
              <h2 className="text-white text-5xl font-bold">About us</h2>
            </div>
            <p className="text-white mb-4">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </p>
            <li className="bg-primary text-white list-none transition-colors mr-4 hover:bg-orange-500 rounded-md py-2 px-6 mb-4 w-40">
              <a href="">Book a service</a>
            </li>
          </section>
        </div>
      </section>

      <section className="flex items-start justify-center pt-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden ">
          <section className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="relative inset-0 bg-opacity-0 flex flex-col items-start">
              <h2 className="text-black text-4xl font-semibold">
                We Provide Expert Service and aim to have a long term with you
              </h2>
              <p className="text-[#232536] opacity-60 text-lg mt-4 mb-4">
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter
              </p>
              <StepComponent />
            </div>
          </section>
          <section className="relative w-full md:w-1/2 h-[630px] md:flex md:items-center md:justify-center">
            <img
              src="/about-images/mechanic.png"
              alt="A man working on his car"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </section>
        </div>
      </section>

      <section className="flex items-start justify-center  pt-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden mt-10">
          <ColorImage />
        </div>
      </section>

      <section className="flex items-center justify-center  pt-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-black text-4xl font-semibold text-center">
            Services we provide to our valued customers
          </h2>
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden mt-10">
            <Features />
          </div>
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden mt-10">
            <Numbers />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-black text-4xl font-semibold text-center mb-6">
          Meet our Team
        </h1>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <Teams />
        </div>
      </section>
    </div>
  );
};

export default About;