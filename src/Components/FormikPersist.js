import { Formik, Form, Field, useFormikContext } from "formik";
import { useEffect, useRef, React } from "react";
import isEqual from "react-fast-compare";

const FormikPersist = ({ name, doit }) => {
  // console.log("''''''''''''''''''''''''");
  const { values, setValues } = useFormikContext();
  // console.log(values);
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
        doit("changed");
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
