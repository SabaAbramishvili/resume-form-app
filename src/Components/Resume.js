import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";
import phoneicon from "./Images/phoneicon.svg";
import emailicon from "./Images/emailicon.svg";

export default function Resume({ changed }) {
  const [values, setValues] = useState("");
  let i = changed();
  console.log(i);

  useEffect(() => {
    const savedForm = window.localStorage.getItem("our-form");
    // console.log(savedForm);
    if (!isEqual(savedForm, values)) {
      const parsedForm = JSON.parse(savedForm);
      setValues(parsedForm);
      console.log("loadddddddd");
    }
  }, [i]);
  // console.log(values.photo);
  return (
    <div className="w-[42.7%] h-fit bg-white flex flex-row justify-center box-border font-hel pb-20">
      <div className="w-[83%] h-screen  flex flex-col mt-[74px]">
        {values ? (
          <div className="w-[100%] h-fit  flex flex-col ">
            <div className="flex w-[100%] h-fit flex-row mb-5">
              <div className="flex w-[62%] h-fit flex-col ">
                <div className="wrapper min-h-[36px]">
                  <p className="text-3xl font-extrabold text-orangeText">
                    {values.firstName ? values.firstName + " " : null}
                    {values.lastName ? values.lastName : null}
                  </p>
                </div>
                <div className="wrapper min-h-[74px]">
                  <div className="flex flex-row">
                    {values.email ? (
                      <>
                        <img
                          src={emailicon}
                          alt=""
                          className={"w-[20px] h-[20px] mt-[8px] mr-2"}
                        ></img>

                        <p className="text-[22px]  font-medium text-black mb-1 ">
                          {values.email}
                        </p>
                      </>
                    ) : null}
                  </div>
                  <div className="flex flex-row">
                    {values.number ? (
                      <>
                        <img
                          src={phoneicon}
                          alt=""
                          className={"w-[20px] h-[20px] mt-[8px] mr-2"}
                        ></img>

                        <p className="text-[22px]  font-medium text-black mb-1">
                          {values.number}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="wrapper h-fit mb-0">
                  {values.personalInfo ? (
                    <>
                      <p className="text-lg h-fit font-bold text-orangeText mb-4">
                        {"ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
                      </p>
                      <p className=" text-black h-fit w-[100%] text-[16px] font-medium  mb-3 ">
                        {values.personalInfo}
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="flex w-[38%] h-fit flex-col ">
                <div className="flex w-[245px] h-[245px] flex-col ">
                  {values.photo ? (
                    <img
                      src={values ? values.photo : null}
                      alt=""
                      className={"w-[245px] h-[245px] rounded-full"}
                    ></img>
                  ) : null}
                </div>
              </div>
            </div>
            {values.firstName &&
            values.lastName &&
            values.photo &&
            values.photo &&
            values.photo ? (
              <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
