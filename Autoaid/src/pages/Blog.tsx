import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    image: "/assets/car4.jpeg",
    title: "5 Genius Car Accessories You Should Never Drive Without",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
  {
    image: "/assets/car3.jpeg",
    title: "5 Genius Car Accessories You Should Never Drive Without",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
  {
    image: "/assets/car2.jpeg",
    title: "We provide blow straight past it with the wheels skidding",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
  {
    image: "/assets/car3.jpeg",
    title: "We provide blow straight past it with the wheels skidding",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
  {
    image: "/assets/car2.jpeg",
    title: "5 Genius Car Accessories You Should Never Drive Without",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
  {
    image: "/assets/car4.jpeg",
    title: "5 Genius Car Accessories You Should Never Drive Without",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
          <section className="relative w-full md:w-1/2 h-[400px]">
            <img
              src="/assets/bloghero.webp"
              alt="Blog hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-5xl font-bold">Our Blog</h2>
            </div>
          </section>

          <section className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-zinc-900 text-white">
            <span className="text-orange-500 font-semibold tracking-wider uppercase mb-4">
              TRENDING
            </span>
            <h3 className="text-3xl font-bold mb-4 text-whitegray-900">
              Diagnose Car Problems If You <br />
              Don't Know Much About Cars
            </h3>
            <p className="text-white mb-6">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, we
              provide a full range of front end mechanical.
            </p>
            <div className="flex items-center">
              <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors mr-4">
                Read more
              </button>
              <p className="text-gray-400 text-sm">
                Posted on October 6th 2021
              </p>
            </div>
          </section>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Article */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/assets/car1.jpeg"
              alt="close up car"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-500 text-sm mb-2">
              Posted on October 6th 2021
            </p>
            <h2 className="text-2xl font-bold mb-3">
              Should I Buy a New Car or Lease a New Car in 2021
            </h2>
            <p className="text-gray-700 mb-4">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <Link
              to="/article"
              className="text-orange-600 inline-flex items-center"
            >
              Read more <FaArrowRightLong className="ml-2" />
            </Link>
          </div>

          {/* Side Articles */}
          <div className="space-y-4">
            {[
              {
                img: "/assets/car4.jpeg",
                alt: "plate number",
                title: "Get an Awesome Number Plate for Your New Car",
              },
              {
                img: "/assets/car3.jpeg",
                alt: "robot driving a car",
                title: "Would you Let a Robot Drive your Car? Our AI Future",
              },
              {
                img: "/assets/car2.jpeg",
                alt: "electric car",
                title: "Will Electric Technology Soon Rule The Road?",
              },
            ].map((article, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={article.img}
                  alt={article.alt}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold mb-1">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Posted on October 6th 2021
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Blog Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border-b pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <a
                href="#"
                className="text-orange-600 inline-flex items-center text-sm"
              >
                Read more <FaArrowRightLong className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
