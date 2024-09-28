import React from "react";
import { CiSearch } from "react-icons/ci";
import menuBar from "../../../assets/Images/menu_20dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";
import { FaEnvelope, FaRupeeSign } from "react-icons/fa";
import { GoArrowRight, GoChevronDown, GoChevronUp } from "react-icons/go";
import {
  FaHeart,
  FaLuggageCart,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import "../dailygrocerystore/Grocerycomponent.css";
import off1 from "../../../assets/Images/off-1.webp";
import off2 from "../../../assets/Images/off-2.webp";
import frozenFoods from "../../../assets/Images/menu-14.svg";
import grocery from "../../../assets/Images/logo-no-background.png";
import GroceryComponents from "./GroceryComponents";

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
      <section className="py-[15px]">
        <div className="flex items-center justify-between px-[12px]">
          <div className="flex justify-between items-center gap-[2rem]">
            <div className="bg-[#26901B] gap-2 mr-[30px] pt-[12px] pr-[24px] rounded-[12px] pb-[12px] pl-[18px] text-white flex items-center">
              <span className="flex gap-2 text-[16px] items- font-medium">
                <img src={menuBar} alt="" sizes={22} />
                Browser All Categories
              </span>
              <GoChevronDown size={20} />
            </div>
            <ul className="flex mx-[30px] justify-around gap-8 text-[#555555] font-medium text-[18px]">
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
          <div className="flex items-center gap-3">
            <div className="text-[#26901B]">
              <FaEnvelope size={30} />
            </div>
            <div className="flex flex-col text-[#191919]">
              <span className="text-[17px]">Email Us</span>
              <span className="font-bold text-[18px]">
                dailyUsedelivery@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <aside className="px-[12px]">
        <div className="p-[12px]">
          <div className="flex items-center bg-[url('./assets/Images/slider-scaled.jpg')] bg-cover">
            <div className="">
              <ul className="mr-[26px] flex flex-col mx-[20px] my-[20px]">
                <a href="">
                  <li className="lipad">Vegetables & fruit</li>
                </a>
                <a href="">
                  <li className="lipad flex items-center gap-2">
                    <img src={frozenFoods} className="" alt="" />
                    <span>Frozen foods</span>
                  </li>
                </a>
                <a href="">
                  <li className="lipad">Beverages</li>
                </a>
                <a href="">
                  <li className="lipad">Dairy, Backery & Eggs</li>
                </a>
                <a href="">
                  <li className="lipad">Snacks & Munchies</li>
                </a>
                <a href="">
                  <li className="lipad">Personal Care</li>
                </a>
                <a href="">
                  <li className="lipad">Cleaning Essentials</li>
                </a>
                <a href="">
                  <li className="lipad">Atta, Rice & Dal</li>
                </a>
              </ul>
            </div>
            <div className="pl-[80px]">
                <div className="flex flex-col w-[70%] ">
                  <span className="bg-[#EEFFEC] text-[#26901B] px-[22px] py-[6px] text-[16px] rounded-[14px]">
                    100% organic Food
                  </span>
                  <h2 className="fontf text-[#151414] text-[45px] font-semibold">100% Fresh Grocery Combo Pack</h2>
                  <p className="text-[#151414] text-[16px]">Sumptuous filling, and temptingly healthy.</p>
                  <div className="flex">
                  <span>From</span>
                    <FaRupeeSign />
                    50.00
                  </div>
                  <a href="" className="flex gap-1">
                    Shop Now <GoArrowRight />
                  </a>
                </div>
              <div></div>
            </div>
          </div>
        </div>
      </aside>
      <section>
        <div>
          <div>
            <span>Popular Products</span>
          </div>
          <div>Top Rating / Top</div>
        </div>
        <div>{/* <Card /> */}</div>
      </section>
      <main>
        <div>
          <div>
            <h2>Latest Product</h2>
            <div>
              <GoChevronDown />
              <GoChevronUp />
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <ul>
                <a href="">
                  <li>Recent</li>
                  <span>/</span>
                </a>
                <a href="">
                  <li>Best Seller</li>
                  <span>/</span>
                </a>
                <a href="">
                  <li>Top</li>
                  <span>/</span>
                </a>
                <a href="">
                  <li>New Arrivals</li>
                  <span>/</span>
                </a>
                <a href="">
                  <li>Top Rating</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div>
          <h3>Deals Of the Day</h3>
          <a href="">See All</a>
        </div>
        <div>{/* Card */}</div>
      </section>
      <main className="flex">
        <div className="">
          <div>
            <span>Save 30% OFF</span>
            <h2>Fresh Premium Rice Big discount</h2>
          </div>
          <div>
            <img src={off1} alt="" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fresh Premium Rice Big discount</h2>
            <div className="">
              <FaRupeeSign />
              23.02
              <span>
                <FaRupeeSign />
                32.00
              </span>
              <div>
                <img src={off2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <GroceryComponents />
    </>
  );
}

export default Grocery;
