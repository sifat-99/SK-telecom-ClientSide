import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./Components/AllPages/HomePage/HomePage";
import Login from "./Components/AllPages/LoginPage/Login";
import Registration from "./Components/AllPages/RegistrationPage/Registration";
import Root from "./Components/Root";
import AddData from "./Components/AllPages/PostData/AddData";
import PrivateRoute from "./Components/AllPages/PrivateRoute/PrivateRoute";
import BrandWiseData from "./Components/AllPages/BrandWiseData/BrandWiseData";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/Brands.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/addData",
        element:<PrivateRoute><AddData></AddData></PrivateRoute>
      },{
        path: "/profile",
        
      },
      {
        path: "/:id",
        element: <BrandWiseData></BrandWiseData>,
        loader: () => fetch(`/Brands.json`),
      }
    ],
  },
]);

export default Routes;
