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
import InputSelectElement from "./Inputs/InputSelectElement";

const nameRegex = /^[ა-ჰ]+$/;
const nameRegex2 = /[^\s\\].{1,}/;
const numRegex2 = /(\d{3})\)?-?\s?(\d{2})-?\s?(\d{2})-?\s?(\d{2})/;
const numRegex3 =
  /^\s*(?:\+?(\d{3}))?([-. (]*(\d{3})[-. )]*)?((\d{2})[-. ]*(\d{2})?((\d{2})[-. ]*(\d{2}))?)\s*$/;
const numRegex = /^([+]?\d{3}[-\s]?|)\d{3}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;
const mailRegex = /^[a-z0-9_-]{1,}@(redberry)\.ge/;

export default function Form3({ aa, setResponse }) {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    education: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    degree: Yup.object().required("Required"),
    eduEndDate: Yup.string().required("Required"),
    eduDescription: Yup.string().required("Required"),

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
    setFormikValues(formikValues);
    changeFilled(formikValues);
    aa(0);
  }
  // const [show, setShow] = useState();
  const [user, setUser] = useState([]);
  const [photo, setPhoto] = useState();
  const [filled, setFilled] = useState(false);
  const [show, setShow] = useState(0);
  const [errors, setErrors] = useState("");
  const [formikValues, setFormikValues] = useState("");

  const changeShow = () => {
    console.log("changeshow");
    // show ? setShow(false) : setShow(true);
    setShow(show + 1);
  };
  // console.log("vaaaaaaaaaaaaalll");
  // console.log(formikValues);
  // console.log("show = " + show);
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

  const cvData = {
    name: "დავით",
    surname: "ონიანი",
    email: "davitoniani@redberry.ge",
    phone_number: "+995598123456",
    experiences: [
      {
        position: "back-end developer",
        employer: "Redberry",
        start_date: "2019/09/09",
        due_date: "2020/09/23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum.",
      },
    ],
    educations: [
      {
        institute: "თსუ",
        degree: "სტუდენტი",
        due_date: "2017/06/25",
        description:
          "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ.",
      },
    ],
    // image: "/downloads/პირადი.png",
    about_me: "ეს არის აღწერა ჩემს შესახებ",
  };

  console.log(cvData.image);

  useEffect(() => {
    const savedForm = window.localStorage.getItem("photo");
    if (savedForm) {
      const parsedForm = savedForm;

      setPhoto(parsedForm);
    }
  }, [photo]);

  // console.log(Object.keys(cvData));

  function dataUrlToBlob(dataUrl) {
    const parts = dataUrl.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const byteCharacters = atob(parts[1]);
    const byteArrays = [];
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }
    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
  }

  const dataUrl = localStorage.getItem("photo");
  const blob = dataUrlToBlob(dataUrl);
  const file1 = new File([blob], "photo", { type: "image/png" });
  cvData.image = file1;
  // console.log("file1");
  // console.log(cvData);

  const formData = new FormData();
  function fillData() {
    console.log("filllllllllllllll");
    let phone_number;
    if (formikValues.number != undefined) {
      phone_number = formikValues.number.replace(/\s/g, "");
    }
    formData.append("name", formikValues.firstName);
    formData.append("surname", formikValues.lastName);
    formData.append("email", formikValues.email);
    formData.append("about_me", formikValues.personalInfo);
    formData.append("phone_number", phone_number);
    formData.append("image", file1);
    formData.append("experiences[0][position]", formikValues.position);
    formData.append("experiences[0][employer]", formikValues.employer);
    formData.append("experiences[0][start_date]", formikValues.jobStartDate);
    formData.append("experiences[0][due_date]", formikValues.jobEndDate);
    formData.append("experiences[0][description]", formikValues.jobDescription);
    //
    formData.append("educations[0][institute]", formikValues.education);

    if (formikValues.degree != undefined)
      formData.append(
        "educations[0][degree_id]",
        formikValues.degree.value + 1
      );
    formData.append("educations[0][due_date]", formikValues.eduEndDate);
    formData.append("educations[0][description]", formikValues.eduDescription);
  }
  // fillData();

  for (const value of formData.values()) {
    console.log("datavaluesssssssssssssssssssss = ");
    console.log(value);
  }

  // console.log(photo);
  // console.log(cvData);
  // console.log(cvData.image);
  //

  //
  cvData.image = file1;

  const filledArray = new Array(user.length);
  for (let index = 0; index < user.length; index++) {
    filledArray[index] = { value: index, label: user[index].title };
  }
  const func = () => {
    console.log("subbbbbbbbbbb");
  };

  function post() {
    console.log("dataaaaaaaaa");
    console.log(cvData);
    fetch("https://resume.redberryinternship.ge/api/cvs", {
      method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));
  }

  async function doPostRequest() {
    let payload = formData;

    let res = await axios.post(
      "https://resume.redberryinternship.ge/api/cvs",
      formData
    );

    let data = res.data;
    console.log("response = ");
    // console.log(data);
    setResponse(data);
    navigate("/ResumeFinal");
  }

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
          // navigate("/ResumeFinal");
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

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel  ">
        <Navbar pageName={"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"} pageNum={"3/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[72%] h-fit bg-bgGray flex flex-col">
            <Formik
              initialValues={{
                education: "",
                degree: "",
                eduEndDate: "",
                eduDescription: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("submitted");
                // navigate("/page1");
                // post();
                fillData();
                doPostRequest();
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
                  {/* {console.log(values)}
                  {console.log(errors)}
                  {console.log(touched)} */}
                  <div className="wrapper">
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "education",
                        "სასწავლებელი",
                        "მინიმუმ 2 სიმბოლო",
                        "სასწავლებელი",
                        errors.education,
                        touched.education,
                        1
                      )}
                    </div>

                    <div className="wrapper flex-col laptop:flex-row justify-between ">
                      <div className="wrapper laptop:w-[47%] w-[100%]">
                        {InputSelectElement(
                          "degree",
                          "აღწერა",
                          "",
                          "სასწავლებელი",
                          errors.degree,
                          touched.degree,
                          values.degree,
                          (e) => {
                            console.log(e.label);
                            setFieldValue("degree", e).then(console.log(e));
                            setTimeout(function () {
                              setFieldTouched("degree", true);
                            }, 100);

                            // (setFieldTouched("degree", true));
                          },
                          filledArray
                        )}
                      </div>
                      <div className="wrapper laptop:w-[47%] w-[100%]">
                        {InputElement(
                          "date",
                          "eduEndDate",
                          "დაწყების რიცხვი",
                          "",
                          "",
                          errors.eduEndDate,
                          touched.eduEndDate,
                          1
                        )}
                      </div>
                    </div>

                    <div className="wrapper ">
                      {InputElementLarge(
                        "eduDescription",
                        "აღწერა",
                        "",
                        "განათლების აღწერა",
                        errors.eduDescription,
                        touched.eduDescription,
                        values.eduDescription,
                        (e) => {
                          setFieldValue("eduDescription", e.target.value);
                          setTimeout(function () {
                            setFieldTouched("eduDescription", true);
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
