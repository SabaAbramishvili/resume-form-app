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

// export default function newForm() {
//   const navigate = useNavigate();

//   const SignupSchema = Yup.object().shape({
//     position: Yup.string()
//       .min(2, "Too Short!")
//       .matches(nameRegex2, "ქართული ასოები")
//       .required("Required"),
//     employer: Yup.string()
//       .min(2, "Too Short!")
//       .matches(nameRegex2, "ქართული ასოები")
//       .required("Required"),
//     startDate: Yup.string().required("Required"),
//     endDate: Yup.string().required("Required"),
//     jobDescription: Yup.string()
//       .min(2, "Too Short!")
//       .matches(nameRegex2, "ქართული ასოები")
//       .required("Required"),
//     education: Yup.string().when([], {
//       is: () => filled && true,
//       then: Yup.string()
//         .min(2, "Too Short!")
//         .required("Passphrase is required"),
//       otherwise: Yup.string().notRequired(),
//     }),
//   });
//   function stuff(formikValues) {
//     // console.log(formikValues);
//     changeFilled(formikValues);
//     aa(0);
//   }
//   const [show, setShow] = useState();
//   const [user, setUser] = useState([]);
//   const [filled, setFilled] = useState(false);

//   const changeShow = () => {
//     show ? setShow(false) : setShow(true);
//   };
//   // const changeShow = () => {
//   //   show ? setShow(false) : setShow(true);
//   // };
//   console.log("show = " + show);
//   const changeFilled = (formikValues) => {
//     console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
//     // if (show === true) {
//     if (formikValues.position2 === "") {
//       setFilled(false);
//     } else {
//       setFilled(true);
//       //   }
//       // } else {
//       //   setFilled(false);
//     }
//     console.log("filled = " + filled);
//   };

//   useEffect(() => {
//     if (filled) {
//       setShow(true);
//     }
//   }, []);

//   // const { values, setValues } = useFormikContext();

//   const fetchData = () => {
//     return axios
//       .get("https://resume.redberryinternship.ge/api/degrees")
//       .then((response) => setUser(response.data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // useEffect(() => {
//   //   console.log(filled);
//   // }, [filled]);

//   const filledArray = new Array(user.length);
//   for (let index = 0; index < user.length; index++) {
//     filledArray[index] = { value: index, label: user[index].title };
//   }
//   return (
//     <>
//       <Formik
//         initialValues={{
//           position2: "",
//           employer2: "",
//           startDate2: "",
//           endDate2: "",
//           jobDescription2: "",
//           education2: "",
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={(values) => {
//           console.log("submitted");
//           // navigate("/page1");
//           alert("submitted");
//         }}
//       >
//         {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
//           <Form>
//             {Object.values(values).every((x) => x === null || x === "") ||
//             show === "false"
//               ? console.log("empty")
//               : console.log("not empty")}

//             <div
//               className={
//                 show
//                   ? "wrapper"
//                   : Object.values(values).every((x) => x === null || x === "")
//                   ? "hidden"
//                   : "wrapper"
//               }
//             >
//               <div className="wrapper">
//                 {InputElement(
//                   "text",
//                   "position2",
//                   "თანამდებობა",
//                   "მინიმუმ 2 სიმბოლო",
//                   errors.position2,
//                   touched.position2,
//                   1
//                 )}
//               </div>
//               <div className="wrapper">
//                 {InputElement(
//                   "text",
//                   "employer2",
//                   "დამსაქმებელი",
//                   "მინიმუმ 2 სიმბოლო",
//                   errors.employer2,
//                   touched.employer2,
//                   1
//                 )}
//               </div>
//               <div className="wrapper">
//                 {InputElement(
//                   "date",
//                   "startDate2",
//                   "დაწყების რიცხვი",
//                   "",
//                   errors.startDate2,
//                   touched.startDate2,
//                   2,
//                   "date",
//                   "endDate2",
//                   "დამთავრების რიცხვი",
//                   "",
//                   errors.endDate2,
//                   touched.endDate2
//                 )}
//               </div>
//               <div className="wrapper ">
//                 {InputElementLarge(
//                   "jobDescription2",
//                   "აღწერა",
//                   "",
//                   errors.jobDescription2,
//                   touched.jobDescription2,
//                   values.jobDescription2,
//                   (e) => {
//                     setFieldValue("jobDescription2", e.target.value);
//                     setFieldTouched("jobDescription2", true);
//                   },
//                   1
//                 )}
//               </div>
//             </div>
//             <div className="wrapper flex-row justify-between">
//               <button
//                 type="button"
//                 onClick={() => navigate("/page1")}
//                 className="bg-sky-200"
//               >
//                 უკან
//               </button>

//               <button
//                 type="button"
//                 onClick={() => changeShow()}
//                 className="bg-sky-300"
//               >
//                 kidoo
//               </button>
//               <button type="submit" className="bg-sky-400">
//                 Submit
//               </button>
//             </div>

//             <FormikPersist
//               name="page2"
//               doit={(e) => {
//                 stuff(e);
//               }}
//             />
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// }
