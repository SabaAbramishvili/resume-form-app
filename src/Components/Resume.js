import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";
import phoneicon from "./Images/phoneicon.svg";
import emailicon from "./Images/emailicon.svg";

export default function Resume({ changed }) {
  const [values1, setValues1] = useState("");

  let i = changed();
  // console.log(i);

  useEffect(() => {
    const savedForm = window.localStorage.getItem("page1");
    // console.log(savedForm);
    if (!isEqual(savedForm, values1)) {
      const parsedForm = JSON.parse(savedForm);
      setValues1(parsedForm);
      // console.log("loaded");
    }
  }, [i]);
  // console.log(values1.photo);
  return (
    <div className="w-[100%] tablet:w-[42%] h-fit bg-white flex flex-row  justify-left box-border font-hel pb-20">
      <div className="w-[8.5%]"></div>
      <div className="w-[83%] h-screen  flex flex-col mt-[74px]">
        {values1 ? (
          <div className="w-[100%] h-fit  flex flex-col ">
            <div className="flex w-[100%] h-fit flex-row mb-5">
              <div className="flex w-[62%] h-fit flex-col ">
                <div className="wrapper min-h-[36px]">
                  <p className="text-3xl font-extrabold text-orangeText">
                    {values1.firstName ? values1.firstName + " " : null}
                    {values1.lastName ? values1.lastName : null}
                  </p>
                </div>
                <div className="wrapper min-h-[74px]">
                  <div className="flex flex-row">
                    {values1.email ? (
                      <>
                        <img
                          src={emailicon}
                          alt=""
                          className={"w-[20px] h-[20px] mt-[8px] mr-2"}
                        ></img>

                        <p className="text-[22px]  font-medium text-black mb-1 ">
                          {values1.email}
                        </p>
                      </>
                    ) : null}
                  </div>
                  <div className="flex flex-row">
                    {values1.number ? (
                      <>
                        <img
                          src={phoneicon}
                          alt=""
                          className={"w-[20px] h-[20px] mt-[8px] mr-2"}
                        ></img>

                        <p className="text-[22px]  font-medium text-black mb-1">
                          {values1.number}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="wrapper h-fit mb-0">
                  {values1.personalInfo ? (
                    <>
                      <p className="text-lg h-fit font-bold text-orangeText mb-4">
                        {"ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
                      </p>
                      <p className=" text-black h-fit w-[100%] text-[16px] font-medium  mb-3 ">
                        {values1.personalInfo}
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="flex w-[38%] h-fit flex-col ">
                <div className="flex w-fit h-fit flex-col ">
                  {values1.photo ? (
                    <img
                      src={values1 ? values1.photo : null}
                      alt=""
                      className={"w-[100%] aspect-square rounded-full"}
                    ></img>
                  ) : null}
                </div>
              </div>
            </div>
            {values1.firstName &&
            values1.lastName &&
            values1.photo &&
            values1.photo &&
            values1.photo ? (
              <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="w-[8.5%]"></div>
    </div>
  );
}
