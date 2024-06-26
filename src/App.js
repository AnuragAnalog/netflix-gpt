import { useEffect } from "react"
import { Provider, useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";

import Error from "./components/Error"
import HomePage from "./components/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Browse from "./components/Browse"
import LogIn from "./components/LogIn"
import appStore from "./utils/appStore"
import { auth } from "./firebase"
import { addUser, removeUser } from "./utils/userSlice"
import { updateTrailerIndex } from "./utils/movieSlice"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    // Timer to set the random index from 1 to 20 in movie slice redux store

    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 20)
      dispatch(updateTrailerIndex(randomIndex))
    }, 300000)

    return () => clearInterval(timer)
  }, [])

  return (
      <div className="flex flex-col gap-2">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
  );
}

function AppRouter() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
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
