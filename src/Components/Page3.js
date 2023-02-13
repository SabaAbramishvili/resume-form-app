import { useState, React } from "react";
import Form3 from "./Form3";
import Resume from "./Resume";

export default function Page3({ aa, setResponse }) {
  const [value, setValue] = useState(0);
  const [experiences, setExperiences] = useState("");
  const [educations, setEducations] = useState("");
  const [message, setMessage] = useState("Hello World");

  const changed = () => {
    // console.log(value);
    return value;
  };
  function stuff(e) {
    let i = value + 1;
    setValue(i);
  }
  const setExp = (exp) => {
    setExperiences(exp);
  };
  const setEdu = (edu) => {
    setEducations(edu);
  };
  // console.log("pageee");
  // console.log(experiences);
  // console.log(value);
  return (
    <div className="h-fit flex flex-col justify-between tablet:flex-row tracking-normal bg-bgGray">
      <Form3
        aa={(e) => stuff(e)}
        setResponse={setResponse}
        experiences={experiences}
        educations={educations}
      />
      <Resume changed={changed} setExp={setExp} setEdu={setEdu} />
    </div>
  );
}
