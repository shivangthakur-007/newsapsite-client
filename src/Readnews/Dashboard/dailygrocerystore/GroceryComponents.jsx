import React from "react";
import { GoArrowRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
import grocery from "../../../assets/Images/logo-no-background.png";
import groceryPayment from "../../../assets/Images/payment_method.webp";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function GroceryComponents() {
  return (
    <>
      <section>
        <div>
{/* Card */}
        </div>
      </section>
      <main className="">
        <div>
          <div>
            <GoChevronLeft />
            <GoChevronRight />
            <div>
              <h2>Recent News</h2>
            </div>
            <div>{/* Card */}</div>
          </div>
        </div>
      </main>
      <nav>Welcome to DailyUseDelivery: Your fresh Grocery Solution</nav>
      <footer className="bg-[url('./assets/Images/footer-bg.webp')]">
        <div className="flex">
          <div>
            <a href="">
              <img src={grocery} alt="" />
            </a>
            <div>
              Welcome to DailyUseDelivery, Your premier destination for
              effortless grocery shopping in Gurugram. Our mission is simple: to
              make your grocery experience as fresh, convinient, and enjoy as
              possible.
            </div>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <a href="">
                <GoArrowRight />
                <li>Home</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>About</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Contact</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Cart</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div>
            <h2>Catagories</h2>
            <ul>
              <a href="">
                <GoArrowRight />
                <li>Vegetables & Fruit</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Atta, Rice & Dal</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Beverages</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Personal Care</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Dairy, Bakery & Eggs</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Cleaning Essentials</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>frozen Foods</li>
              </a>
              <a href="">
                <GoArrowRight />
                <li>Snacks & Munchies</li>
              </a>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>Address: 1026, Sector-9, Gurgaon-122001</li>
              <li>Email: dailyusedelivery@gmail.com</li>
              <li>Phone: +91-9888533988</li>
            </ul>
            <div className="flex">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <FaCopyright /> 
            2024 Daily Use Delivery Store. All Rights Reserved.
          </div>
          <span>
            <img src={groceryPayment} alt="" />
          </span>
        </div>
      </footer>
    </>
  );
}

export default GroceryComponents;
