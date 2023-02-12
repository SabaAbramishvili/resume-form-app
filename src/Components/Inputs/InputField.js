import { useFormik, Field } from "formik";
import correcticon from "../Images/correcticon.svg";
import erroricon from "../Images/erroricon.svg";
import { React, useState } from "react";

export default function Inputs(props) {
  // console.log("errors= ");
  // console.log(props.inputIcon);

  return (
    <>
      <p
        className={
          props.errors && props.touched ? "labelTextError " : "labelText "
        }
      >
        {props.label}
      </p>
      <div className="flex w-[100%] flex-row items-center justify-end">
        <Field
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={
            props.type === "text"
              ? props.errors && props.touched
                ? "inputFieldError"
                : !props.errors && props.touched
                ? "inputFieldValid"
                : "inputField"
              : props.type === "date"
              ? props.errors && props.touched
                ? "inputFieldError px-4"
                : !props.errors && props.touched
                ? "inputFieldValid px-4"
                : "inputField px-4"
              : null
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
            props.type === "text"
              ? props.errors && props.touched
                ? "inputIconError"
                : !props.errors && props.touched
                ? "inputIconValid"
                : "inputIconHidden"
              : props.type === "date"
              ? "inputIconHidden"
              : null
          }
        />
      </div>

      <p className="text-base font-normal text-[rgba(46,46,46,1)]">
        {props.hint}
      </p>
    </>
  );
}
