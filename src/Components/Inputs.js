import { useFormik, Field } from "formik";
import correcticon from "./Images/correcticon.svg";
import erroricon from "./Images/erroricon.svg";
import { React, useState } from "react";

export default function Inputs(props) {
  // console.log("errors= ");
  // console.log(props.inputIcon);

  return (
    <>
      <p
        className={
          props.errors && props.touched
            ? "flex w-[100%] mb-2 text-base font-semibold text-[rgba(239,80,80,1)] "
            : "flex w-[100%] mb-2 text-base font-semibold text-black "
        }
      >
        {props.label}
      </p>
      <div className="flex w-[100%] flex-row items-center justify-end">
        <Field
          name={props.name}
          className={
            props.thicc
              ? props.errors && props.touched
                ? "inputFieldError h-[100px]"
                : !props.errors && props.touched
                ? "inputFieldValid h-[100px]"
                : "inputField h-[100px]"
              : props.errors && props.touched
              ? "inputFieldError"
              : !props.errors && props.touched
              ? "inputFieldValid"
              : "inputField"
          }
        />
        <img
          src={
            props.errors && props.touched
              ? erroricon
              : !props.errors && props.touched
              ? correcticon
              : correcticon
          }
          className={
            props.errors && props.touched
              ? "inputIconError"
              : !props.errors && props.touched
              ? "inputIconValid"
              : "inputIconHidden"
          }
        />
      </div>

      <p className="text-base font-normal text-[rgba(46,46,46,1)]">
        {props.hint}
      </p>
    </>
  );
}
