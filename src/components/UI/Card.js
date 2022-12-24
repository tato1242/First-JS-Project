import React from "react";

const Card = (props) => {
  return (
    <div className="p-4 w-[90%] max-w-[640px] text-black bg-white block font-bold mb-2 block w-full p-1 mb-2 border  rounded-2xl">
      {props.children}
    </div>
  );
};
// 6 xazi atrigerebs addUsershi cardshi rac weria magas
export default Card;
