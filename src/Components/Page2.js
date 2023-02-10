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
  // console.log(value);
  return (
    <div className="h-fit flex flex-col justify-between tablet:flex-row">
      <Form2 aa={(e) => stuff(e)} />
      <Resume changed={changed} />
    </div>
  );
}
