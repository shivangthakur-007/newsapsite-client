import React from "react";
import inshort_footer from "../../assets/Images/logo_footer.png"

function Homefooter() {
  return (
    <footer className="bg-[#444444] opacity-[87%] py-[4rem] px-[12rem] text-[16px] flex text-white">
      <ul className="flex flex-col gap-4 w-[50%]">
        <a href="">
          <li>Terms & Conditions</li>
        </a>
        <a href="">
          <li>Privacy Policy</li>
        </a>
        <a href="">
          <img
            className="w-[60%] py-[4px]"
            src={inshort_footer}
            alt="inshorts_foot"
          />
        </a>
        <a href="" className="text-[#727272]">
          <li>Inshorts Pte. Ltd</li>
          <li>
            <p>© COPYRIGHT 2024</p>
          </li>
        </a>
      </ul>
      <ul className="flex flex-col gap-4 text-md w-[50%] pl-[20rem]">
        <a href="">
          <li>Facebook</li>
        </a>
        <a href="">
          <li>Twitter</li>
        </a>
        <a href="">
          <li>Email</li>
        </a>
      </ul>
    </footer>
  );
}

export default Homefooter;
