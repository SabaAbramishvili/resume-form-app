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
import Form1 from "./Form1";
import Resume from "./Resume";

export default function Page({ doit }) {
  return (
    <div className="h-fit flex flex-row justify-between">
      <Form1 />
      <Resume />
    </div>
  );
}
