import { useState, React } from "react";
import Form1 from "./Form1";
import Resume from "./Resume";

export default function Page({ aa }) {
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
    <div className="h-fit flex flex-row justify-between">
      <Form1 aa={(e) => stuff(e)} />
      <Resume changed={changed} />
    </div>
  );
}
