export default function Navbar(props) {
  return (
    <div
      className={
        props.pageName
          ? "w-[100%] h-fit flex flex-col justify-between mt-10 mb-16 box-border font-hel items-center"
          : "hidden"
      }
    >
      <div className="h-fit w-[100%]  flex flex-col  items-center my-3  ">
        <div className="h-fit   w-[100%] flex flex-row justify-between items-center my-3  ">
          <p className=" font-bold text-xl">{props.pageName}</p>
          <p className="h-fit font-medium text-lg ">1/3</p>
        </div>
        <div className="h-[0.5px] w-[100%] bg-black flex"></div>
      </div>
    </div>
  );
}
