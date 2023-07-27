import React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<any>> = ({
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        "rounded-lg border-2 p-2 font-extrabold text-white bg-green" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </button>
  );
};
