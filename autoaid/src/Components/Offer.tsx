import React from "react"
import Cards from "./Card";
import { Link } from "react-router-dom";

const Offer = () => {
    return (
        <>
            <div>
                <section className="bg-light-gray pt-32">
                    <p className="text-center text-2xl font-semibold">What we Offer</p>
                    <p className="text-center text-5xl font-bold leading-[70px]">We offer full service auto repair <br></br> & maintenance</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-1 md:gap-8 mx-8 md:mx-32 max-h-full">
                        <Cards image="/home-images/icons/diagnostic.svg" label="Diagnostics" />
                        <Cards image="/home-images/icons/engine.svg" label="Engine" />
                        <Cards image="/home-images/icons/wheel.svg" label="Wheel" />
                        <Cards image="/home-images/icons/oil.svg" label="Oil" />
                        <Cards image="/home-images/icons/body.svg" label="Body" />
                        <Cards image="/home-images/icons/batteries.svg" label="Batteries" />
                        <Cards image="/home-images/icons/insurance.svg" label="Insurance" />
                        <Cards image="/home-images/icons/custom.svg" label="Custom" />
                    </div>
                    <Link to="/services" >
                        <div className="flex gap-2 justify-end items-center my-12 mr-24 cursor-pointer">
                            <p className="font-medium text-lg">Learn about services</p>
                            <img src="/home-images/icons/Arrow.svg" />
                        </div>
                    </Link>
                    <div className='flex max-w-full justify-around py-12'>
                        <div className='about-achieve'>
                            <h1>20+</h1>
                            <p>Professional</p>
                        </div>
                        <div className='about-achieve'>
                            <h1>10+</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className='about-achieve'>
                            <h1>12K+</h1>
                            <p>Service Closed</p>
                        </div>
                        <div className='about-achieve'>
                            <h1>100%</h1>
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Offer
