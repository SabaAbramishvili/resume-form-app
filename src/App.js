import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Root />}>
      <Route>
        <Route path="/" index element={<Home />} />
        <Route path="/Form1" element={<Form1 />} />
        <Route path="/Page" element={<Page />} />
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
        <Link to="/Page">Page</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
