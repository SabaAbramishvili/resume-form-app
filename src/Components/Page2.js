import { useState, React } from "react";
import Form2 from "./Form2";
import Resume from "./Resume";

export default function Page2({ aa }) {
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
    <div className="h-fit flex flex-col justify-between tablet:flex-row tracking-normal bg-bgGray">
      <Form2 aa={(e) => stuff(e)} />
      <Resume changed={changed} setExp={setExp} setEdu={setEdu} />
    </div>
  );
}
