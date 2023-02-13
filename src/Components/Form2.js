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
  const [errors, setErrors] = useState();
  const [errors2, setErrors2] = useState();
  const [allErrors, setAllErrors] = useState("");
  const [index, setIndex] = useState("");
  const [myArray, updateMyArray] = useState([]);
  // const [num, setNum] = useState("");
  const [state, setState] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // console.log(state);

  console.log("form2errors = ");
  let err;
  if (errors != undefined) {
    let num = Object.keys(errors);
    err = errors2;
    err = { [num]: errors[num] };
    Object.keys(errors).forEach((key) => {
      console.log(key, errors[key]);
    });
  }
  console.log(index);
  console.log(err);
  console.log(errors);
  // err.push(errors);
  useEffect(() => {
    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssss"
    );
    setState((prevState) => ({
      ...prevState,
      num: errors,
    }));
  }, [setErrors]);

  if (errors != errors2) {
    let num = Object.keys(errors);

    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    console.log(num);
    setState((prevState) => ({
      ...prevState,
      [num]: errors,
    }));

    setErrors2(errors);
  }
  console.log("state");
  console.log(state);

  const changeShow = () => {
    console.log("changeshow");
    // show ? setShow(false) : setShow(true);
    setShow(show + 1);
  };

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
      // console.log(formikValues);
      changeFilled(formikValues);
      aa(0);
    }
    // console.log("indexxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    // console.log(index);

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
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors({ [index]: null })
                : setErrors({ [index]: errors });
              // Object.values(values).every((x) => x === null || x === "")
              //   ? setErrors(null)
              //   : setErrors(errors);
              Object.values(values).every((x) => x === null || x === "")
                ? setFieldValue("experienceNumber", show)
                : setFieldValue("experienceNumber", show);
            }}
            onBlur={() => {
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors({ [index]: null })
                : setErrors({ [index]: errors });
              // Object.values(values).every((x) => x === null || x === "")
              //   ? setErrors(null)
              //   : setErrors(errors);
            }}
          >
            {/* {Object.values(values).every((x) => x === null || x === "") ||
            show === "false"
              ? console.log("empty")
              : console.log("not empty")} */}

            {/* {console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA")} */}
            {/* {console.log(errors)} */}

            <div className="wrapper">
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
              {/* {console.log(values)} */}
              <button
                type="button"
                // onClick={() => {
                //   Object.values(values).every((x) => x === null || x === "")
                //     ? setErrors(null)
                //     : setErrors(errors);
                // }}
                onClick={submitForm}
                className="bg-fuchsia-600"
              >
                eee
              </button>
            </div>
            <FormikPersist
              name={"experiences" + index}
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
      let i = index;
      return [...Array(show)].map((e, i) => <div>{NewForm2(i)}</div>);
    }
  }

  function submit() {
    console.log("Eeeeeeee");
    // console.log(Object.keys(state));
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
      // if (
      //   JSON.stringify(state[element][element]) === "{}" ||
      //   state[element][element] === undefined ||
      //   state[element][element] === ""
      // ) {
      //   console.log("validdddddddddddd");
      // } else {
      //   valid = false;
      //   console.log("not validdddd");
      // }
      // console.log(state[element][element]);
    });
    console.log(valid);
    if (valid) {
      navigate("/page3");
    }

    alert("Aaaaaaaaa");
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
                // navigate("/page3");
                // alert("submitted");
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
                  {/* 
                  
                  
                  */}
                  {/* {console.log(errors)} */}
                  {/* {console.log(touched)} */}
                  <div className="wrapper">
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

                  <FormikPersist
                    name="page1"
                    doit={(e) => {
                      stuff(e);
                    }}
                  />

                  <div className={"wrapper"}>
                    {
                      createNewForms(show)
                      // NewForm2()
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
                      onClick={
                        () => {
                          setShow(show + 1);
                          console.log(values);
                          setFieldValue("experienceNumber", show + 1);
                          setFieldValue("position", values.position);
                          setFieldTouched("position", true);
                          window.localStorage.setItem(
                            "page1",
                            JSON.stringify(values)
                          );
                        }

                        // changeShow().then(
                        //   setFieldValue("experienceNumber", show)
                        // )
                      }
                      className="bg-sky-800"
                    >
                      kidoo
                    </button>
                    <button
                      type="button"
                      onClick={submitForm}
                      className="bg-sky-600"
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
