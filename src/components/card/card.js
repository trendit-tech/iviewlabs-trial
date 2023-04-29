import React from "react";

const Card = (props) => {
  return (
    <>
      {props.view === "list" ? (
        <div className="flex flex-row" key={props.title}>
          <img
            className="w-full sm:w-1/3 h-40 object-cover object-center"
            src={props.imgUrl}
            alt={props.title}
          />
          <div className="px-4 py-3 bg-white w-full sm:w-2/3">
            <p
              className={`${
                props.type === "pescatarian" ? "text-red-500" : "text-green-500"
              } text-base font-semibold`}
            >
              {props.type}
            </p>
            <p className="font-bold mb-2">{props.title.toLowerCase()}</p>
            <p className="text-gray-500 text-base">{props.des}.</p>
          </div>
        </div>
      ) : (
        <div className="rounded overflow-hidden shadow-lg" key={props.title}>
          <img
            className="w-full h-32 object-cover object-center"
            src={props.imgUrl}
            alt={props.title}
          />
          <div className="px-3 py-3 bg-white">
            <p
              className={`${
                props.type === "pescatarian" ? "text-red-500" : "text-green-500"
              } text-base font-semibold`}
            >
              {props.type}
            </p>
            <p className="font-bold mb-2">
              {props.title.toLowerCase().slice(0, 35)}
            </p>
            <p className="text-gray-500 text-base">{props.des.slice(0, 86)}.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;