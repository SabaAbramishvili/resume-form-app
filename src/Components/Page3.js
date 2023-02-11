import { useState, React } from "react";
import Form3 from "./Form3";
import Resume from "./Resume";

export default function Page3({ aa }) {
  const [value, setValue] = useState(0);
  const changed = () => {
    // console.log(value);
    return value;
  };
  function stuff(e) {
    let i = value + 1;
    setValue(i);
  }
  // console.log(value);
  return (
    <div className="h-fit flex flex-col justify-between tablet:flex-row tracking-normal">
      <Form3 aa={(e) => stuff(e)} />
      <Resume changed={changed} />
    </div>
  );
}
