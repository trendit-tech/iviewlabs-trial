import React from "react";

const Card = (props) => {
  return (
      <div className="w-80 rounded overflow-hidden shadow-lg" key={props.title}>
        <img
          className="w-full h-32 object-cover object-center"
          src={props.imgUrl}
          alt={props.title}
        />
        <div className="px-3 py-3 bg-white">
          <p className={`${props.type === "Pescatarian" ? 'text-red-500' : 'text-green-500'} text-base font-semibold`}>{props.type}</p>
          <p className="font-bold mb-2">{props.title.toLowerCase().slice(0,35)}</p>
          <p className="text-gray-500 text-base">{props.des.slice(0,86)}.</p>
        </div>
      </div>
  );
};

export default Card;