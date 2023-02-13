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
  name: Yup.string()
    .min(2, "Too Short!")
    .matches(nameRegex, "ქართული ასოები")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .matches(nameRegex, "ქართული ასოები")
    .required("Required"),
  photo: Yup.string().required("Required"),
  email: Yup.string()
    .matches(mailRegex, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("Required"),
  phone_number: Yup.string()
    .matches(numRegex, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
    .required("შეიყვანეთ"),
});

//

// console.log(document.querySelector("#photo").value);

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
          <div className="w-[72%] h-screen bg-bgGray flex flex-col">
            <Formik
              initialValues={{
                name: "",
                surname: "",
                photo: "",
                about_me: "",
                email: "",
                phone_number: "",
                position: "",
                employer: "",
                jobStartDate: "",
                jobEndDate: "",
                jobDescription: "",
                education: "",
                degree: "",
                eduEndDate: "",
                eduDescription: "",
                experienceNumber: 0,
                educationNumber: 0,
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
                  <div className="wrapper ">
                    {InputElement(
                      "text",
                      "name",
                      "სახელი",
                      "მინიმუმ 2 ასო, ქართული ასოები",
                      "ანზორ",
                      errors.name,
                      touched.name,
                      2,
                      "text",
                      "surname",
                      "გვარი",
                      "მინიმუმ 2 ასო, ქართული ასოები",
                      "მუმლაძე",
                      errors.surname,
                      touched.surname
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
                            localStorage.setItem(
                              "img",
                              document.querySelector("#photo").value
                            );
                            localStorage.setItem("photo", reader.result);
                            const dataUrl = reader.result;
                            localStorage.setItem("myFile", dataUrl);
                            setFieldValue("photo", reader.result);
                          });
                        }}
                      />
                    </label>
                  </div>

                  <div className="wrapper ">
                    {InputElementLarge(
                      "about_me",
                      "ჩემ შესახებ (არასავალდებულო)",
                      "",
                      "ზოგადი ინფო შენ შესახებ",
                      errors.about_me,
                      touched.about_me,
                      values.about_me,
                      (e) => {
                        setFieldValue("about_me", e.target.value);
                        setFieldTouched("about_me", true);
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
                      "anzorr666@redberry.ge",
                      errors.email,
                      touched.email,
                      1
                    )}
                  </div>
                  <div className="wrapper">
                    {InputElement(
                      "text",
                      "phone_number",
                      "მობილურის ნომერი",
                      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
                      "+995 551 12 34 56",
                      errors.phone_number,
                      touched.phone_number,
                      1
                    )}
                  </div>

                  <div className="flex justify-end mt-16">
                    <button
                      type="submit"
                      className="bg-buttonIndigo text-white py-3 px-8 rounded-md hover:bg-buttonIndigoLight tracking-widest"
                    >
                      შემდეგი
                    </button>
                  </div>
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
