import React from "react";
import { CiSearch } from "react-icons/ci";
import { FcMenu } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import {
  FaHeart,
  FaLuggageCart,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import grocery from "../../../assets/Images/logo-no-background.png";

function Grocery() {
  return (
    <>
      <header className="gr text-[16px] py-[10px] bg-[#26901B] text-white">
        <div className="px-[12px] flex justify-between flex-wrap">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div>Buy one get one free on first order</div>
            <span>|</span>
            <a href="/" className="flex items-center">
              <FaLuggageCart />
              <h2>Track your Order</h2>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h3>Wishlisht</h3>
            <span>|</span>
            <h3>Checkout</h3>
          </div>
        </div>
      </header>
      {/* main */}
      <main className="px-[14px]">
        <div className="py-[30px] flex items-center justify-between">
          <a href="">
            <img className="max-h-[61px]" src={grocery} alt="" />
          </a>
          <div className="p-[10px] text-white bg-[#ffffff] flex items-center gap-1">
            <CiSearch className="" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search For Products..."
              className="py-[13px] pr-[24px]"
            />
          </div>
          <div>
            <h2>Call Us</h2>
            <h3>+91-9888533988</h3>
          </div>
          <div className="flex items-center">
            <button className="pl-[1px] pr-[6px]">
              <FaUser />
            </button>
            <button className="pl-[1px] pr-[6px] flex z-10 items-center">
              <FaHeart />
              <span className="relative bottom-[10px] right-[8px] z-40">0</span>
            </button>
            <button className="pl-[1px] pr-[6px]">
              <FaShoppingBasket />
            </button>
          </div>
        </div>
      </main>
      <section>
        <div>
          <div>
            <span>
              <FcMenu /> Browser All Categories
            </span>
            <span>
              <GoChevronDown />
            </span>
          </div>
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="">
              <li>Cart</li>
            </a>
          </ul>
        </div>
        <div>
          <div>
            <FaEnvelope />
          </div>
          <div>
            <span>Email Us</span>
            <span>dailyUsedelivery@gmail.com</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Grocery;
