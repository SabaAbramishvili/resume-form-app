import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, React } from "react";
import isEqual from "react-fast-compare";
import Navbar from "./Navbar";
import InputField from "./Inputs/InputField";
import InputElement from "./Inputs/InputElement";
import InputElementLarge from "./Inputs/InputLargeElement";
import InputFieldLarge from "./Inputs/InputFieldLarge";
import FormikPersist from "./FormikPersist";
import { useNavigate } from "react-router-dom";

const nameRegex = /^[ა-ჰ]+$/;
const numRegex2 = /(\d{3})\)?-?\s?(\d{2})-?\s?(\d{2})-?\s?(\d{2})/;
const numRegex3 =
  /^\s*(?:\+?(\d{3}))?([-. (]*(\d{3})[-. )]*)?((\d{2})[-. ]*(\d{2})?((\d{2})[-. ]*(\d{2}))?)\s*$/;
const numRegex = /^([+]?\d{3}[-\s]?|)\d{3}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;
const mailRegex = /^[a-z0-9_-]{1,}@(redberry)\.ge/;

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

const AutoSubmitToken = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {}, [values, submitForm]);
  return null;
};

//

export default function Form1({ aa }) {
  const navigate = useNavigate();
  function stuff(e) {
    aa(0);
  }

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel ">
        <Navbar pageName={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} pageNum={"1/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[73%] h-screen bg-bgGray flex flex-col">
            {/* 
            
            */}
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                photo: "",
                personalInfo: "",
                email: "",
                number: "",
                position: "",
                employer: "",
                startDate: "",
                endDate: "",
                jobDescription: "",
                education: "",
                position2: "",
                employer2: "",
                startDate2: "",
                endDate2: "",
                jobDescription2: "",
                education2: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("'''''''");
                navigate("/page2");
              }}
            >
              {({
                errors,
                touched,
                values,
                setFieldValue,
                setFieldTouched,
              }) => (
                <Form>
                  {/* 
            
            */}

                  <div className="wrapper ">
                    {/* <div className="flex justify-between flex-col laptop:flex-row  ">
                      <div className="flex  flex-col laptop:w-[47%]">
                        <InputField
                          name={"firstName"}
                          errors={errors.firstName}
                          touched={touched.firstName}
                          label={"სახელი"}
                          hint={"მინიმუმ 2 ასო, ქართული ასოები"}
                        />
                      </div>
                      <div className="flex  flex-col laptop:w-[47%]">
                        <InputField
                          name={"lastName"}
                          errors={errors.lastName}
                          touched={touched.lastName}
                          label={"გვარი"}
                          hint={"მინიმუმ 2 ასო, ქართული ასოები"}
                        />
                      </div>
                    </div> */}
                    {InputElement(
                      "text",
                      "firstName",
                      "სახელი",
                      "მინიმუმ 2 ასო, ქართული ასოები",
                      errors.firstName,
                      touched.firstName,
                      2,
                      "text",
                      "lastName",
                      "გვარი",
                      "მინიმუმ 2 ასო, ქართული ასოები",
                      errors.lastName,
                      touched.lastName
                    )}
                  </div>
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
                        onChange={(e) => {
                          const image = e.target.files[0];
                          const reader = new FileReader();
                          reader.readAsDataURL(image);
                          reader.addEventListener("load", () => {
                            localStorage.setItem("photo", reader.result);
                            setFieldValue("photo", reader.result);
                          });
                        }}
                      />
                    </label>
                  </div>

                  <div className="wrapper ">
                    {InputElementLarge(
                      "personalInfo",
                      "ჩემ შესახებ (არასავალდებულო)",
                      "",
                      errors.personalInfo,
                      touched.personalInfo,
                      values.personalInfo,
                      (e) => {
                        setFieldValue("personalInfo", e.target.value);
                        setFieldTouched("personalInfo", true);
                      },
                      1,
                      "required"
                    )}
                  </div>
                  <div className="wrapper">
                    {InputElement(
                      "text",
                      "email",
                      "ელ.ფოსტა",
                      "უნდა მთავრდებოდეს @redberry.ge-ით",
                      errors.email,
                      touched.email,
                      1
                    )}
                  </div>
                  <div className="wrapper">
                    {InputElement(
                      "text",
                      "number",
                      "მობილურის ნომერი",
                      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
                      errors.number,
                      touched.number,
                      1
                    )}
                  </div>

                  {/* 
                

                */}
                  <button type="submit" className="bg-green-900">
                    Submit
                  </button>
                  <FormikPersist name="page1" doit={(e) => stuff(e)} />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
