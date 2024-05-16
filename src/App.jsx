import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./component/login-signup/Login"
import SignUp from "./component/login-signup/SignUp"
import GlobalProvider from "./component/context/Provider"
import VerifyPage from "./component/login-signup/VerifyPage"

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
    path: "/sign-up/verify",
    element: <VerifyPage />
  },
])
  return (
    <GlobalProvider>
      <RouterProvider router={router}/>
    </GlobalProvider>
  )
}

export default App