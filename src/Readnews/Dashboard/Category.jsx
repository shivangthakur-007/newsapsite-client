import React, { useEffect } from "react";
import Dashoard from "./Dashoard";
import Homefooter from "../../Homepage/Footer/Homefooter";
import Categorywork from "./Category/Categorywork";

function Category() {
  return (
    <div className="">
      <Dashoard />
      <Categorywork />
      <Homefooter/>
    </div>
  );
}

export default Category;
