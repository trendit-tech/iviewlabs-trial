import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addNonFilterValue,
  emptyArray,
} from "../../../redux/actions/actions";

const categories = [
  "Entrees",
  "Mains",
  "Salads",
  "Sides",
  "Desserts",
  "Drinks",
];

function Categories() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  function handleClick(category) {
    dispatch(emptyArray());
    if (selectedCategory === category) {
      dispatch(addCategory(""));
    } else {
      dispatch(addCategory(category));
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