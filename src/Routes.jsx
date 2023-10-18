import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./Components/AllPages/HomePage/HomePage";
import Login from "./Components/AllPages/LoginPage/Login";
import Registration from "./Components/AllPages/RegistrationPage/Registration";
import Root from "./Components/Root";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
               path: "/",
               element:<HomePage></HomePage>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            },
            
        ]
    },

])

export default Routes;