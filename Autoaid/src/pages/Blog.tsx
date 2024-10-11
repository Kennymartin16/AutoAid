import React from "react";

const Blog: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <section className="relative w-full md:w-1/2 h-[400px]">
          <img 
            src="src/assets/bloghero.webp" 
            alt="Blog hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold">Our Blog</h2>
          </div>
        </section>
        
        <section className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-orange-500 font-semibold tracking-wider uppercase mb-4">
            TRENDING
          </span>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Diagnose Car Problems If You <br/>
            Don't Know Much About Cars
          </h3>
          <p className="text-gray-600 mb-6">
            We provide a full range of front end mechanical repairs for all makes and 
            models of cars, no matter the cause. This includes, we provide a full 
            range of front end mechanical.
          </p>
          <div className="flex items-center">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors mr-4">
              Read more
            </button>
            <p className="text-gray-500 text-sm">
              Posted on October 6th 2021
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
