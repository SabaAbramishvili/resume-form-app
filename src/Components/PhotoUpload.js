import React from "react";

export default function PhotoUpload(errors, touched) {
  return (
    <div className="mb-12 flex flex-row">
      <p
        className={
          errors && touched
            ? "text-redText text-[18px] font-semibold mr-4"
            : "text-black text-[18px] font-semibold mr-4"
        }
      >
        პირადი ფოტოს ატვირთვა
      </p>
      <label
        for="photo"
        className="flex flex-col items-center justify-center w-[107px] h-[27px] bg-[rgba(14,128,191,1)]  rounded-md cursor-pointer text-white font-normal text-sm"
      >
        ატვირთვა
        <input
          id="photo"
          name="photo"
          type="file"
          className="hidden"
          onChange={(e) => {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.addEventListener("load", () => {
              localStorage.setItem("photo", reader.result);
              setFieldValue("photo", reader.result);
            });
          }}
        />
      </label>
    </div>
  );
}
