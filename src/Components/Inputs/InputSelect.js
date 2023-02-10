import React from "react";
import Select from "react-select";

export default function InputSelect(props) {
  return (
    <Select
      value={
        props.values
          ? {
              value: props.value,
              label: props.label,
            }
          : null
      }
      name={props.name}
      onChange={(e) => {
        props.setValues(e);
      }}
      className=""
      options={props.options}
      placeholder={props.placeholder}
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused
            ? "rgba(188,188,188,1)"
            : "rgba(188,188,188,1)",
          border: "1px solid rgba(188,188,188,1)",
          "&:hover": {
            border: "1px solid rgba(188,188,188,1)",
          },
          outline: "none",
          boxShadow: "none",
          padding: "5px 16px",
        }),
      }}
    />
  );
}
