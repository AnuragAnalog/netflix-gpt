import React from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Error from "./components/Error"
import HomePage from "./components/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Browse from "./components/Browse"
import LogIn from "./components/LogIn"

function App() {
  return (
    <div className="flex flex-col gap-2">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

function AppRouter() {
  return (
    <RouterProvider router={appRouter} />
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/login",
        element: <LogIn />
      }
    ],
    errorElement: <Error />
  }
])

export default AppRouter;
