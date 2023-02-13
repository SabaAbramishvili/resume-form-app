import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";
import phoneicon from "./Images/phoneicon.svg";
import emailicon from "./Images/emailicon.svg";
import logoicon from "./Images/logoresume.svg";

export default function Resume({ changed, setExp, setEdu }) {
  const [values1, setValues1] = useState("");
  const [expNum, setExpNum] = useState("");
  const [eduNum, setEduNum] = useState("");

  const [experiences, setExperiences] = useState("");
  const [educations, setEducations] = useState("");

  let i = changed();
  // console.log(i);

  let msg = "Goodbye";

  useEffect(() => {
    const savedForm = window.localStorage.getItem("page1");
    // console.log(savedForm);
    if (!isEqual(savedForm, values1)) {
      const parsedForm = JSON.parse(savedForm);
      setValues1(parsedForm);
      if (values1) setExpNum(values1.experienceNumber);
      if (values1) setEduNum(values1.educationNumber);

      // console.log("loaded");
    }
  }, [i]);

  // console.log("Aaa");
  // console.log(expNum);
  // console.log(eduNum);

  useEffect(() => {
    if (typeof expNum === "number") {
      let arr = [];
      for (let index = 0; index < expNum; index++) {
        let name = "experiences" + index;
        const savedForm = window.localStorage.getItem(name);
        const parsedForm = JSON.parse(savedForm);
        console.log(parsedForm);
        arr[index] = parsedForm;
        console.log("=============");
        console.log(index);
      }
      // console.log(arr);
      setExperiences(arr);
      setExp(arr);
    }
    if (typeof eduNum === "number") {
      let arr = [];
      for (let index = 0; index < eduNum; index++) {
        let name = "educations" + index;
        const savedForm = window.localStorage.getItem(name);
        const parsedForm = JSON.parse(savedForm);
        console.log(parsedForm);
        arr[index] = parsedForm;
        console.log("=============");
        console.log(index);
      }
      setEducations(arr);
      setEdu(arr);
    }
  }, [i]);

  if (expNum > 1) console.log("ressssssssss");
  console.log("experiences");
  console.log(experiences);
  console.log("educations");
  console.log(educations);

  const AddedExperiences = (experiences) => {
    return experiences ? (
      <div className="wrapper h-fit mb-0 mt-4">
        {experiences.position ? (
          <>
            <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
              {/* {experiences.position + ", " + experiences.employer} */}
              {experiences.position ? experiences.position + ", " : ""}
              {experiences.employer ? experiences.employer : ""}
            </p>
            <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
              {experiences.startDate ? experiences.startDate + " - " : ""}
              {experiences.endDate ? experiences.endDate : ""}
            </p>
            <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
              {experiences.jobDescription}
            </p>
          </>
        ) : null}
        {experiences ? (
          experiences.position &&
          experiences.employer &&
          experiences.jobStartDate &&
          experiences.jobEndDate &&
          experiences.jobDescription ? (
            <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
          ) : null
        ) : null}
      </div>
    ) : null;
  };

  const AddedEducations = (educations) => {
    return educations ? (
      <div className="wrapper h-fit mt-5 mb-0">
        {educations.institute ? (
          <>
            <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
              {/* {educations.position + ", " + educations.employer} */}
              {educations.institute ? educations.institute + ", " : ""}
              {educations.degree
                ? educations.degree.label
                  ? educations.degree.label
                  : ""
                : ""}
            </p>
            <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
              {educations.eduEndDate ? educations.eduEndDate : null}
            </p>
            <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
              {educations.eduDescription}
            </p>
          </>
        ) : null}
        {educations.institute &&
        educations.degree &&
        educations.eduEndDate &&
        educations.eduDescription ? (
          <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
        ) : null}
      </div>
    ) : null;
  };

  function createNewExperiences() {
    if (experiences) {
      for (let index = 1; index <= experiences.length; index++) {
        console.log("sssssssssssssssssssss");
        console.log(index);
        console.log(experiences[index - 1]);
        // return AddedExperiences(experiences[index - 1]);
        return [...Array(experiences.length)].map((e, i) => (
          <div>{AddedExperiences(experiences[i], index)}</div>
        ));
      }
    }
  }

  function createNewEducations() {
    for (let index = 1; index <= educations.length; index++) {
      console.log("sssssssssssssssssssss");
      console.log(index);
      console.log(educations[index - 1]);
      // return AddedEducations(educations[index - 1]);
      return [...Array(educations.length)].map((e, i) => (
        <div>{AddedEducations(educations[i], index)}</div>
      ));
    }
  }

  // console.log(values1.photo);
  return (
    <div className="w-[100%] tablet:w-[42%]  h-fit min-h-[920px] bg-white flex flex-row  justify-left box-border font-hel break-words ">
      <div className="w-[8.5%]"></div>
      {/* {console.log(values1)} */}
      <div className="w-[83%]  flex flex-col mt-[74px] pb-10 justify-between ">
        <div>
          {values1 ? (
            <div className="w-[100%] h-fit   flex flex-col mb-20 ">
              <div className="flex w-[100%] h-fit   flex-row mb-3">
                <div className="flex w-[62%] h-fit flex-col ">
                  <div className="wrapper min-h-[36px]">
                    <p className="text-3xl font-extrabold text-orangeText">
                      {values1.name ? values1.name + " " : null}
                      {values1.surname ? values1.surname : null}
                    </p>
                  </div>
                  <div className="wrapper min-h-[74px]">
                    <div className="flex flex-row">
                      {values1.email ? (
                        <>
                          <img
                            src={emailicon}
                            alt=""
                            className={"w-[20px] h-[20px] mt-[6px] mr-2"}
                          ></img>

                          <p className="  text-lg font-medium text-black mb-1 ">
                            {values1.email}
                          </p>
                        </>
                      ) : null}
                    </div>
                    <div className="flex flex-row">
                      {values1.phone_number ? (
                        <>
                          <img
                            src={phoneicon}
                            alt=""
                            className={"w-[20px] h-[20px] mt-[6px] mr-2"}
                          ></img>

                          <p className="text-lg  font-medium  text-black mb-1   ">
                            {values1.phone_number}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div className="wrapper h-fit mb-0">
                    {values1.about_me ? (
                      <>
                        <p className="text-lg h-fit font-bold text-orangeText mb-4">
                          {"ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
                        </p>
                        <p className=" text-black h-fit w-[100%] text-[16px] font-medium leading-5 mb-3 ">
                          {values1.about_me}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="flex w-[38%] h-fit flex-col ">
                  <div className="flex w-fit h-fit flex-col ">
                    {values1.photo ? (
                      <img
                        src={values1 ? values1.photo : null}
                        alt=""
                        className={"w-[100%] aspect-square rounded-full"}
                      ></img>
                    ) : null}
                  </div>
                </div>
              </div>
              {values1.name &&
              values1.surname &&
              values1.photo &&
              values1.photo &&
              values1.photo ? (
                <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
              ) : null}
              <div
                className={
                  values1.position && values1.employer
                    ? "w-[100%] h-fit  flex flex-col "
                    : "hidden"
                }
              >
                <div className="wrapper min-h-[36px] mt-5 mb-5">
                  <div className="wrapper h-fit mb-0">
                    {values1.position ? (
                      <>
                        <p className="text-lg h-fit font-bold text-orangeText mb-3">
                          {"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}
                        </p>
                        <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
                          {/* {values1.position + ", " + values1.employer} */}
                          {values1.position ? values1.position + ", " : ""}
                          {values1.employer ? values1.employer : ""}
                        </p>
                        <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
                          {values1.JobStartDate
                            ? values1.jobStartDate + " - "
                            : ""}
                          {values1.jobEndDate ? values1.jobEndDate : ""}
                        </p>
                        <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
                          {values1.jobDescription}
                        </p>
                      </>
                    ) : null}
                    {values1.position &&
                    values1.employer &&
                    values1.jobStartDate &&
                    values1.jobEndDate &&
                    values1.jobDescription ? (
                      <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
                    ) : null}
                    {createNewExperiences({ experiences })}
                  </div>
                  <div className="wrapper h-fit mt-5 mb-0">
                    {values1.institute ? (
                      <>
                        <p className="text-lg h-fit font-bold text-orangeText mb-3">
                          {"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"}
                        </p>
                        <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
                          {/* {values1.position + ", " + values1.employer} */}
                          {values1.institute ? values1.institute + ", " : ""}
                          {values1.degree
                            ? values1.degree.label
                              ? values1.degree.label
                              : ""
                            : ""}
                        </p>
                        <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
                          {values1.eduEndDate ? values1.eduEndDate : null}
                        </p>
                        <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
                          {values1.eduDescription}
                        </p>
                      </>
                    ) : null}
                    {values1.institute &&
                    values1.degree &&
                    values1.eduEndDate &&
                    values1.eduDescription ? (
                      <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
                    ) : null}
                    {createNewEducations({ educations })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <img
            src={logoicon}
            alt=""
            className={"w-[42px] h-[42px]   flex  items-end"}
          ></img>
        </div>
      </div>

      <div className="w-[8.5%]"></div>
    </div>
  );
}
