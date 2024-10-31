// import React from 'react';
import { navLinks } from "./Header";
import { Link } from "react-router-dom";
// import social from "/home-images/social.png";
import Autoaid from "/Autoaid.png";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <section className="max-w-full bg-dark">
        <div className=" md:flex gap-[181px] pt-[117px] pb-32">
          <div className="flex flex-col gap-8 md:gap-[78.41px] md:ml-24 items-center md:items-start" >
            <p className="text-2xl md:text-5xl font-bold text-white leading-[67px] md:h-[164.18px] md:w-[463px]">
              Get in touch with us for your services
            </p>
            <div className="flex gap-6">
              {/* <img src={social} className="w-40 h-7" /> */}
              <TiSocialFacebook className="bg-white rounded w-8 h-8" />
              <SlSocialTwitter className="bg-white rounded w-8 h-8"/>
              <SlSocialInstagram className="bg-white rounded w-8 h-8"/>
              <SlSocialLinkedin className="bg-white rounded w-8 h-8"/>
            </div>
          </div>
          <div className="text-center mt-12 md:mt-0">
            <div>
              <p className="leading-8 text-lg text-white opacity-60 ">
                Help line Noumber
              </p>
              <p className="leading-9 text-2xl text-white">1800 265 24 52</p>
            </div>
            <div className="mt-8">
              <p className="leading-8 text-lg text-white opacity-60">Address</p>
              <p className="leading-9 text-xl md:text-2xl text-white ">
                NH 234 Public Square San Francisco 65368
              </p>
            </div>
            <div className="mt-8">
              <p className="leading-8 text-lg text-white opacity-60">
                We are open
              </p>
              <p className="leading-9 text-xl md:text-2xl text-white">
                Monday to Friday 9:00 AM to 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black p-4 md:flex items-center justify-evenly">
        <div>
          <img src={Autoaid} className="w-14 h-14" />
        </div>
        <div>
          <ul className="md:flex p-4 md:p-0 md:flex-row md:space-x-8 grid grid-cols-3 gap-4">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link to={link.path} className="text-white hover:underline">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white text-center">© Accountability partners❤ 2024</p>
      </div>
    </>
  );
};

export default Footer;
