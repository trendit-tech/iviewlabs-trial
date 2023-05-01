import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentfulData } from "../../../redux/contentfulActions";
import Link from "next/link";

const recipieId = () => {
  const router = useRouter();
  const entries = useSelector((state) => state.contentful.entries);
  const dispatch = useDispatch();
  const recipie_id = router.query.recipieId;
  useEffect(() => {
    dispatch(fetchContentfulData());
  }, [dispatch]);

  return (
    <div>
      {entries?.map((val) =>
        val.fields.id === recipie_id ? (
          <div className="bg-gray-100">
            <div className="bg-gradient-to-b from-red-100 to-yellow-100 pt-5 pb-4 sm:pt-10 px-5 sm:px-32">
              <h3 className="font-bold text-2xl">
                {val.fields.name.toLowerCase()}
              </h3>
            </div>
            <div className="px-5 sm:px-32 py-5">
              <Link href={"/"}>
                <p className="w-3/5 text-blue-700 underline">
                  <i class="fa-solid fa-arrow-left-long"></i> Go Back
                </p>
              </Link>
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="w-6/12">
                <div className="flex space-x-5 pb-5">
                  <p className="text-green-600">{val.fields.category}</p>
                  <p className="text-red-500">{val.fields.type}</p>
                </div>
                <div>
                  <img
                    className="w-full h-80 object-cover object-center border border-gray-500"
                    src={val.fields.image.fields.file.url}
                  />
                </div>

                <div className="pt-5">
                  <p>{val.fields.des}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default recipieId;
