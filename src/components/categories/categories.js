import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNonFilterValue,
  emptyNonFilterArray,
} from "../../../redux/actions/actions";

const categories = [
  "Entrees",
  "Mains",
  "Salads",
  "Sides",
  "Desserts",
  "Drinks",
];

function Categories({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const entries = useSelector((state) => state.contentful.entries);
  const dispatch = useDispatch();

  function handleClick(category) {
    if (selectedCategory === category) {
      // Deselect the category
      setSelectedCategory("");
      dispatch(emptyNonFilterArray());
      onSelectCategory("");
    } else {
      // Select the category
      setSelectedCategory(category);
      onSelectCategory(category);

      let filterOptions = ["vegan", "vegetarian", "pescatarian"];
      let arr = entries.filter((val) => {
        return val.fields.category === category;
      });
      let filterValues = arr.map((val) => {
        if (val.fields.type == "vegan" || "vegetarian" || "pescatarian") {
          return val.fields.type;
        }
      });
      const nonSimilarValues = filterOptions
        .filter((value) => !filterValues?.includes(value))
        .concat(filterValues.filter((value) => !filterOptions.includes(value)));
      dispatch(addNonFilterValue(nonSimilarValues));
    }
  }

  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-6 mr-3 w-32 py-2 border-b-2 border-yellow-500 text-black font-semibold ${
            selectedCategory === category ? "bg-yellow-500" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;