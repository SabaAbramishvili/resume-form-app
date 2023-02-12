import React from "react";
import Select from "react-select";

export default function InputSelect(props) {
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      border: "1px solid rgba(188,188,188,1)",
      "&:hover": {
        border: "2px solid rgba(188,188,188,1)",
      },
      outline: "none",
      boxShadow: "none",
      padding: "5px 16px 5px 8px",
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "transparent",
    }),
  };
  const customStylesError = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      border: "1px solid rgba(239,80,80,1)",
      "&:hover": {
        border: "1px solid rgba(239,80,80,1)",
      },
      outline: "none",
      boxShadow: "none",
      padding: "5px 16px 5px 8px",
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "transparent",
    }),
  };
  const customStylesValid = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      border: "1px solid rgba(152,227,126,1)",
      "&:hover": {
        border: "1px solid rgba(152,227,126,1)",
      },
      outline: "none",
      boxShadow: "none",
      padding: "5px 16px 5px 8px",
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "transparent",
    }),
  };
  return (
    <>
      <p
        className={
          !props.values && props.errors && props.touched
            ? "flex w-[100%] mb-2 text-base font-semibold text-redText"
            : "flex w-[100%] mb-2 text-base font-semibold text-black"
        }
      >
        {props.label}
      </p>

      <Select
        value={
          props.values
            ? {
                value: props.values.value,
                label: props.values.label,
              }
            : null
        }
        name={props.name}
        onChange={(e) => {
          props.setValues(e);
        }}
        options={props.options}
        placeholder={props.placeholder}
        components={{
          IndicatorSeparator: () => null,
        }}
        errors={props.errors}
        touched={props.touched}
        styles={
          props.touched && props.errors
            ? customStylesError
            : props.touched && !props.errors
            ? customStylesValid
            : customStyles
        }

        // styles={{
        //   control: (baseStyles, state) => ({
        //     ...baseStyles,

        //     border: "1px solid rgba(188,188,188,1)",
        //     "&:hover": {
        //       border: "1px solid rgba(188,188,188,1)",
        //     },
        //     outline: "none",
        //     boxShadow: "none",
        //     padding: "5px 16px 5px 8px",
        //   }),
        //   input: (baseStyles, state) => ({
        //     ...baseStyles,
        //     color: "transparent",
        //   }),
        // }}
      />
    </>
  );
}
