import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import phone from "../../assets/Images/phone.jpg";
import app_store from "../../assets/Images/ios_app_store.png";
import play_store from "../../assets/Images/android_app_store.png";

function HomeHeader() {
  return (
    <div className="flex flex-col pb-[4rem]">
      <header className="flex mt-5 mb-4 items-center mx-[15%]">
        <div className="flex basis-[50%]">
          <img className="w-[50%]" src={logo} alt="inshorts" />
        </div>
        <div className="flex list-none gap-10 text-md basis-[50%] justify-end">
          <Link to="/read" target="_blank">
            <h2 className="hover:text-[#4c94dc] underline">Read Now</h2>
          </Link>
          <Link to="/blog" target="_blank">
            <h2 className="hover:text-[#4c94dc] underline ">Blog</h2>
          </Link>
        </div>
      </header>
      <div className="flex">
        <div className="flex basis-[50%] items-center justify-center">
          <img className="w-[50%]" src={phone} alt="newsarticle" />
        </div>
        <div className="flex gap-5 basis-[50%] justify-start flex-col pt-[110px] pr-[140px]">
          <h2 className="text-[30px] text-[#369af8] leading-[33px] font-normal">
            Stay informed in 60 words.
          </h2>
          <p className="text-[18px] text-[#727272] leading-[28px]">
            We understand you don't have time to go through long news articles
            everday so we cut the clutter and deliver them in 60 words shorts.
            short news for the mobile generation.
          </p>
          <div className="flex">
            <button>
              <img src={app_store} alt="app_store" />
            </button>
            <button>
              <img src={play_store} alt="play_store" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
