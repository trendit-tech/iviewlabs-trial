import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { fetchContentfulData } from "../redux/contentfulActions";
import Card from "../components/card/card";
import Categories from "../components/categories/categories";
import Filter from "../components/filter/filter";

const HomePage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, [dispatch]);
  console.log(entries);

  return (
    <div>
      <div className="flex bg-gradient-to-b from-red-100 to-yellow-100 pt-12 px-28">
        <div className="py-4">
          <Categories />
          <Filter />
        </div>
      </div>
      <div className="flex flex-row-reverse bg-gray-100 pt-2 px-28">
        <div className="w-28 flex justify-between">
          <button className="border border-black rounded px-3">Grid</button>
          <button className="border border-black rounded px-3">List</button>
        </div>
      </div>
      <div class="flex justify-between flex-wrap gap-x-6 gap-y-10 bg-gray-100 py-10 px-28">
        {entries.map((val) => {
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
