import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./auth/Login";
import { Signup } from "./auth/Signup";
import { ForgetPassword } from "./auth/ForgetPassword";
import { ResetPassword } from "./auth/ResetPassword";
import { VerifyEmail } from "./auth/VerifyEmail";

import { MainLayout } from "./layout/MainLayout";
import { HeroSection } from "./components/HeroSection";
import { Profile } from "./components/Profile";
import { SearchPage } from "./components/SearchPage";
import { ResturantDetail } from "./components/ResturantDetail";
import { Cart } from "./components/Cart";
import { Resturant } from "./admin/Resturant";
import { AddMenu } from "./admin/AddMenu";
import { Orders } from "./admin/Orders";
import { Success } from "./components/Success";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/status",
        element: <Success />,
      },
      {
        /* Admin Start from here */
      },
      {
        path: "/admin/resturant",
        element: <Resturant />,
      },
      {
        path: "/admin/menu",
        element: <AddMenu />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
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
