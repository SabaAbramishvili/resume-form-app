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

const nameRegex = /^[ა-ჰ]+$/;
const nameRegex2 = /[^\s\\].{1,}/;
const numRegex2 = /(\d{3})\)?-?\s?(\d{2})-?\s?(\d{2})-?\s?(\d{2})/;
const numRegex3 =
  /^\s*(?:\+?(\d{3}))?([-. (]*(\d{3})[-. )]*)?((\d{2})[-. ]*(\d{2})?((\d{2})[-. ]*(\d{2}))?)\s*$/;
const numRegex = /^([+]?\d{3}[-\s]?|)\d{3}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;
const mailRegex = /^[a-z0-9_-]{1,}@(redberry)\.ge/;

export default function Form2({ aa }) {
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
  const [show, setShow] = useState();
  const [user, setUser] = useState([]);
  const [filled, setFilled] = useState(false);

  const changeShow = () => {
    show ? setShow(false) : setShow(true);
  };
  // const changeShow = () => {
  //   show ? setShow(false) : setShow(true);
  // };
  console.log("show = " + show);
  const changeFilled = (formikValues) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    // if (show === true) {
    if (formikValues.position2 === "") {
      setFilled(false);
    } else {
      setFilled(true);
      //   }
      // } else {
      //   setFilled(false);
    }
    console.log("filled = " + filled);
  };

  useEffect(() => {
    if (filled) {
      setShow(true);
    }
  }, []);

  // const { values, setValues } = useFormikContext();

  const fetchData = () => {
    return axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(filled);
  // }, [filled]);

  const filledArray = new Array(user.length);
  for (let index = 0; index < user.length; index++) {
    filledArray[index] = { value: index, label: user[index].title };
  }

  // console.log("show = " + show);

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel ">
        <Navbar pageName={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} pageNum={"1/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[73%] h-fit bg-bgGray flex flex-col">
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
                  {/* <div className="wrapper">
                    <Select
                      value={{
                        value: values.education[0],
                        label: values.education[1],
                      }}
                      name="education"
                      onChange={(e) => {
                        setFieldValue("education", [e.value, e.label]);
                        setFieldTouched("education", true);
                      }}
                      className=""
                      placeholder=""
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused
                            ? "rgba(188,188,188,1)"
                            : "rgba(188,188,188,1)",
                          border: "1px solid rgba(188,188,188,1)",
                          "&:hover": {
                            border: "1px solid rgba(188,188,188,1)",
                          },
                          outline: "none",
                          boxShadow: "none",
                          padding: "5px 16px",
                        }),
                      }}
                      options={filledArray}
                    />
                  </div> */}
                  {/* <div className="wrapper">
                    <InputSelect
                      name={"education"}
                      options={filledArray}
                      placeholder={"education"}
                      values={values.education}
                      value={values.education[0]}
                      label={values.education[1]}
                      setValues={(e) => {
                        setFieldValue("education", [e.value, e.label]);
                        setFieldTouched("education", true);
                      }}
                    />
                  </div> */}
                  {/* 
                

                */}
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
                    <button type="submit" className="bg-sky-400">
                      Submit
                    </button>
                  </div>

                  <div
                    className={show || values.employer2 ? "wrapper" : "hidden"}
                  >
                    <div className="wrapper">
                      <div className="wrapper">
                        {InputElement(
                          "text",
                          "position2",
                          "თანამდებობა",
                          "მინიმუმ 2 სიმბოლო",
                          errors.position2,
                          touched.position2,
                          1
                        )}
                      </div>
                      <div className="wrapper">
                        {InputElement(
                          "text",
                          "employer2",
                          "დამსაქმებელი",
                          "მინიმუმ 2 სიმბოლო",
                          errors.employer2,
                          touched.employer2,
                          1
                        )}
                      </div>
                      <div className="wrapper">
                        {InputElement(
                          "date",
                          "startDate2",
                          "დაწყების რიცხვი",
                          "",
                          errors.startDate2,
                          touched.startDate2,
                          2,
                          "date",
                          "endDate2",
                          "დამთავრების რიცხვი",
                          "",
                          errors.endDate2,
                          touched.endDate2
                        )}
                      </div>
                      <div className="wrapper ">
                        {InputElementLarge(
                          "jobDescription2",
                          "აღწერა",
                          "",
                          errors.jobDescription2,
                          touched.jobDescription2,
                          values.jobDescription2,
                          (e) => {
                            setFieldValue("jobDescription2", e.target.value);
                            setFieldTouched("jobDescription2", true);
                          },
                          1
                        )}
                      </div>
                    </div>
                  </div>
                  <FormikPersist
                    name="page1"
                    doit={(e) => {
                      stuff(e);
                    }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
