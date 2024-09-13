import React from "react";
import "./Button1.css";

const Button1 = ({ text, type }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button className={["Button", `Button_${btnType}`].join(" ")}>
      {text || "button"}
    </button>
  );
};

export default Button1;
