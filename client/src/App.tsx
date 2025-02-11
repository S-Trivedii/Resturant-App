import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./auth/Login";
import { Signup } from "./auth/Signup";
import { ForgetPassword } from "./auth/ForgetPassword";
import { ResetPassword } from "./auth/ResetPassword";
import { VerifyEmail } from "./auth/VerifyEmail";
import { Navabar } from "./components/Navbar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navabar />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-Password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-Password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
