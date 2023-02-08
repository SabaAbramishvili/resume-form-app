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
import Form1 from "./Form1";
import Resume from "./Resume";

export default function Page({ aa }) {
  const [value, setValue] = useState(0);
  const changed = () => {
    // console.log(value);
    return value;
  };
  function stuff(e) {
    let i = value + 1;
    setValue(i);
  }
  // console.log(value);
  return (
    <div className="h-fit flex flex-row justify-between">
      <Form1 aa={(e) => stuff(e)} />
      <Resume changed={changed} />
    </div>
  );
}
