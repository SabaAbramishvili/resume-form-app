import InputField from "./InputField";
import InputFieldLarge from "./InputFieldLarge";
import InputSelect from "./InputSelect";
const InputSelectElement = (
  name,
  label,
  hint,
  placeholder,
  errors,
  touched,
  values,
  setValues,
  options,
  num = 1,
  required = true,
  name2 = "",
  label2 = "",
  hint2 = "",
  errors2 = "",
  touched2 = ""
) => {
  return (
    <InputSelect
      name={name}
      label={label}
      hint={hint}
      placeholder={placeholder}
      errors={errors}
      touched={touched}
      values={values}
      setValues={(e) => {
        setValues(e);
      }}
      options={options}
    />
  );
};
export default InputSelectElement;
