import React from "react";

const numbers = [
    {
        title: "20+",
        description: "Professionals",
    },
    {
        title: "10+",
        description: "Years Experience",
    },
    {
        title: "12K+",
        description: "Services Closed",
    },
    {
        title: "100%",
        description: "Customers Satisfaction",
    },
];

const Numbers: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto py-10">
            {numbers.map((number, index) => (
                <div key={index} className="flex flex-col items-start">
                    <h2 className="text-4xl font-bold mb-4 text-secondary">{number.title}</h2>
                    <p className="text-black text-xl text-center">{number.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Numbers;