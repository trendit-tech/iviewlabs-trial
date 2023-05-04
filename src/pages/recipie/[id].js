import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentfulSingleData } from "../../../redux/actions/contentfulActions";
import { getCountryData } from "../../helpers/availableLocales";

const id = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const recipie_id = router.query.id;
  const isPreview = router.query.preview;
  const data = useSelector((state) => state.contentfulDetails.singleEntry);

  const handleApiCall = () => {
    let countryLocale = getCountryData();
    dispatch(fetchContentfulSingleData(isPreview, recipie_id, countryLocale));
  };

  useEffect(() => {
    if (!router.isReady) return;
    handleApiCall();
  }, [router.isReady]);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="bg-gradient-to-b from-red-100 to-yellow-100 pt-5 pb-4 sm:pt-10 px-5 sm:px-32">
          <h3 className="font-bold text-2xl">
            {data.fields?.name.toLowerCase()}
          </h3>
        </div>
        <div className="px-5 sm:px-32 py-5">
          <Link href={"/"}>
            <p className="w-3/5 text-blue-700 underline">
              <i className="fa-solid fa-arrow-left-long"></i> Go Back
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center py-10">
          <div className="w-6/12">
            <div>
              <img
                className="w-full h-80 sm:h-46 object-cover object-center border border-gray-500"
                src={data.fields?.image.fields.file.url}
              />
            </div>
            <div className="flex space-x-5 pt-3">
              <p className="text-green-600 font-semibold">
                {data.fields?.category}
              </p>
              <p className="text-red-500 font-semibold">{data.fields?.type}</p>
            </div>
            <div className="pt-5">
              <p>{data.fields?.des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default id;