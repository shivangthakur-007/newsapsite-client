import React, { Fragment } from "react";

function NewsCard({ data }) {
  return (
    <div
      // onClick={() => navigate("/read", { state: { ...data } })}
      className="bg-white text-black relative top-6"
    >
      <div className="p-2 shadow-md box-border flex w-[60vw] h-[20vw]">
        <img
          className="shadow-lg m-2"
          height={"120px"}
          width={"250px"}
          src={data?.thumbnail?.secure_url}
          alt="news thumbnail"
        />
        <div className="m-2 flex flex-col">
          <div className="flex flex-col pb-2">
            <h1 className="text-lg text-justify">{data?.title}</h1>
            <h3 className="text-sm text-justify">{data?.createdby}</h3>
          </div>
          <h2 className="text-md text-justify">{data?.description}</h2>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
