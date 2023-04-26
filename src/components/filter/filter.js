import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addFilter, emptyArray} from "../../../redux/actions/actions"
const filters = [
  { label: "Vegan", value: "vegan" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Pescatarian", value: "Pescatarian" },
];

function Filter({ onSelectFilter }) {
  const selectedStoreFilters = useSelector((state) => state.filters.selectedFilters);

  const dispatch = useDispatch();

  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleClick(filterValue) {
    if(selectedStoreFilters.includes(filterValue)){
      return
    }else{
      const updatedFilters = [...selectedFilters, filterValue];
      setSelectedFilters(updatedFilters);
      dispatch(addFilter(filterValue));
    }
  
  }

  function handleClearFilters() {
    setSelectedFilters([]);
    onSelectFilter("");
    dispatch(emptyArray());
    console.log(selectedStoreFilters);

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

export default Filter;