import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./Components/AllPages/HomePage/HomePage";
import Login from "./Components/AllPages/LoginPage/Login";
import Registration from "./Components/AllPages/RegistrationPage/Registration";
import Root from "./Components/Root";
import AddData from "./Components/AllPages/PostData/AddData";
import PrivateRoute from "./Components/AllPages/PrivateRoute/PrivateRoute";
import BrandWiseData from "./Components/AllPages/BrandWiseData/BrandWiseData";
import Cart from "./Components/AllPages/UserCart/Cart";
import ProductDetails from "./Components/AllPages/BrandWiseData/ProductDetails";
import Update from "./Components/AllPages/UpdateData/Update";

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
        element:<PrivateRoute><h1>Profile</h1></PrivateRoute>
      },
      {
        path: "/:id",
        element: <BrandWiseData></BrandWiseData>,
        loader: () => fetch(`/Brands.json`),
      },
      {
        path: "/Cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('https://server-side-assignment10.vercel.app/cart'),
      },
      {
        path: "/dashboard",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path:"/:id/:_id",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('https://server-side-assignment10.vercel.app/products'),
      },
      {
        path: "/update/:id",
        element:<Update></Update>,
        loader: ({params}) =>
        {
            console.log(params)
            return fetch(`https://server-side-assignment10.vercel.app/products/${params.id}`)
        },
      }
    ],
  },
]);

export default Routes;
