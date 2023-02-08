import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, React } from "react";
import isEqual from "react-fast-compare";
import { useDebouncedCallback } from "use-debounce";
import Navbar from "./Navbar";
import correcticon from "./Images/correcticon.svg";
import erroricon from "./Images/erroricon.svg";
import Inputs from "./Inputs";
import Input2 from "./Input2";

export default function Resume() {
  return (
    <div className="w-[42.7%] h-fit bg-white flex flex-row justify-center box-border font-hel pb-20">
      <div className="w-[82%] h-screen bg-sky-100 flex flex-col"></div>
    </div>
  );
}
