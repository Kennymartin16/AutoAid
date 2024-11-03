// import React, { ReactElement } from "react";

// interface CardProps {
//   label?: string;
//   width?: number;
//   height?: number;
//   image?: string | ReactElement;
//   disableHover?: boolean;
// }

// const Card: React.FC<CardProps> = ({
//   label,
//   width = 240,
//   height = 208,
//   image,
//   disableHover = false,
// }) => {
//   return (
//     <div
//       className={`flex flex-col 
//       text-dark-gray
//       items-center justify-center  bg-white px-4 hover:bg-primary hover:text-white cursor-pointer rounded-md
//       ${!disableHover ? 'hover:bg-primary hover:text-white' : ''}`}
//       style={{ width, height }}
//     >
//       {image && (
//         <div className="mb-2 text-dark-gray hover:text-white">
//           {typeof image === "string" ? (
//             <img src={image} alt={label} className="" />
//           ) : (
//             React.cloneElement(image, { className: "w-full h-auto" })
//           )}
//         </div>
//       )}
//       {label && <div className="text-lg font-semibold">{label}</div>}
//     </div>
//   );
// };

// export default Card;


import React, { ReactElement } from "react";

interface CardProps {
  label?: string;
  width?: number;
  height?: number;
  image?: string | ReactElement;
  disableHover?: boolean; // New prop to disable hover
}

const Card: React.FC<CardProps> = ({
  label,
  width = 240,
  height = 208,
  image,
  disableHover = false, // Default to hover enabled
}) => {
  return (
    <div
      className={`flex flex-col 
      text-dark-gray
      items-center justify-center bg-white px-4 cursor-pointer rounded-md
      ${!disableHover ? 'hover:bg-primary hover:text-white' : ''}`} // Conditionally apply hover styles
      style={{ width, height }}
    >
      {image && (
        <div className={`mb-2 text-dark-gray ${!disableHover ? 'hover:text-white' : ''}`}>
          {typeof image === "string" ? (
            <img src={image} alt={label} className="" />
          ) : (
            React.cloneElement(image, { className: "w-full h-auto" })
          )}
        </div>
      )}
      {label && (
        <div className={`text-lg font-semibold ${!disableHover ? 'hover:text-white' : ''}`}>
          {label}
        </div>
      )}
    </div>
  );
};

export default Card;
