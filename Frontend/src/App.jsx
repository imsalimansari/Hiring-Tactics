import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
