import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { fetchContentfulData } from "../../redux/actions/contentfulActions";
import Card from "../components/card/card";
import Categories from "../components/categories/categories";
import Filter from "../components/filter/filter";
import Loader from "../components/loader/loader";
import View from "../components/grid-list-view/view";
import { useRouter } from "next/router";
import { getCountryData } from "../helpers/availableLocales";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);
  const loading = useSelector((state) => state.contentful.isLoading);
  const category = useSelector((state) => state.category.selectedCategory);
  const view = useSelector((state) => state.view.view);
  const selectedStoreFilters = useSelector(
    (state) => state.filters.selectedFilters
  );

  const handleApiCall = () => {
    let countryLocale = getCountryData();
    const isPreview =
      router.query.preview === undefined ? false : router.query.preview;
    dispatch(fetchContentfulData(isPreview, countryLocale));
  };

  useEffect(() => {
    if (!router.isReady) return;
    handleApiCall();
  }, [router.isReady, dispatch]);

  return (
    <>
      <div>
        <div className="flex bg-gradient-to-b from-red-100 to-yellow-100 pt-5 sm:pt-10 px-5 sm:px-32">
          <div className="py-2 sm:py-4">
            <Categories />
            <Filter />
          </div>
        </div>

        <View />
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
                    id={val.sys.id}
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