import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Navbar from "./Components/Navbar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import ResumeFinal from "./Components/ResumeFinal";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

export default function App({ setValues2 }) {
  const [response, setResponse] = useState({});
  const [Filledresponse, setFilledResponse] = useState({});

  console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");

  console.log(response);
  let propSymb = Object.getOwnPropertySymbols(response);
  console.log(propSymb.length);
  console.log(response.id);
  console.log(Filledresponse.length);
  if (response.id != undefined && Filledresponse.id === undefined) {
    setFilledResponse(response);
    console.log("filled");
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Root />}>
      <Route>
        <Route path="/" index element={<Home />} />
        <Route path="/Form1" element={<Form1 />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 setResponse={setResponse} />} />
        <Route
          path="/ResumeFinal"
          element={<ResumeFinal Filledresponse={Filledresponse} />}
        />
      </Route>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
const Root = () => {
  return (
    <>
      <div className="">
        <Link to="/">/</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Form1">Form1</Link>
        <Link to="/Page1">Page1</Link>
        <Link to="/Page2">Page2</Link>
        <Link to="/Page3">Page3</Link>
        <Link to="/ResumeFinal">ResumeFinal</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
