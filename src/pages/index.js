import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { fetchContentfulData } from "../../redux/contentfulActions";
import Card from "../components/card/card";
import Categories from "../components/categories/categories";
import Filter from "../components/filter/filter";
import { addCategory } from "../../redux/actions/actions";
import Loader from "../components/loader/loader";
import View from "../components/grid-list-view/view";

const HomePage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);
  const loading = useSelector((state) => state.contentful.isLoading);
  const category = useSelector((state) => state.filters.selectedCategory);
  const selectedStoreFilters = useSelector(
    (state) => state.filters.selectedFilters
  );
  const [view, setView] = useState("grid");

  const handleView = (viewPara) => {
    if (viewPara === "grid") {
      setView("grid");
    } else if (viewPara === "list") {
      setView("list");
    }
  };
  function handleSelectCategory(category) {
    dispatch(addCategory(category));
  }

  function handleSelectFilter(filter) {
    console.log(filter, "index");
  }

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, [dispatch]);
  console.log(entries);

  return (
    <>
      <div>
        <div className="flex bg-gradient-to-b from-red-100 to-yellow-100 pt-5 sm:pt-10 px-5 sm:px-32">
          <div className="py-2 sm:py-4">
            <Categories onSelectCategory={handleSelectCategory} />
            <Filter onSelectFilter={handleSelectFilter} />
          </div>
        </div>

        <View view={view} handleView={handleView} />

        {loading ? (
          <Loader />
        ) : (
          <div
            className={`${
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8 px-5 sm:px-32"
                : "flex flex-col gap-y-3 sm:gap-y-5 px-5 sm:px-32"
            } bg-gray-100 py-1 sm:py-2`}
          >
            {entries
              .filter((val) => {
                if (category === "") {
                  return val;
                } else {
                  return val.fields.category === category;
                }
              })
              .filter((val) => {
                if (selectedStoreFilters.length === 0) {
                  return val;
                } else {
                  return selectedStoreFilters.includes(val.fields.type);
                }
              })
              .map((val) => {
                return (
                  <Card
                    imgUrl={val.fields.image.fields.file.url}
                    title={val.fields.name}
                    type={val.fields.type}
                    des={val.fields.des}
                    view={view}
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;