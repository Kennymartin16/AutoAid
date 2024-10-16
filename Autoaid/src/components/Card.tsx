// import React from "react";

// function Card(props) {
//   const label = props.label;
//   const width = props.width;
//   const height = props.height;
//   const Image = props.Image;
//   return (
//     <div className=" flex flex-col bg-white p-4 hover:bg-primary hover:text-white cursor-pointer rounded-md w-60 h-52">
//       {Image}
//       {label}
//     </div>
//   );
// }

// export default Card;

import React, { ReactElement } from "react";

interface CardProps {
  label?: string;
  width?: number;
  height?: number;
  image?: string | ReactElement;
}

const Card: React.FC<CardProps> = ({
  label,
  width = 240,
  height = 208,
  image,
}) => {
  return (
    <div
      className="flex flex-col 
      text-dark-gray
      items-center justify-center  bg-white px-4 hover:bg-primary hover:text-white cursor-pointer rounded-md"
      style={{ width, height }}
    >
      {image && (
        <div className="mb-2 text-dark-gray hover:text-white">
          {typeof image === "string" ? (
            <img src={image} alt={label} className="" />
          ) : (
            React.cloneElement(image, { className: "w-full h-auto" })
          )}
        </div>
      )}
      {label && <div className="text-lg font-semibold">{label}</div>}
    </div>
  );
};

export default Card;
