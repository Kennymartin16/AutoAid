import React from "react";

const teams = [
    {
        image: "/about-images/person 1.png",
        name: "Javena Melo",
        position: "Founder, Director",
    },
    {
        image: "/about-images/person 2.png",
        name: "Paul Honson",
        position: "Head Technician",
    },
    {
        image: "/about-images/person 3.png",
        name: "Devon Lane",
        position: "Technician",
    },
    {
        image: "/about-images/person 4.png",
        name: "Jalen Davies",
        position: "Marketing Manager",
    },
    {
        image: "/about-images/person 5.png",
        name: "Kylee Danford",
        position: "Sales Manager",
    },
    {
        image: "/about-images/person 6.png",
        name: "Luisa Wilson",
        position: "Support Assistant",
    },  
];

const Teams: React.FC = () => {
    return (
        <div className=" py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto py-10">
            {teams.map((team, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={team.image} alt={team.name} className="w-40 h-40 mb-4 " />
                    <div className="bg-black text-white text-center p-3">                        
                    <h2 className="text-whte text-2xl font-semibold mb-4">{team.name}</h2>
                    <p className=" text-white text-base text-center">{team.position}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Teams;