import InputField from "./InputField";
import InputFieldLarge from "./InputFieldLarge";
const InputElementLarge = (
  name,
  label,
  hint,
  placeholder = "",
  errors,
  touched,
  value,
  SetValue,
  num = 1,
  required = true,
  name2 = "",
  label2 = "",
  hint2 = "",
  errors2 = "",
  touched2 = ""
) => {
  return (
    <InputFieldLarge
      name={name}
      label={label}
      hint={hint}
      placeholder={placeholder}
      errors={errors}
      touched={touched}
      value={value}
      setValue={(e) => {
        SetValue(e);
      }}
      required={required}
      // value={value}
    />
  );
};
export default InputElementLarge;
