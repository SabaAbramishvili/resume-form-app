import { useState, React } from "react";
import Form1 from "./Form1";
import Resume from "./Resume";

export default function Page1({ aa }) {
  const [value, setValue] = useState(0);
  const changed = () => {
    // console.log(value);
    return value;
  };
  function stuff(e) {
    let i = value + 1;
    setValue(i);
  }
  const setExp = (exp) => {};
  const setEdu = (edu) => {};
  // console.log(value);
  return (
    <div className="h-fit flex flex-col justify-between tablet:flex-row bg-bgGray">
      <Form1 aa={(e) => stuff(e)} />
      <Resume changed={changed} setExp={setExp} setEdu={setEdu} />
    </div>
  );
}
