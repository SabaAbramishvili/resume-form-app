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

import FormikPersist from "./FormikPersist";
const nameRegex = /^[ა-ჰ]+$/;
const numRegex = /(\d{3})\)?-?\s?(\d{2})-?\s?(\d{2})-?\s?(\d{2})/;
const mailRegex = /^[a-zA-Z]{1,}@(redberry)\.ge/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .matches(nameRegex, "ქართული ასოები")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .matches(nameRegex, "ქართული ასოები")
    .required("Required"),
  photo: Yup.string().required("Required"),
  email: Yup.string()
    .matches(mailRegex, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("Required"),
  email: Yup.string()
    .matches(mailRegex, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("Required"),
  number: Yup.string()
    .matches(numRegex, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
    .required("შეიყვანეთ"),
});

// const FormikPersist = ({ name }) => {
//   console.log("''''''''''''''''''''''''");
//   const { values, setValues } = useFormikContext();
//   const { touched, setTouched } = useFormikContext();
//   console.log(touched);
//   const prefValuesRef = useRef();
//   console.log(values);
//   const onSave = (values) => {
//     window.localStorage.setItem(name, JSON.stringify(values));
//   };
//   useEffect(() => {
//     const savedForm = window.localStorage.getItem(name);
//     if (savedForm) {
//       const parsedForm = JSON.parse(savedForm);
//       prefValuesRef.current = parsedForm;
//       setValues(parsedForm);
//     }
//   }, [name, setValues]);

//   useEffect(() => {
//     if (!isEqual(prefValuesRef.current, values)) {
//       const timeout = setTimeout(() => {
//         onSave(values);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [values]);

//   useEffect(() => {
//     prefValuesRef.current = values;
//   });

//   return null;
// };

const AutoSubmitToken = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {
    console.log(values);
  }, [values, submitForm]);
  return null;
};

//

export default function Form1() {
  return (
    <>
      <div className="w-[57.3%] h-fit bg-bgGray flex flex-row justify-center box-border font-hel pb-20">
        <div className="w-[73%] h-screen bg-bgGray flex flex-col">
          <Navbar pageName={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} />
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              photo: "",
              personalInfo: "",
              email: "",
              number: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log("'''''''");
            }}
          >
            {/*  
                
                
                */}
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <div className="wrapper ">
                  <div className="flex justify-between">
                    <div className="flex flex-col w-[calc(50%-28px)]">
                      <Inputs
                        name={"firstName"}
                        errors={errors.firstName}
                        touched={touched.firstName}
                        label={"სახელი"}
                        hint={"მინიმუმ 2 ასო, ქართული ასოები"}
                      />
                    </div>
                    <div className="flex flex-col w-[calc(50%-28px)]">
                      <Inputs
                        name={"lastName"}
                        errors={errors.lastName}
                        touched={touched.lastName}
                        label={"გვარი"}
                        hint={"მინიმუმ 2 ასო, ქართული ასოები"}
                      />
                    </div>
                  </div>
                </div>
                {/*  
                
            
                */}
                <div className="mb-12 flex flex-row">
                  <p
                    className={
                      errors.photo && touched.photo
                        ? "text-redText text-[18px] font-semibold mr-4"
                        : "text-black text-[18px] font-semibold mr-4"
                    }
                  >
                    პირადი ფოტოს ატვირთვა
                  </p>
                  <label
                    for="photo"
                    className="flex flex-col items-center justify-center w-[107px] h-[27px] bg-[rgba(14,128,191,1)]  rounded-md cursor-pointer text-white font-normal text-sm"
                  >
                    ატვირთვა
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      className="hidden"
                      onChange={(event) => {
                        console.log(event.currentTarget.files[0]);
                        setFieldValue(
                          "photo",
                          document.querySelector("#photo").value
                        );
                      }}
                    />
                  </label>
                </div>

                <div className="wrapper ">
                  <Input2
                    name={"personalInfo"}
                    errors={errors.personalInfo}
                    touched={touched.personalInfo}
                    label={"ჩემ შესახებ (არასავალდებულო)"}
                    hint={""}
                    thicc={"thicc"}
                    setValue={(e) => {
                      setFieldValue("personalInfo", e.target.value);
                    }}
                    value={values.personalInfo}
                  />
                </div>
                <div className="wrapper">
                  <Inputs
                    name={"email"}
                    errors={errors.email}
                    touched={touched.email}
                    label={"ელ.ფოსტა"}
                    hint={"უნდა მთავრდებოდეს @redberry.ge-ით"}
                  />
                </div>
                <div className="wrapper">
                  <Inputs
                    name={"number"}
                    errors={errors.number}
                    touched={touched.number}
                    label={"მობილურის ნომერი"}
                    hint={
                      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                    }
                  />
                </div>

                {/* 
                

                */}
                <button type="submit" className="bg-green-900">
                  Submit
                </button>

                <FormikPersist name="our-form" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
