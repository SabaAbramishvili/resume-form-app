import InputField from "./InputField";
import InputFieldLarge from "./InputFieldLarge";
const InputElement = (
  type = "text",
  name,
  label,
  hint,
  placeholder,
  errors,
  touched,
  num = 1,
  type2 = "text",
  name2 = "",
  label2 = "",
  hint2 = "",
  placeholder2 = "",
  errors2 = "",
  touched2 = ""
) => {
  return (
    <div className="flex justify-between flex-col laptop:flex-row  ">
      <div
        className={
          num === 1
            ? "flex flex-col laptop:w-[100%]"
            : "flex flex-col  laptop:w-[47%]"
        }
      >
        <InputField
          type={type}
          name={name}
          label={label}
          hint={hint}
          placeholder={placeholder}
          errors={errors}
          touched={touched}
        />
      </div>
      {num === 2 ? (
        <div
          className={
            num === 1
              ? "flex flex-col laptop:w-[100%] "
              : "flex flex-col laptop:w-[47%]"
          }
        >
          <InputField
            type={type2}
            name={name2}
            label={label2}
            hint={hint2}
            placeholder={placeholder2}
            errors={errors2}
            touched={touched2}
          />
        </div>
      ) : null}
    </div>
  );
};
export default InputElement;
