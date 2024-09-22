import React from "react";
import { useParams } from "react-router-dom";
import UseCategory from "./UseCategory";
import NewsCard from "../NewsCard";

function Categorywork() {
  const { useparam } = useParams();
  const { isLoading, data, isError, error } = UseCategory(useparam);
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  if (isError) {
    <h2>{error.message}</h2>;
  }
  return (
    <div className="flex flex-col items-center gap-4 relative top-12 mb-[4.5rem]">
      {data?.data.news.map((h) => {
        return <NewsCard key={h._id} data={h} className="min-h-[350px]"/>;
      })}
    </div>
  );
}

export default Categorywork;
