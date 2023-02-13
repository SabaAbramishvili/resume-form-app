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

export default function Form2({ aa }) {
  const navigate = useNavigate();
  console.log(
    "''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''"
  );

  const SignupSchema = Yup.object().shape({
    position: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "")
      .required("Required"),
    employer: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "")
      .required("Required"),
    jobStartDate: Yup.string().required("Required"),
    jobEndDate: Yup.string().required("Required"),
    jobDescription: Yup.string().matches(nameRegex2, "").required("Required"),
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
  const [errors, setErrors] = useState();
  const [errors2, setErrors2] = useState();
  const [index, setIndex] = useState("");
  const [state, setState] = useState({});

  let err;
  if (errors != undefined) {
    let num = Object.keys(errors);
    err = errors2;
    err = { [num]: errors[num] };
    Object.keys(errors).forEach((key) => {
      console.log(key, errors[key]);
    });
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      num: errors,
    }));
  }, [setErrors]);

  if (errors != errors2) {
    let num = Object.keys(errors);

    setState((prevState) => ({
      ...prevState,
      [num]: errors,
    }));

    setErrors2(errors);
  }
  console.log("state");
  console.log(state);

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

  const NewForm2 = (index) => {
    const SignupSchema3 = Yup.object().shape({
      position: Yup.string()
        .min(2, "Too Short!")
        .matches(nameRegex2, "ქართული ასოები")
        .required("Required"),
      employer: Yup.string()
        .min(2, "Too Short!")
        .matches(nameRegex2, "ქართული ასოები")
        .required("Required"),
      jobStartDate: Yup.string().required("Required"),
      jobEndDate: Yup.string().required("Required"),
      jobDescription: Yup.string()
        .min(2, "Too Short!")
        .matches(nameRegex2, "ქართული ასოები")
        .required("Required"),
      education: Yup.string().when([], {
        is: () => filled && true,
        then: Yup.string()
          .min(2, "Too Short!")
          .required("Passphrase is required"),
        otherwise: Yup.string().notRequired(),
      }),
    });

    function stuff(formikValues) {
      changeFilled(formikValues);
      aa(0);
    }

    return (
      <Formik
        initialValues={
          {
            // position: "",
            // employer: "",
            // startDate: "",
            // endDate: "",
            // jobDescription: "",
            // experienceNumber: "",
          }
        }
        validationSchema={SignupSchema3}
        onSubmit={(values) => {
          console.log("submitted");
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
          <Form
            onChange={() => {
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors({ [index]: null })
                : setErrors({ [index]: errors });

              Object.values(values).every((x) => x === null || x === "")
                ? setFieldValue("experienceNumber", show)
                : setFieldValue("experienceNumber", show);
            }}
            onBlur={() => {
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors({ [index]: null })
                : setErrors({ [index]: errors });
            }}
          >
            <div className="wrapper mt-8">
              <div className="wrapper">
                {InputElement(
                  "text",
                  "position",
                  "თანამდებობა",
                  "მინიმუმ 2 სიმბოლო",
                  "დეველოპერი, დიზაინერი, ა.შ.",
                  errors.position,
                  touched.position,
                  1
                )}
              </div>
              <div className="wrapper">
                {InputElement(
                  "text",
                  "employer",
                  "დამსაქმებელი",
                  "მინიმუმ 2 სიმბოლო",
                  "დამსაქმებელი",
                  errors.employer,
                  touched.employer,
                  1
                )}
              </div>
              <div className="wrapper">
                {InputElement(
                  "date",
                  "jobStartDate",
                  "დაწყების რიცხვი",
                  "",
                  "",
                  errors.jobStartDate,
                  touched.jobStartDate,
                  2,
                  "date",
                  "jobEndDate",
                  "დამთავრების რიცხვი",
                  "",
                  "",
                  errors.jobEndDate,
                  touched.jobEndDate
                )}
              </div>
              <div className="wrapper ">
                {InputElementLarge(
                  "jobDescription",
                  "აღწერა",
                  "",
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
              <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]  mt-4"></div>
            </div>
            <FormikPersist
              name={"experiences" + index}
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
      let i = index;
      return [...Array(show)].map((e, i) => <div>{NewForm2(i)}</div>);
    }
  }

  function submit() {
    console.log("Eeeeeeee");
    let valid = true;
    Object.keys(state).forEach((element) => {
      let val1;
      if (state[element]) {
        val1 = state[element];
        let val2;
        if (state[element][element]) val2 = val1[element];

        if (
          JSON.stringify(val2) === "{}" ||
          val2 === undefined ||
          val2 === ""
        ) {
          console.log("validdddddddddddd");
        } else {
          valid = false;
          console.log("not validdddd");
        }
      }
    });
    console.log(valid);
    if (valid) {
      navigate("/page3");
    }
  }

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel  ">
        <Navbar pageName={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"} pageNum={"2/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[72%] h-fit bg-bgGray flex flex-col">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                photo: "",
                personalInfo: "",
                email: "",
                phone_number: "",
                position: "",
                employer: "",
                jobStartDate: "",
                jobEndDate: "",
                jobDescription: "",
                education: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("submitted");

                submit();
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
                  <div className="wrapper mb-0">
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "position",
                        "თანამდებობა",
                        "მინიმუმ 2 სიმბოლო",
                        "დეველოპერი, დიზაინერი, ა.შ.",
                        errors.position,
                        touched.position,
                        1
                      )}
                    </div>
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "employer",
                        "დამსაქმებელი",
                        "მინიმუმ 2 სიმბოლო",
                        "დამსაქმებელი",

                        errors.employer,
                        touched.employer,
                        1
                      )}
                    </div>
                    <div className="wrapper">
                      {InputElement(
                        "date",
                        "jobStartDate",
                        "დაწყების რიცხვი",
                        "",
                        "",
                        errors.jobStartDate,
                        touched.jobStartDate,
                        2,
                        "date",
                        "jobEndDate",
                        "დამთავრების რიცხვი",
                        "",
                        "",
                        errors.jobEndDate,
                        touched.jobEndDate
                      )}
                    </div>
                    <div className="wrapper ">
                      {InputElementLarge(
                        "jobDescription",
                        "აღწერა",
                        "",
                        "როლი თანამდებობაზე და ზოგადი აღწერა",
                        errors.jobDescription,
                        touched.jobDescription,
                        values.jobDescription,
                        (e) => {
                          setFieldValue("jobDescription", e.target.value);
                          setTimeout(function () {
                            setFieldTouched("jobDescription", true);
                          }, 100);
                        },
                        1
                      )}
                    </div>
                  </div>
                  <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]  "></div>

                  <FormikPersist
                    name="page1"
                    doit={(e) => {
                      stuff(e);
                    }}
                  />

                  <div className={"wrapper"}>{createNewForms(show)}</div>
                  <div className="wrapper mt-10">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(show + 1);
                        console.log(values);
                        setFieldValue("experienceNumber", show + 1);
                        setFieldValue("position", values.position);
                        setFieldTouched("position", true);
                        window.localStorage.setItem(
                          "page1",
                          JSON.stringify(values)
                        );
                      }}
                      className="bg-buttonBlue text-white py-3 px-8 rounded-md w-fit hover:bg-buttonBlueLight tracking-wide"
                    >
                      მეტი გამოცდილების დამატება
                    </button>
                  </div>
                  <div className="wrapper flex-row justify-between mt-16">
                    <button
                      type="button"
                      onClick={() => navigate("/page1")}
                      className="bg-buttonIndigo text-white py-3 px-8 rounded-md hover:bg-buttonIndigoLight tracking-widest"
                    >
                      უკან
                    </button>

                    <button
                      type="button"
                      onClick={submitForm}
                      className="bg-buttonIndigo text-white py-3 px-8 rounded-md hover:bg-buttonIndigoLight tracking-widest "
                    >
                      შემდეგი
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
