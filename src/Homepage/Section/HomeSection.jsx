import React from "react";
import VerticalCarousel from "./HomeSection/Components/VerticalCarousel";
import award from "../../assets/Images/award_logo.png";
import featured from "../../assets/Images/icons_sprite.png";
import app_store from "../../assets/Images/ios_app_store.png";
import play_store from "../../assets/Images/android_app_store.png";

function HomeSection() {
  return (
    <section className="pt-[4rem]">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-[22px] font-extralight text-[#369af8] pb-1 border-b-2 border-b-[#369af8]">
            Awards
          </h2>
        </div>
        <div className="my-10">
          <img src={award} alt="awards" />
        </div>
      </div>
      <VerticalCarousel className="pb-[4rem]" />
      <div>
        <div className="flex flex-col items-center pb-[4rem]">
          <h2 className="text-[22px] font-extralight text-[#369af8] pb-1 border-b-2 border-b-[#369af8]">
            As Featured In
          </h2>
        </div>
        <div className="flex gap-2 justify-center pt-[4rem] pb-[4rem]">
          <img className="" src={featured} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center py-[4rem]">
        <div>
          <h2 className="text-[22px] font-extralight text-[#369af8] pb-1 border-b-2 border-b-[#369af8]">
            Best in Business
          </h2>
        </div>
        <div>
          <div>
            {/* <img src={app_store} alt="rating" /> */}
            <h2></h2>
            <p></p>
          </div>
          <div>
            {/* <img src={play_store} alt="phone" /> */}
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col items-center py-[6rem]">
        <h2 className="text-[#727272] text-lg font-semibold">Download the easiest way to stay informed</h2>
        <div className="flex gap-2">
          <img src={app_store} alt="rating" />
          <img src={play_store} alt="phone" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
