import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import Dashoard from "./Dashoard";
import Homefooter from "../../Homepage/Footer/Homefooter";
import { useParams } from "react-router-dom";
import UseCategory from "./Category/UseCategory";

function Category() {
  const { useparam } = useParams();
  const { isLoading, data, isError, error } = UseCategory(useparam);
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  if (isError) {
    <h2>{error.message}</h2>;
  }
  return (
    <div className="bg-white flex flex-col gap-[4rem]">
      <Dashoard />
      <div className="flex flex-col gap-4 items-center justify-center">
        {data?.data.news.map((h) => {
          return <NewsCard key={h._id} data={h} />;
        })}
      </div>
      <Homefooter />
    </div>
  );
}

export default Category;
