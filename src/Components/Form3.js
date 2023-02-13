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

export default function Form3({ aa, setResponse, experiences, educations }) {
  const navigate = useNavigate();
  console.log("''''''''''''''''''''''''''''''''''''''");
  console.log(experiences);
  console.log(educations);
  // console.log(educations[0].degree.value);

  const SignupSchema = Yup.object().shape({
    institute: Yup.string()
      .min(2, "Too Short!")
      .matches(nameRegex2, "ქართული ასოები")
      .required("Required"),
    degree: Yup.object().required("Required"),
    eduEndDate: Yup.string().required("Required"),
    eduDescription: Yup.string().required("Required"),
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
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeFilled = (formikValues) => {
    console.log("educationNumber");
    console.log(formikValues.educationNumber);
    if (show > formikValues.educationNumber) {
      formikValues.educationNumber = show;
      console.log("showwwwwwwwshowwwwwwww");
    } else if (formikValues.educationNumber > 0) {
      console.log("exxxxxxxxxxxxxxxxxexxxxxxxxxxxxxxxxx");
      setShow(formikValues.educationNumber);
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

  useEffect(() => {
    const savedForm = window.localStorage.getItem("photo");
    if (savedForm) {
      const parsedForm = savedForm;

      setPhoto(parsedForm);
    }
  }, [photo]);

  function dataUrlToBlob(dataUrl) {
    if (dataUrl) {
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
  }

  const dataUrl = localStorage.getItem("photo");
  const blob = dataUrlToBlob(dataUrl);
  const file1 = new File([blob], "photo", { type: "image/png" });

  const formData = new FormData();
  function fillData() {
    console.log("filllllllllllllll");
    let phone_number;
    if (formikValues.phone_number != undefined) {
      phone_number = formikValues.phone_number.replace(/\s/g, "");
    }
    formData.append("name", formikValues.name);
    formData.append("surname", formikValues.surname);
    formData.append("email", formikValues.email);
    formData.append("about_me", formikValues.about_me);
    formData.append("phone_number", phone_number);
    formData.append("image", file1);
    formData.append("experiences[0][position]", formikValues.position);
    formData.append("experiences[0][employer]", formikValues.employer);
    formData.append("experiences[0][start_date]", formikValues.jobStartDate);
    formData.append("experiences[0][due_date]", formikValues.jobEndDate);
    formData.append("experiences[0][description]", formikValues.jobDescription);

    if (formikValues.degree != undefined)
      formData.append(
        "educations[0][degree_id]",
        formikValues.degree.value + 1
      );
    formData.append("educations[0][institute]", formikValues.institute);
    formData.append("educations[0][due_date]", formikValues.eduEndDate);
    formData.append("educations[0][description]", formikValues.eduDescription);

    for (let index = 0; index < experiences.length; index++) {
      let num = index + 1;
      formData.append(
        "experiences[" + num + "][position]",
        experiences[index].position
      );
      formData.append(
        "experiences[" + num + "][employer]",
        experiences[index].employer
      );
      formData.append(
        "experiences[" + num + "][start_date]",
        experiences[index].jobStartDate
      );
      formData.append(
        "experiences[" + num + "][due_date]",
        experiences[index].jobEndDate
      );
      formData.append(
        "experiences[" + num + "][description]",
        experiences[index].jobDescription
      );
    }
    for (let index = 0; index < educations.length; index++) {
      let num = index + 1;
      if (educations[index].degree != undefined)
        formData.append(
          "educations[" + num + "][degree_id]",
          educations[index].degree.value + 1
        );
      formData.append(
        "educations[" + num + "][institute]",
        educations[index].institute
      );
      formData.append(
        "educations[" + num + "][due_date]",
        educations[index].eduEndDate
      );
      formData.append(
        "educations[" + num + "][description]",
        educations[index].eduDescription
      );
    }
  }

  const filledArray = new Array(user.length);
  for (let index = 0; index < user.length; index++) {
    filledArray[index] = { value: index, label: user[index].title };
  }

  function post() {
    console.log("dataaaaaaaaa");
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

  const NewForm2 = (index) => {
    const SignupSchema3 = Yup.object().shape({
      institute: Yup.string()
        .min(2, "Too Short!")
        .matches(nameRegex2, "ქართული ასოები")
        .required("Required"),
      degree: Yup.object().required("Required"),
      due_date: Yup.string().required("Required"),
      eduDescription: Yup.string().required("Required"),

      education2: Yup.string().when([], {
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
            // institute: "",
            // degree: "",
            // due_date: "",
            // eduDescription: "",
          }
        }
        validationSchema={SignupSchema3}
        onSubmit={(values) => {
          console.log("submitted");
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
                ? setFieldValue("educationNumber", show)
                : setFieldValue("educationNumber", show);
            }}
            onBlur={() => {
              Object.values(values).every((x) => x === null || x === "")
                ? setErrors({ [index]: null })
                : setErrors({ [index]: errors });
            }}
          >
            <div className="wrapper mt-5">
              <div className="wrapper">
                {InputElement(
                  "text",
                  "institute",
                  "სასწავლებელი",
                  "მინიმუმ 2 სიმბოლო",
                  "სასწავლებელი",
                  errors.institute,
                  touched.institute,
                  1
                )}
              </div>

              <div className="wrapper flex-col laptop:flex-row justify-between mb-0 ">
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
              <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] mt-3 mb-0 "></div>
            </div>
            <FormikPersist
              name={"educations" + index}
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

    alert("Aaaaaaaaa");
  }

  return (
    <>
      <div className="w-[100%] tablet:w-[58%] h-fit bg-bgGray flex flex-col box-border font-hel  ">
        <Navbar pageName={"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"} pageNum={"3/3"} />
        <div className="w-[100%] h-fit bg-bgGray flex flex-col box-border font-hel pb-20 items-center">
          <div className="w-[72%] h-fit bg-bgGray flex flex-col">
            <Formik
              initialValues={{
                institute: "",
                degree: "",
                due_date: "",
                eduDescription: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("submitted");

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
                  <div className="wrapper mb-0">
                    <div className="wrapper">
                      {InputElement(
                        "text",
                        "institute",
                        "სასწავლებელი",
                        "მინიმუმ 2 სიმბოლო",
                        "სასწავლებელი",
                        errors.institute,
                        touched.institute,
                        1
                      )}
                    </div>

                    <div className="wrapper flex-col laptop:flex-row justify-between mb-0 ">
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
                            setFieldValue("degree", e).then(console.log(e));
                            setTimeout(function () {
                              setFieldTouched("degree", true);
                            }, 100);
                          },
                          filledArray
                        )}
                      </div>
                      <div className="wrapper laptop:w-[47%] w-[100%] ">
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
                    <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] mt-10 mb-4"></div>
                  </div>

                  <FormikPersist
                    name="page1"
                    doit={(e) => {
                      stuff(e);
                    }}
                  />

                  <div className={"wrapper"}>{createNewForms(show)}</div>

                  <div className="wrapper mt-16">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(show + 1);
                        console.log(values);
                        setFieldValue("educationNumber", show + 1);
                        setFieldValue("institute", values.institute);
                        setFieldTouched("institute", true);
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

                  <div className="wrapper flex-row justify-between mt-24">
                    <button
                      type="button"
                      onClick={() => navigate("/page2")}
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
