import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import ProductDetails from "../page/Header/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails />,
                loader:({params}) => fetch(`http://localhost:5000/addCartPost/${params.id}`)
          
            }
        ]
    }
]) 