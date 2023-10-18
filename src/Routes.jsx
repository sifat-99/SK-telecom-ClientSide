import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
               
            },
            
        ]
    },

])

export default Routes;