import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import ProductDetails from "../page/Header/ProductDetails";
import Wishlist from "../page/Wishlist/Wishlist";
import Contact from "../page/Contact/Contact";

import About from "../page/About/About";
import Error from "../page/Error";
import MyCart from "../page/MyCart/MyCart";
import Privacy from "../page/Privacy/Privacy";
import SignUp from "../password/SignUp";
import Login from "../password/Login";
import Shop from "../page/shop/Shop";
import Checkout from "../page/CheckOut/CheckOut";
import Payments from "../components/Payments";
import PaymentHistory from "../components/PaymentHistory";
import History from "../components/History";
import Test from "../page/Test";
import ProductDetails2 from "../page/Header/ProductDetails2";






export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails />,
                loader:({params}) => fetch(`https://electronics-server-nine.vercel.app/addCartPost/${params.id}`)
          
            },
            {
                path:'/productDetails2/:id',
                element:<ProductDetails2 />,
                loader:({params}) => fetch(`https://electronics-server-nine.vercel.app/products/${params.id}`)
          
            },
            {
                path:'/wishlist',
                element:<Wishlist />,
                loader:({}) => fetch('https://electronics-server-nine.vercel.app/wishlist')
            },
            {
               path:'/about',
               element:<About />

            },
            {
                path:'/mycart',
                element:<MyCart />,
                loader:({})=>fetch('https://electronics-server-nine.vercel.app/addCartPost')
            },
            {
                path:'/privacy',
                element:<Privacy/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/shop',
                element:<Shop />
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>,
                loader:({})=>fetch('https://electronics-server-nine.vercel.app/addCartPost')
            },
            {
                path:'/payments',
                element:<Payments />
            },
            {
                path:'/paymenthistory',
                element:<PaymentHistory></PaymentHistory>,
                loader:({}) => fetch('https://electronics-server-nine.vercel.app/addCartPost')
            },
            {
                path:'history',
                element:<History></History>,
                
            },
            {
                path:'/test',
                element:<Test></Test>
            }
          
          
         
        ]
    }
]) 