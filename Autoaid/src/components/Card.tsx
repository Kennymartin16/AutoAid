import React from "react";

function Card(props) {
  const label = props.label;
  const width = props.width;
  const height = props.height;
  const Image = props.Image;
  return (
    <div className=" flex flex-col bg-white p-4 hover:bg-primary hover:text-white cursor-pointer rounded-md">
      {Image}
      {label}
      {/* {width}
      {height} */}
      <div style={{ width: `${40}px`, height: `${40}px` }}></div>
    </div>
  );
}

export default Card;
