import React from "react";
import { Link } from "react-router-dom";
// import Review from "../Components/Review";
import Offer from "../Components/Offer";
import Brands from "../Components/Brands";


const Home: React.FC = () => {
  return (
    <>
      <div className="max-w-full">
        <section className="md:flex gap-5 items-center justify-center pt-20 pb-36">
          <div >
            <h1 className="w-[554px] leading-[74px] text-3xl md:text-6xl font-bold">Get your vehicle service done online at one place</h1>
            <Link to="/services"><button className="w-[203px] h-[64px] rounded-[12px] items-center justify-center mt-8 bg-primary">Book a service</button></Link>
            <div className="flex mt-12 gap-3">
              <img src="/home-images/clock-Icon.svg" />
              <div >
                <p className="text-base leading-6 font-medium text-[#939191]">We are open</p>
                <p className="text-lg leading-8 font-semibold text-dark">Monday to Friday 9:00 AM to 10:00 AM</p>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute right-50 top-251 bg-white flex gap-4 items-center border-[12px] border-[#6D6C731F] w-[281.64px] h-[102px] rounded-full px-4">
              <img src="/home-images/Circle.svg" className="w-[70px] h-[70px]" />
              <p className="text-base leading-9 font-semibold">Quick service</p>
            </div>
            <img src="/home-images/mechanic.svg" className="w-[555px] h-[532px]" />
            <div className="absolute bottom-40 right-12 flex bg-white rounded-full items-center w-[326px] h-[102px] border-[12px] justify-center border-custom-gray shadow-custom-shadow border-transparent">
              <div>
                <p className="text-2xl font-semibold leading-9">4.5/5</p>
                <p className="text-base font-medium leading-6 text-opacity-0">Rating</p>
              </div>
              <img src="/home-images/Stars.svg" className="w-[185px] h-[36px]" />
            </div>
          </div>
        </section>
        <section className=" md:flex bg-steal-gray items-center justify-center py-32 ">
          <div>
            <h1 className="font-bold text-5xl leading-[66px] w-[583px] h-[152px]">We are taking car servicing seriously</h1>
            <div className="mt-12">
              <div className="flex gap-4 items-center">
                <img src="/home-images/icons/service.svg"/>
                <h2 className="text-2xl leading-8 font-semibold">Convenient Service</h2>
              </div>
              <p className="w-[322px] h-[56px] opacity-60 text-base leading-7 font-semibold ml-16 ">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>

            <div>
              <div className="flex gap-4 items-center">
                <img src="/home-images/icons/expert.svg"/>
                <h2 className="text-2xl leading-8 font-semibold">Expert mechanics</h2>
              </div>
              <p className="w-[322px] h-[56px] opacity-60 text-base leading-7 font-semibold ml-16 ">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>

            <div>
              <div className="flex gap-4 items-center">
                <img src="/home-images/icons/pricing.svg"/>
                <h2 className="text-2xl leading-8 font-semibold">Transparent pricing</h2>
              </div>
              <p className="w-[322px] h-[56px] opacity-60 text-base leading-7 font-semibold ml-16 ">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>
            <div className="flex ml-16 mt-8 gap-5">
              <p className="text-lg font-semibold leading-8">Know more about us </p>
              <img src="/home-images/icons/Arrow.svg" />
            </div>
          </div>
          <div>
            <h1 className="w-[587px] h-[134px] text-5xl font-semibold leading-[56px]">Get a quote for the car service</h1>
            <div className="mt-8 w-[300px]">
              <input type="text" placeholder="Enter your Car model" className="w-[424px] h-[72px] mb-1 pl-8" />
              <input type="text" placeholder="Enter your location" className="w-[424px] h-[72px] mb-1 pl-8" />
              <input type="email" placeholder="Enter your Email" className="w-[424px] h-[72px] mb-1 pl-8" />
              <input type="number" placeholder="Enter your phone number" className="w-[424px] h-[72px] mb-1 pl-8" />
            </div>
            <button className="bg-primary mt-8 w-[203px] h-[64px] rounded-[12px]">Get your quote</button>
          </div>
        </section>
        <section className="md:flex items-center justify-center py-32">
          <div className="pb-16 md:pb-0">
            <h1 className="text-5xl w-[524px] h-[228px] font-bold leading-[66px]">We follow a clear process to help you out.</h1>
            <p className="text-base w-[437px] h-[56px] font-medium leading-7">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire</p>
            <Link to="/blog"><button className="bg-primary mt-8 w-[203px] h-[64px] rounded-[12px]">Learn more</button></Link>
          </div>
          <div>
            <div>
              <div className="flex gap-6 items-center">
                <img src="/home-images/icons/circle1.svg" />
                <h3 className="font-bold text-3xl leading-10">Get a Quote</h3>
              </div>
              <div className="flex ml-8 gap-16">
                <img src="/home-images/icons/line.svg" />
                <p className="w-[336px] h-[96px] text-lg font-semibold leading-7">Through True Rich Attended does no end it his mother since real had half every.</p>
              </div>
            </div>
            <div>
              <div className="flex gap-6 items-center">
                <img src="/home-images/icons/circle22.svg" />
                <h3 className="font-bold text-3xl leading-10">Book an Appointment</h3>
              </div>
              <div className="flex ml-8 gap-16">
                <img src="/home-images/icons/line.svg" />
                <p className="w-[336px] h-[96px] text-lg font-semibold leading-7">Through True Rich Attended does no end it his mother since real had half every.</p>
              </div>
            </div>
            <div>
              <div className="flex gap-6 items-center">
                <img src="/home-images/icons/circle33.svg" />
                <h3 className="font-bold text-3xl leading-10">Get your Service Done</h3>
              </div>
              <div className="flex ml-8 gap-16">
                <div></div>
                <p className="w-[336px] h-[96px] text-lg font-semibold leading-7">Through True Rich Attended does no end it his mother since real had half every.</p>
              </div>
            </div>
          
            
          </div>
        </section>
 
        <Offer/>
        <Brands />
       
       

      </div>
    </>
  );
}

export default Home;