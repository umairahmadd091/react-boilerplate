import React from "react";

//React-router-dom
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Components
import Home from "../pages/home";
import Error from "../pages/error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Navigation = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Navigation;
