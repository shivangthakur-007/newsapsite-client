import React from "react";
import Grocerycenter from "./Grocerycenter.jsx";
import GroceryComponents from "./GroceryFooter.jsx";
import GroceryHeader from "./GroceryHeader";

function Grocery() {
  return (
    <>
      <GroceryHeader />
      <Grocerycenter />
      <GroceryComponents />
    </>
  );
}

export default Grocery;
