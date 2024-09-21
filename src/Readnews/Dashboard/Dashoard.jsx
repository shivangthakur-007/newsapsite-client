import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { CategoryItems } from "./CategoryItems";
import { Link } from "react-router-dom";

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
      <div className="drawer flex fixed items-center shadow-md z-40 h-[64px]">
        <input type="checkbox" id="my-drawer" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer">
            <FiMenu
              onClick={changewidth}
              size={"32px"}
              className="font-bold m-4"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu text-base-content ">
            <li className="text-lg flex flex-row">
              <button>English</button>
              <button>Hindi</button>
            </li>
            <li className="">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={28} />
              </button>
            </li>
            <span className="pb-2">CATEGORIES</span>
            <ul className="text-lg px-2 ">
              {CategoryItems.map((li) => {
                return (
                  <Link key={li.id} to={`/read/${li.category}`}>
                    <li>{li.value}</li>
                  </Link>
                );
              })}
            </ul>
          </ul>
        </div>
        <div className="relative left-[42%]">
          <a href="/">
            <img src="" alt="newsapsite" />
          </a>
        </div>
      </div>
  );
}

export default Dashoard;
