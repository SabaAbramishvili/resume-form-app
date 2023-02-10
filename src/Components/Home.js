import React from "react";
import { useNavigate } from "react-router-dom";
// import homePhoto from "./Images/home.svg";
import logo from "./Images/logo.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className=" h-screen bg-no-repeat bg-cover bg-center bg-homePage3 box-border font-hel">
      <div className="h-screen w-screen flex flex-col items-center">
        <div className="w-[93%] h-[90px] flex flex-col ">
          <img
            src={logo}
            className="w-[236px] h-[38]px text-left my-[25px]"
          ></img>
          <div className="bg-black w-93% h-[1px]"></div>
        </div>
        <div className="h-screen w-screen flex justify-center items-center ">
          <button
            onClick={() => navigate("/Page1")}
            className=" w-[464px] h-[60px] bg-black rounded-lg mt-[-90px]"
          >
            <p className="text-lg  bg-black text-white font-helBold">
              {"ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
