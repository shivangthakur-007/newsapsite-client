import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { CategoryItems } from "./CategoryItems";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

function Dashoard() {
  function changewidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "14.5rem";
  }
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }
  return (
    <div className="drawer flex fixed items-center shadow-md h-[64px] bg-white z-40">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content flex">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <FiMenu
            onClick={changewidth}
            size={"32px"}
            className="font-bold m-4"
          />
        </label>
      </div>
      <div className="drawer-side text-md text-white">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="flex flex-col">
          <ul className="flex flex-row items-center mx-2 gap-6 my-5">
            <li className="flex flex-row pr-3 gap-2 text-lg text-gray-900 ">
              <button className="mb-2 px-2 rounded-md py-1 bg-gray-500 ">English</button>
              <button className="mb-2 px-2 rounded-md py-1 bg-gray-500 ">Hindi</button>
            </li>
            <li className="">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={28} />
              </button>
            </li>
          </ul>
          <div className="flex flex-col pl-2">
            <span className="pb-4">CATEGORIES</span>
            <ul className="pl-6 flex flex-col gap-4 font-thin">
              {CategoryItems.map((li) => {
                return (
                  <Link key={li.id} to={`/read/${li.category}`}>
                    <li>{li.value}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative left-[40%] w-[186px]">
        <a href="/">
          <img src={logo} alt="newsapsite" />
        </a>
      </div>
    </div>
  );
}

export default Dashoard;
