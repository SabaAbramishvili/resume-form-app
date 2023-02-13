import backicon from "./Images/backicon.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  const getBack = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      className={
        props.pageName
          ? "w-[86.5%] h-fit flex flex-col mt-4 mb-14 box-border font-hel items-start justify-start "
          : "hidden"
      }
    >
      <div className="h-fit w-[100%]  flex flex-row  ">
        <div className="w-[15.6%] flex justify-center items-center mt-1">
          <img
            src={backicon}
            alt="back"
            className="w-10 h-10 hover:cursor-pointer"
            onClick={getBack}
          ></img>
        </div>

        <div className="h-fit w-[84.4%]  flex flex-col   my-3  ">
          <div className="h-fit w-[100%] flex flex-row justify-between items-center my-3  ">
            <p className="font-extrabold text-2xl">{props.pageName}</p>
            <p className="h-fit font-medium text-xl  ">{props.pageNum}</p>
          </div>
          <div className="h-[0.5px] w-[100%] bg-black flex"></div>
        </div>
      </div>
    </div>
  );
}
