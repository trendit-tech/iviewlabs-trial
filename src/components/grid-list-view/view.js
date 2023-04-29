import React from "react";

const View = (props) => {
  return (
    <div className="flex flex-row-reverse bg-gray-100 pt-2 sm:pt-4 px-5 sm:px-32">
      <div className="w-20 sm:w-28 flex justify-between border border-gray-400 px-1 sm:px-2 py-2 sm:py-3">
        <button
          className={`border border-black rounded px-2 sm:px-3 ${
            props.view === "grid" ? "bg-yellow-200" : ""
          }`}
          onClick={() => props.handleView("grid")}
        >
          <i className="fa-solid fa-table-cells-large"></i>
        </button>
        <button
          className={`border border-black rounded px-2 sm:px-3 ${
            props.view === "list" ? "bg-yellow-200" : ""
          }`}
          onClick={() => props.handleView("list")}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default View;