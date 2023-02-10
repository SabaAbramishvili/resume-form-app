import InputField from "./InputField";
import InputFieldLarge from "./InputFieldLarge";
const InputElement = (
  type = "text",
  name,
  label,
  hint,
  errors,
  touched,
  num = 1,
  type2 = "text",
  name2 = "",
  label2 = "",
  hint2 = "",
  errors2 = "",
  touched2 = ""
) => {
  return (
    <div className="flex justify-between flex-col laptop:flex-row  ">
      <div
        className={
          num === 1
            ? "flex flex-col laptop:w-[100%]"
            : "flex flex-col laptop:w-[47%]"
        }
      >
        <InputField
          type={type}
          name={name}
          errors={errors}
          touched={touched}
          label={label}
          hint={hint}
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
            errors={errors2}
            touched={touched2}
            label={label2}
            hint={hint2}
          />
        </div>
      ) : null}
    </div>
  );
};
export default InputElement;
