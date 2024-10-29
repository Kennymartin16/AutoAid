import React from "react";

const features = [
    {
        icon: "/about-images/Icon.png",
        title: "Convenient Service",
        description: "Through True Rich Attended does no end it his mother since real had half every him end it his mother",
    },
    {
        icon: "/about-images/face_icon.png",
        title: "Expert Mechanics",
        description: "Through True Rich Attended does no end it his mother since real had half every him end it his mother",
    },
    {
        icon: "/about-images/dollar_icon.png",
        title: "Transparent Pricing",
        description: "Through True Rich Attended does no end it his mother since real had half every him end it his mother",
    },
];

const Features: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto py-10">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={feature.icon} alt={feature.title} className="w-10 h-10 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
                    <p className="text-steal-gray text-base text-center">{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Features;