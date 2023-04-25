import { useState } from "react";

const filters = [
  { label: "Vegan", value: "vegan" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Pescatarian", value: "Pescatarian" },
];

function FilterBy({ onSelectFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleClick(filterValue) {
    const filterIndex = selectedFilters.indexOf(filterValue);
    if (filterIndex === -1) {
      setSelectedFilters([...selectedFilters, filterValue]);
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(filterIndex, 1);
      setSelectedFilters(updatedFilters);
    }
  }

  function handleClearFilters() {
    setSelectedFilters([]);
    onSelectFilter("");
  }

  return (
    <div className="flex mt-8 flex-wrap">
      <h2 className="text-black font-semibold pt-1">Filter by:</h2>
      <div className="ml-4">
        <button
          onClick={handleClearFilters}
          className={`border-2 border-black rounded-full text-black font-bold px-6 py-1 ${
            selectedFilters.length === 0 ? `bg-black text-white` : ""
          }`}
        >
          All
        </button>
      </div>
      {filters.map((val) => {
        return (
          <div key={val.value} className="ml-4">
            <button
              onClick={() => handleClick(val.value)}
              className={`border border-black rounded-full text-black font-semibold px-6 py-1 ${
                selectedFilters.indexOf(val.value) !== -1
                  ? `bg-black text-white`
                  : ""
              }`}
            >
              {val.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FilterBy;