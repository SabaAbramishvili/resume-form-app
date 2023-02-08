import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";

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
      <div className="w-[82%] h-screen bg-white flex flex-col mt-12">
        <div className="w-[82%] h-fit bg-white flex flex-col ">
          <div className="flex w-[100%] h-fit flex-row ">
            <div className="flex w-[62%] h-96 flex-col ">
              <div className="flex w-[100%] h-20 flex-col ">
                <p className="text-3xl font-bold text-orangeText">
                  {values ? values.firstName : null}
                  {/* {values ? values.lastName : null} */}
                </p>
              </div>
            </div>
            <div className="flex w-[38%] h-96 flex-col ">
              <div className="flex w-[245px] h-[245px] flex-col ">
                {values ? (
                  values.photo ? (
                    <img
                      src={values ? values.photo : null}
                      alt=""
                      className={"w-[245px] h-[245px] rounded-full"}
                    ></img>
                  ) : null
                ) : null}
                {/* <img
                  src={values ? values.photo : null}
                  alt=""
                  className={"w-[245px] h-[245px]"}
                ></img> */}
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[1px] flex-col bg-black"></div>
        </div>
      </div>
    </div>
  );
}
