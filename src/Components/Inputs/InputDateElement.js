import InputField from "./InputField";
import InputFieldLarge from "./InputFieldLarge";
const InputElementLarge = (
  name,
  label,
  hint,
  errors,
  touched,
  value,
  SetValue,
  num = 1,
  type = "inputText",
  name2 = "",
  label2 = "",
  hint2 = "",
  errors2 = "",
  touched2 = "",
  value2 = ""
) => {
  return (
    <Field
      type=""
      name={name}
      label={label}
      hint={hint}
      errors={errors}
      touched={touched}
      value={value}
      setValue={(e) => {
        SetValue(e);
      }}
      // value={value}
    />
  );
};
export default InputElementLarge;
