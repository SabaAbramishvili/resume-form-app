import { useFormik, Field } from "formik";
import correcticon from "../Images/correcticon.svg";
import erroricon from "../Images/erroricon.svg";
import { React, useState } from "react";

export default function InputFieldLarge(props) {
  return (
    <>
      <p
        className={
          props.errors && props.touched
            ? "flex w-[100%] mb-2 text-base font-semibold text-redText"
            : "flex w-[100%] mb-2 text-base font-semibold text-black"
        }
      >
        {props.label}
      </p>
      <div className="flex w-[100%] flex-row items-center justify-end">
        <textarea
          placeholder={props.placeholder}
          name={props.name}
          touched={props.touched}
          onChange={(e) => {
            props.setValue(e);
          }}
          onClick={(e) => {
            props.setValue(e);
          }}
          value={props.value}
          className={
            props.errors && props.touched
              ? "inputFieldError h-[100px] resize-none py-2 px-4 border-red"
              : !props.errors && props.touched
              ? "inputFieldValid h-[100px] resize-none py-2 px-4  "
              : "inputField h-[100px] resize-none py-2 px-4"
          }
        />
      </div>

      <p className="text-base font-normal text-[rgba(46,46,46,1)]">
        {props.hint}
      </p>
    </>
  );
}
