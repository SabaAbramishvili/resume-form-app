import { useEffect, useRef, React, useState } from "react";
import isEqual from "react-fast-compare";
import phoneicon from "./Images/phoneicon.svg";
import emailicon from "./Images/emailicon.svg";
import logoicon from "./Images/logoresume.svg";
import xicon from "./Images/xicon.svg";
import backicon from "./Images/backicon.svg";
import { useNavigate } from "react-router-dom";

import partypopper from "./Images/partypopper.png";

export default function ResumeFinal({ changed, Filledresponse }) {
  const [values1, setValues1] = useState("");
  const [values2, setValues2] = useState("");
  const [educations, setEducations] = useState("");
  const [experiences, setExperiences] = useState("");
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  //   let i = changed();
  // console.log(i);
  console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
  console.log("response=====");
  console.log(Filledresponse);
  console.log(educations);
  console.log(experiences);

  useEffect(() => {
    setVisibility(true);
  }, []);

  //   setValues1(Filledresponse);
  useEffect(() => {
    setValues2(Filledresponse);
  }, [setValues1]);
  console.log("values2");
  console.log(values2);
  useEffect(() => {
    setEducations(Filledresponse.educations);
    setExperiences(Filledresponse.experiences);
  }, []);
  useEffect(() => {
    setEducations(Filledresponse.educations);
    setExperiences(Filledresponse.experiences);
  }, [Filledresponse]);

  useEffect(() => {
    const savedForm = window.localStorage.getItem("page1");
    // console.log(savedForm);
    if (!isEqual(savedForm, values1)) {
      const parsedForm = JSON.parse(savedForm);
      setValues1(parsedForm);
      // console.log("loaded");
    }
  }, []);

  const AddedExperiences = (experiences) => {
    return (
      <div className="wrapper h-fit mb-0 mt-4">
        {experiences.position ? (
          <>
            <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
              {/* {experiences.position + ", " + experiences.employer} */}
              {experiences.position ? experiences.position + ", " : ""}
              {experiences.employer ? experiences.employer : ""}
            </p>
            <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
              {experiences.start_date ? experiences.start_date + " - " : ""}
              {experiences.due_date ? experiences.due_date : ""}
            </p>
            <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
              {experiences.description}
            </p>
          </>
        ) : null}
        {/* {experiences.position &&
        experiences.employer &&
        experiences.start_date &&
        experiences.due_date &&
        experiences.description ? (
          <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
        ) : null} */}
      </div>
    );
  };

  const AddedEducations = (educations) => {
    return (
      <div className="wrapper h-fit mt-3 mb-0">
        {educations.institute ? (
          <>
            <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
              {/* {educations.position + ", " + educations.employer} */}
              {educations.institute ? educations.institute + ", " : ""}
              {educations.degree ? educations.degree : ""}
            </p>
            <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-2 italic ">
              {educations.due_date ? educations.due_date : null}
            </p>
            <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3 font-hel  ">
              {educations.description}
            </p>
          </>
        ) : null}
        {/* {educations.institute &&
        educations.degree &&
        educations.due_date &&
        educations.description ? (
          <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
        ) : null} */}
        {/* {createNewForms({ experiences })} */}
      </div>
    );
  };

  function createNewExperiences() {
    if (experiences)
      for (let index = 1; index <= experiences.length; index++) {
        console.log("sssssssssssssssssssss");
        console.log(index);
        console.log(experiences[index]);
        // return AddedExperiences(experiences[index - 1]);
        return [...Array(experiences.length - 1)].map((e, i) => (
          <div>{AddedExperiences(experiences[i + 1], index)}</div>
        ));
      }
  }

  function createNewEducations() {
    if (educations)
      for (let index = 1; index <= educations.length; index++) {
        console.log("sssssssssssssssssssss");
        console.log(index);
        console.log(educations[index]);
        // return AddedEducations(educations[index - 1]);
        return [...Array(educations.length - 1)].map((e, i) => (
          <div>{AddedEducations(educations[i + 1], index)}</div>
        ));
      }
  }
  console.log("eeeeeeeeeeeeeeee");
  console.log(educations);
  console.log(experiences);

  const getBack = () => {
    localStorage.clear();
    navigate("/");
  };

  // console.log(values1.photo);
  return (
    <div className="flex flex-row">
      <div className="h-screen w-[29%] ">
        <button
          className="w-[50px] h-[50px] bg-no-repeat bg-cover bg-center bg-backicon  ml-[50px]
          mt-[50px]"
          onClick={() => getBack()}
        ></button>
      </div>
      <div className="w-[42%]  flex flex-row   my-10 px-20 border-solid border-[1px] border-black justify-center items-center align-middle">
        <div className="w-[100%]  h-fit bg-white flex  justify-left box-border font-hel break-words ">
          <div className="w-[83%] h-fit  flex flex-col mt-[74px] pb-10 ">
            {Filledresponse ? (
              <div className="w-[100%] h-fit  flex flex-col ">
                <div className="flex w-[100%] h-fit flex-row mb-3">
                  <div className="flex w-[62%] h-fit flex-col ">
                    <div className="wrapper min-h-[36px]">
                      <p className="text-3xl font-extrabold text-orangeText">
                        {Filledresponse.name ? Filledresponse.name + " " : null}
                        {Filledresponse.surname ? Filledresponse.surname : null}
                      </p>
                    </div>
                    <div className="wrapper min-h-[74px]">
                      <div className="flex flex-row">
                        {Filledresponse.email ? (
                          <>
                            <img
                              src={emailicon}
                              alt=""
                              className={"w-[20px] h-[20px] mt-[6px] mr-2"}
                            ></img>

                            <p className="  text-lg font-medium text-black mb-1 ">
                              {Filledresponse.email}
                            </p>
                          </>
                        ) : null}
                      </div>
                      <div className="flex flex-row">
                        {Filledresponse.phone_number ? (
                          <>
                            <img
                              src={phoneicon}
                              alt=""
                              className={"w-[20px] h-[20px] mt-[6px] mr-2"}
                            ></img>

                            <p className="text-lg  font-medium  text-black mb-1   ">
                              {Filledresponse.phone_number}
                            </p>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div className="wrapper h-fit mb-0">
                      {Filledresponse.about_me ? (
                        <>
                          <p className="text-lg h-fit font-bold text-orangeText mb-4">
                            {"ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
                          </p>
                          <p className=" text-black h-fit w-[100%] text-[16px] font-medium leading-5 mb-3 ">
                            {Filledresponse.about_me}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex w-[38%] h-fit flex-col ">
                    <div className="flex w-fit h-fit flex-col ">
                      {/* {Filledresponse.image ? (
                      <img
                        src={Filledresponse ? Filledresponse.image : null}
                        alt=""
                        className={"w-[100%] aspect-square rounded-full"}
                      ></img>
                    ) : null} */}
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
                {Filledresponse.name &&
                Filledresponse.surname &&
                values1.photo ? (
                  <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)]"></div>
                ) : null}
                <div
                  className={
                    Filledresponse.experiences[0].position &&
                    Filledresponse.experiences[0].employer
                      ? "w-[100%] h-fit  flex flex-col "
                      : "hidden"
                  }
                >
                  <div className="wrapper min-h-[36px] mt-5 mb-5">
                    <div className="wrapper h-fit mb-0">
                      {Filledresponse.experiences[0].position ? (
                        <>
                          <p className="text-lg h-fit font-bold text-orangeText mb-3">
                            {"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}
                          </p>
                          <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
                            {/* {Filledresponse.experiences[0].position + ", " + Filledresponse.experiences[0].employer} */}
                            {Filledresponse.experiences[0].position
                              ? Filledresponse.experiences[0].position + ", "
                              : ""}
                            {Filledresponse.experiences[0].employer
                              ? Filledresponse.experiences[0].employer
                              : ""}
                          </p>
                          <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
                            {Filledresponse.experiences[0].start_date
                              ? Filledresponse.experiences[0].start_date + " - "
                              : ""}
                            {Filledresponse.experiences[0].due_date
                              ? Filledresponse.experiences[0].due_date
                              : ""}
                          </p>
                          <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
                            {Filledresponse.experiences[0].description}
                          </p>
                        </>
                      ) : null}
                      {Filledresponse.experiences[0].position &&
                      Filledresponse.experiences[0].employer &&
                      Filledresponse.experiences[0].start_date &&
                      Filledresponse.experiences[0].due_date &&
                      Filledresponse.experiences[0].description ? (
                        <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
                      ) : null}
                      {createNewExperiences({ experiences })}
                    </div>
                    <div className="wrapper h-fit mt-5 mb-0">
                      {Filledresponse.experiences[0].position ? (
                        <>
                          <p className="text-lg h-fit font-bold text-orangeText mb-3">
                            {"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"}
                          </p>
                          <p className=" text-black h-fit w-[100%] text-[16px] font-semibold  mb-1 ">
                            {/* {values1.position + ", " + values1.employer} */}
                            {Filledresponse.educations[0].institute
                              ? Filledresponse.educations[0].institute + ", "
                              : ""}
                            {Filledresponse.educations[0].degree
                              ? Filledresponse.educations[0].degree
                              : ""}
                          </p>
                          <p className=" text-textGray h-fit w-[100%] text-[16px] font-medium  mb-3 italic ">
                            {Filledresponse.educations[0].due_date
                              ? Filledresponse.educations[0].due_date
                              : null}
                          </p>
                          <p className=" text-black h-fit w-[100%] text-[16px]    tracking-normal font-medium	 mb-3  font-hel  ">
                            {Filledresponse.educations[0].description}
                          </p>
                        </>
                      ) : null}
                      {Filledresponse.educations[0].institute &&
                      Filledresponse.educations[0].degree &&
                      Filledresponse.educations[0].due_date &&
                      Filledresponse.educations[0].description ? (
                        <div className="flex w-[100%] h-[1px] flex-col bg-[rgba(200,200,200,1)] "></div>
                      ) : null}
                      {createNewEducations({ educations })}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <img
              src={logoicon}
              alt=""
              className={"w-[42px] h-[42px] mt-40 "}
            ></img>
          </div>
        </div>
      </div>
      <div className="h-screen w-[29%] flex justify-center  ">
        {visibility ? (
          <div className="w-[77%] h-fit  mt-10 shadow-black shadow-md  rounded-lg flex flex-col px-4 py-2">
            <div onClick={console.log("aaaaa")} className="flex justify-end">
              <button
                className="w-[20px] h-[20px] bg-no-repeat bg-cover bg-center bg-xicon"
                onClick={() => setVisibility(false)}
              ></button>
            </div>
            <div className="my-3">
              <h1 className="text-3xl text-black font-semibold drop-shadow-lg shadow-black">
                რეზიუმე წარმატებით
              </h1>
              <h1 className="text-3xl text-black font-semibold drop-shadow-lg shadow-black flex flex-row mt-4 mb-5">
                გაიგზავნა
                <img
                  src={partypopper}
                  alt=""
                  className={"w-[30px] h-[30px] ml-4 mt-1 "}
                ></img>
              </h1>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
