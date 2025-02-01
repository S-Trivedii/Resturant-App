import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "./MainLayout";
import { Login } from "./auth/login";
import { Signup } from "./auth/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
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
