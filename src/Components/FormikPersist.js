import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, React } from "react";
import isEqual from "react-fast-compare";

const FormikPersist = ({ name }) => {
  console.log("''''''''''''''''''''''''");
  const { values, setValues } = useFormikContext();
  console.log(values);
  const prefValuesRef = useRef();
  const onSave = (values) => {
    window.localStorage.setItem(name, JSON.stringify(values));
  };
  useEffect(() => {
    const savedForm = window.localStorage.getItem(name);
    if (savedForm) {
      const parsedForm = JSON.parse(savedForm);
      prefValuesRef.current = parsedForm;
      setValues(parsedForm);
    }
  }, [name, setValues]);

  useEffect(() => {
    if (!isEqual(prefValuesRef.current, values)) {
      const timeout = setTimeout(() => {
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
