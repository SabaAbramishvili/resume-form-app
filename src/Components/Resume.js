import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";
import { useDebouncedCallback } from "use-debounce";
import Navbar from "./Navbar";
import correcticon from "./Images/correcticon.svg";
import erroricon from "./Images/erroricon.svg";
import Inputs from "./Inputs";
import Input2 from "./Input2";
import FormikPersist from "./FormikPersist";

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
              <div className="flex w-20 h-20 flex-col ">
                <img
                  src={values ? values.photo : null}
                  className=" w-[245px] h-[245px]"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[1px] flex-col bg-black"></div>
        </div>
      </div>
    </div>
  );
}
