import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { fetchContentfulData } from "../redux/contentfulActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.contentful.entries);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, [dispatch]);
  console.log(entries);

  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

export default HomePage;
