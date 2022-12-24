import React from "react";

const Button = (props) => {
  return (
    <button
      className="outline-0 border-[1px] border-black text-white cursor-pointer bg-pink-900 p-[4px] "
      type={props.type || "button"} //tu props type undifined iqneba mashin alternativaa 'button'-i
      onClick={props.onClick} //mivigot hendler funqcia
    >
      {props.children}
    </button>
  );
};

export default Button;
