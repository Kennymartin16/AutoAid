import React from "react";

const colors = [
  {
    title: "Serve our customers and always deliver the customer service",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes",
    bgColor: "bg-primary",
    overlayImage: "/about-images/mechanic.png",
  },
  {
    title: "To be the world's most eader in automotive business solutions.",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes",
    bgColor: "bg-black",
    overlayImage: "/about-images/plier.png",
  },
  {
    title: "We value the service we provide and our loyal returning customers.",
    description:
      "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes",
    bgColor: "bg-secondary",
    overlayImage: "/about-images/plier.png",
  },
];

const ColorImage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto py-10">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`relative flex flex-col justify-center items-start p-8 text-white ${color.bgColor} bg-cover bg-center`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${color.overlayImage})` }}
          ></div>
          <h2 className="relative text-2xl font-Manrope mb-4 leading-tight">
            {color.title}
          </h2>
          <p className="relative text-base">{color.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorImage;