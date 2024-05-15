import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./component/login-signup/Login"
import SignUp from "./component/login-signup/SignUp"
import GlobalProvider from "./component/context/Provider"

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "",
    element: <></>
  },
])
  return (
    <GlobalProvider>
      <RouterProvider router={router}/>
    </GlobalProvider>
  )
}

export default App