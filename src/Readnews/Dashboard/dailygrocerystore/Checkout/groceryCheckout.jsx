import React from "react";
import GroceryHeader from "../GroceryHeader";
import GroceryComponents from "../GroceryFooter";
import GroceryCheck from "./GroceryCheck";

function GroceryCheckout() {
  return (
    <>
      <GroceryHeader />
      <GroceryCheck />
      <GroceryComponents />
    </>
  );
}

export default GroceryCheckout;
