import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNonFilterValue } from "../../../redux/actions/actions";
const categories = [
  "Entrees",
  "Mains",
  "Salads",
  "Sides",
  "Desserts",
  "Drinks",
];

function Categories({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const entries = useSelector((state) => state.contentful.entries);
  const dispatch = useDispatch();
  function handleClick(category) {
    dispatch(addNonFilterValue());
    setSelectedCategory(category);
    onSelectCategory(category);
    let arr3 = ["vegan", "vegetarian", "Pescatarian"];

    let arr = entries.filter((val) => {
      return val.fields.category === category;
    });
    let arr2 = arr.map((val) => {
      if (val.fields.type == "vegan" || "vegetarian" || "Pescatarian") {
        return val.fields.type;
      }
    });
    const nonSimilarValues = arr3
      .filter((value) => !arr2.includes(value))
      .concat(arr2.filter((value) => !arr3.includes(value)));
    dispatch(addNonFilterValue(nonSimilarValues));
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