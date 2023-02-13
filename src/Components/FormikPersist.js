import { Formik, Form, Field, useFormikContext } from "formik";
import { useEffect, useRef, React } from "react";
import isEqual from "react-fast-compare";
import { useState } from "react";
import { number } from "yup";

const FormikPersist = ({ name, doit }) => {
  // console.log("''''''''''''''''''''''''");
  const { values, setValues } = useFormikContext();
  const { array, setArray } = useState([]);

  // console.log(values);
  const prefValuesRef = useRef();
  const onSave = (values) => {
    if (name === "page1") {
      window.localStorage.setItem(name, JSON.stringify(values));
    } else {
      window.localStorage.setItem(name, JSON.stringify(values));

      // let index = name.charAt(name.length - 1);
      // console.log("indexxxxxxxxxxx");
      // console.log(index);

      // const obj1 = {};
      // let obj2 = Object.assign(obj1, { [index]: values });
      // console.log(obj2);
      // const arr = Array(10);
      // arr[index] = values;
      // window.localStorage.setItem(name, JSON.stringify(obj2));
      // console.log("arr = ");
      // console.log(arr);

      // setValues([inedex, values]);
      // window.localStorage.setItem(
      //   "number",
      //   JSON.stringify(values.experienceNumber)
      // );
    }
  };
  useEffect(() => {
    const savedForm = window.localStorage.getItem(name);
    if (savedForm) {
      const parsedForm = JSON.parse(savedForm);
      console.log("eeeeeeeeeeeeee");
      console.log(parsedForm);

      prefValuesRef.current = parsedForm;

      setValues(parsedForm);
    }
  }, [name, setValues]);

  useEffect(() => {
    if (!isEqual(prefValuesRef.current, values)) {
      const timeout = setTimeout(() => {
        // doit("changed");
        doit(values);

        onSave(values);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [values]);

  useEffect(() => {
    prefValuesRef.current = values;
  });

  return null;
};
export default FormikPersist;
