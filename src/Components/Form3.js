import { Formik, Form, Field, useFormikContext, isEmptyArray } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState, React } from "react";
import isEqual from "react-fast-compare";
import Navbar from "./Navbar";
import Inputs from "./Inputs/InputField";
import Input2 from "./Inputs/InputFieldLarge";
import FormikPersist from "./FormikPersist";
import InputElement from "./Inputs/InputElement";
import InputElementLarge from "./Inputs/InputLargeElement";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import InputSelect from "./Inputs/InputSelect";
import newForm from "./newForm";

const nameRegex = /^[ა-ჰ]+$/;
const nameRegex2 = /[^\s\\].{1,}/;
const numRegex2 = /(\d{3})\)?-?\s?(\d{2})-?\s?(\d{2})-?\s?(\d{2})/;
const numRegex3 =
  /^\s*(?:\+?(\d{3}))?([-. (]*(\d{3})[-. )]*)?((\d{2})[-. ]*(\d{2})?((\d{2})[-. ]*(\d{2}))?)\s*$/;
const numRegex = /^([+]?\d{3}[-\s]?|)\d{3}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;
const mailRegex = /^[a-z0-9_-]{1,}@(redberry)\.ge/;

export default function Form3({ aa }) {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    position: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    employer: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    jobDescription: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    education: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),

    education2: Yup.string().when([], {
      is: () => filled && true,
      then: Yup.string()
        .min(2, "Too Short!")
        .required("Passphrase is required"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  const SignupSchema2 = Yup.object().shape({
    position: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    employer: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    jobDescription: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    // education: Yup.string().when([], {
    //   is: () => filled && true,
    //   then: Yup.string()
    //     .min(2, "Too Short!")
    //     .required("Passphrase is required"),
    //   otherwise: Yup.string().notRequired(),
    // }),
  });
  function stuff(formikValues) {
    // console.log(formikValues);
    changeFilled(formikValues);
    aa(0);
  }
  // const [show, setShow] = useState();
  const [user, setUser] = useState([]);
  const [filled, setFilled] = useState(false);
  const [show, setShow] = useState(0);
  const [errors, setErrors] = useState("");
  // console.log(filled);
  // console.log("errors = ");
  // console.log(errors);

  const changeShow = () => {
    console.log("changeshow");
    // show ? setShow(false) : setShow(true);
    setShow(show + 1);
  };

  // const changeShow = () => {
  //   console.log("changeshow");
  //   show ? setShow(false) : setShow(true);
  // };
  // const changeShow = () => {
  //   show ? setShow(false) : setShow(true);
  // };
  console.log("show = " + show);
  const changeFilled = (formikValues) => {
    console.log("experienceNumber");
    console.log(formikValues.experienceNumber);
    if (show > formikValues.experienceNumber) {
      formikValues.experienceNumber = show;
      console.log("showwwwwwwwshowwwwwwww");
    } else if (formikValues.experienceNumber > 0) {
      console.log("exxxxxxxxxxxxxxxxxexxxxxxxxxxxxxxxxx");
      setShow(formikValues.experienceNumber);
    }
  };

  // useEffect(() => {
  //   if (filled) {
  //     setShow(true);
  //   }
  // }, []);

  const fetchData = () => {
    return axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filledArray = new Array(user.length);
  for (let index = 0; index < user.length; index++) {
    filledArray[index] = { value: index, label: user[index].title };
  }
  const func = () => {
    console.log("subbbbbbbbbbb");
  };

  const newForm2 = (sub) => {
    function stuff(formikValues) {
      // console.log(formikValues);
      changeFilled(formikValues);
      aa(0);
    }
    // const [show, setShow] = useState();
    // const changeShow = () => {
    //   console.log("changeshow");
    //   show ? setShow(false) : setShow(true);
    // };
    return (
      <Formik
        initialValues={{
          position: "",
          employer: "",
          startDate: "",
          endDate: "",
          jobDescription: "",
          experienceNumber: "",
        }}
        validationSchema={SignupSchema2}
        onSubmit={(values) => {
          console.log("submitted");
          alert("submitted");
          // navigate("/page1");
        }}
      >
        {({
          errors,
          touched,
          values,
          setFieldValue,
          setFieldTouched,
          submitForm,
        }) => (
          <Form
            onChange={() => {
              // Object.values(values).every((x) => x === null || x === "")
              //   ? setErrors(null)
              //   : setErrors(errors);
              Object.values(values).every((x) => x === null || x === "")
                ? setFieldValue("experienceNumber", show)
                : setFieldValue("experienceNumber", show);
            }}
            onBlur={() => {
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors(null)
                : setErrors(errors);
            }}
          >
            {Object.values(values).every((x) => x === null || x === "") ||
            show === "false"
              ? console.log("empty")
              : console.log("not empty")}

            <div
              // className={
              //   show
              //     ? "wrapper"
              //     : Object.values(values).every((x) => x === null || x === "")
              //     ? "hidden"
              //     : "wrapper"
              // }
              className="wrapper"
            >
              <div className="wrapper">
                {InputElement(
                  "text",
                  // "experince" + show + ".position",
                  "position",
                  "თანამდებობა",
                  "მინიმუმ 2 სიმბოლო",
                  errors.position,
                  touched.position,
                  1
                )}
              </div>
              <div className="wrapper">
                {InputElement(
                  "text",
                  // "experince" + show + ".employer",
                  "employer",
                  "დამსაქმებელი",
                  "მინიმუმ 2 სიმბოლო",
                  errors.employer,
                  touched.employer,
                  1
                )}
              </div>
              <div className="wrapper">
                {InputElement(
                  "date",
                  "startDate",
                  "დაწყების რიცხვი",
                  "",
                  errors.startDate,
                  touched.startDate,
                  2,
                  "date",
                  "endDate",
                  "დამთავრების რიცხვი",
                  "",
                  errors.endDate,
                  touched.endDate
                )}
              </div>
              <div className="wrapper ">
                {InputElementLarge(
                  "jobDescription",
                  "აღწერა",
                  "",
                  errors.jobDescription,
                  touched.jobDescription,
                  values.jobDescription,
                  (e) => {
                    setFieldValue("jobDescription", e.target.value);
                    setFieldTouched("jobDescription", true);
                  },
                  1
                )}
              </div>
              {/* {console.log(values)} */}
              <button
                type="button"
                onClick={() => {
                  Object.values(values).every((x) => x === null || x === "")
                    ? setErrors(null)
                    : setErrors(errors);
                }}
                className="bg-fuchsia-600"
              >
                eee
              </button>
            </div>
            <FormikPersist
              name={"experience" + show}
              // name={"experience"}
              doit={(e) => {
                stuff(e);
              }}
            />
          </Form>
        )}
      </Formik>
    );
  };

  function createNewForms(show) {
    for (let index = 0; index < show; index++) {
      console.log(index);
      return [...Array(show)].map((e, i) => <div>{newForm2({ func })}</div>);
      // console.log("arrr");
      // console.log([...Array(show)]);
    }
  }

  // console.log("show = " + show);

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel  ">
        <Navbar pageName={"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"} pageNum={"3/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[72%] h-fit bg-bgGray flex flex-col">
            <Formik
              initialValues={{
                education: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("submitted");
                // navigate("/page1");
                alert("submitted");
              }}
            >
              {({
                errors,
                touched,
                values,
                setFieldValue,
                setFieldTouched,
                submitForm,
              }) => (
                <Form>
                  {/* 
                  
                  
                  */}
                  {/* {console.log(errors)} */}
                  {/* {console.log(touched)} */}
                  <div className="wrapper">
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "education",
                        "სასწავლებელი",
                        "მინიმუმ 2 სიმბოლო",
                        errors.education,
                        touched.education,
                        1
                      )}
                    </div>
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "employer",
                        "დამსაქმებელი",
                        "მინიმუმ 2 სიმბოლო",
                        errors.employer,
                        touched.employer,
                        1
                      )}
                    </div>
                    <div className="wrapper">
                      {InputElement(
                        "date",
                        "startDate",
                        "დაწყების რიცხვი",
                        "",
                        errors.startDate,
                        touched.startDate,
                        2,
                        "date",
                        "endDate",
                        "დამთავრების რიცხვი",
                        "",
                        errors.endDate,
                        touched.endDate
                      )}
                    </div>
                    <div className="wrapper ">
                      {InputElementLarge(
                        "jobDescription",
                        "აღწერა",
                        "",
                        errors.jobDescription,
                        touched.jobDescription,
                        values.jobDescription,
                        (e) => {
                          setFieldValue("jobDescription", e.target.value);
                          setFieldTouched("jobDescription", true);
                        },
                        1
                      )}
                    </div>
                  </div>

                  <FormikPersist
                    name="page1"
                    doit={(e) => {
                      stuff(e);
                    }}
                  />

                  <div className={"wrapper"}>
                    {
                      createNewForms(show)
                      // newForm2()
                    }
                  </div>
                  <div className="wrapper flex-row justify-between">
                    <button
                      type="button"
                      onClick={() => navigate("/page1")}
                      className="bg-sky-200"
                    >
                      უკან
                    </button>

                    <button
                      type="button"
                      onClick={() => changeShow()}
                      className="bg-sky-300"
                    >
                      kidoo
                    </button>
                    <button
                      type="button"
                      onClick={submitForm}
                      className="bg-sky-400"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
