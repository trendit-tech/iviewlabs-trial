import { useState } from "react";

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

  function handleClick(category) {
    setSelectedCategory(category);
    onSelectCategory(category);
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