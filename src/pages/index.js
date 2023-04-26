import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { fetchContentfulData } from "../../redux/contentfulActions";
import Card from "../components/card/card";
import Categories from "../components/categories/categories";
import Filter from "../components/filter/filter";

const HomePage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);
  const [category, setCategory] = useState("");
  const selectedStoreFilters = useSelector(
    (state) => state.filters.selectedFilters
  );

  function handleSelectCategory(category) {
    console.log(`Selected category: ${category}`);
    setCategory(category);
  }

  function handleSelectFilter(filter) {
    console.log(filter, "index");
  }

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, [dispatch]);
  console.log(entries);

  return (
    <div>
      <div className="flex bg-gradient-to-b from-red-100 to-yellow-100 pt-10 px-44">
        <div className="py-4">
          <Categories onSelectCategory={handleSelectCategory} />
          <Filter onSelectFilter={handleSelectFilter} />
        </div>
      </div>

      <div className="flex flex-row-reverse bg-gray-100 pt-2 px-44">
        <div className="w-28 flex justify-between">
          <button className="border border-black rounded px-3">Grid</button>
          <button className="border border-black rounded px-3">List</button>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-y-8 bg-gray-100 py-10 px-44">
        {entries
          .filter((val) => {
            if (category === "") {
              return val;
            } else {
              return val.fields.category === category;
            }
          })
          .filter((val) => {
            console.log(selectedStoreFilters, "from index.js");
            if (selectedStoreFilters.length === 0) {
              return val;
            } else {
              return selectedStoreFilters.includes(val.fields.type);
            }
          })
          .map((val) => {
            return (
              <Card
                imgUrl={val.fields.imageUrl}
                title={val.fields.name}
                type={val.fields.type}
                des={val.fields.des}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;