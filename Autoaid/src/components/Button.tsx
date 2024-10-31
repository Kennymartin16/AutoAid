import React from "react";

function Button(props) {
  const label = props.label;
  const id = props.id;

  return (
    <button id={id} className="bg-primary p-4 rounded-md font-bold">
      {label}
    </button>
  );
}

export default Button;
