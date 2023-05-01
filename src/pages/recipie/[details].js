import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

const details = () => {
  const contentful = require("contentful");
  const router = useRouter();
  const [data, setData] = useState([]);
  const recipie_id = router.query.details;

  const func = () => {
    let client;
    const isPreview =
      router.query.preview === undefined ? false : router.query.preview;

    if (isPreview) {
      client = contentful.createClient({
        space: space,
        environment: "master",
        accessToken: previewAccessToken,
        host: "preview.contentful.com",
      });
    } else {
      client = contentful.createClient({
        space: space,
        accessToken: accessToken,
      });
    }
    client
      .getEntry(recipie_id)
      .then((entry) => setData(entry))
      .catch(console.error);
  };
  useEffect(() => {
    if (!router.isReady) return;
    func();
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
        <div className="flex flex-col items-center py-8">
          <div className="w-6/12">
            <div className="flex space-x-5 pb-5">
              <p className="text-green-600 font-semibold">
                {data.fields?.category}
              </p>
              <p className="text-red-500 font-semibold">{data.fields?.type}</p>
            </div>
            <div>
              <img
                className="w-full h-80 object-cover object-center border border-gray-500"
                src={data.fields?.image.fields.file.url}
              />
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

export default details;
