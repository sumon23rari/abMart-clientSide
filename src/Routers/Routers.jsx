import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop/Shop";
import Contacts from "../Pages/Contacts/Contacts";
import FaqPage from "../Pages/FaqPage/FaqPage";
import About from "../Pages/About/About";
import SignUp from "../Pages/Register/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import NotFound from "../Pages/NotFound/NotFound";
import ShopDetails from "../Pages/ShopDetails/ShopDetails";
import PrductInfo from "../Pages/ShopDetails/PrductInfo";
import Reviews from "../Pages/ShopDetails/Reviews/Reviews";
import WServices from "../Pages/ShopDetails/WServices";

import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payement/Payment";
import PaymentsHistory from "../Pages/Dashboard/PaymentsHistory/PaymentsHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserMessages from "../Pages/Dashboard/UserMessages/UserMessages";
import BuyProducts from "../Pages/Dashboard/BuyProducts/BuyProducts";

export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shops',
                element:<Shop></Shop>
            },
            {
                path:'/shops/:id',
                element:<ShopDetails></ShopDetails>,
                loader:({params})=>fetch(`http://localhost:9000/products/${params.id}`),
                children:[
                    {
                        path:'productInfo',
                        element:<PrductInfo></PrductInfo>,
                        loader:({params})=>fetch(`http://localhost:9000/products/${params.id}`),
                    },
                    {
                        path:'wServices',
                        element:<WServices></WServices>
                    },
                    {
                        path:'review',
                        element:<Reviews></Reviews>,
                        loader:({params})=>fetch(`http://localhost:9000/products/${params.id}`)
                    }
                ]
            },
         
            {
                path:'/contact',
                element:<Contacts></Contacts>
            },
            {
                path:'/faq',
                element:<FaqPage></FaqPage>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },   
            {
                path:'*',
                element:<NotFound></NotFound>
            },   
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children:[
        {
            path:'cart',
            element:<MyCart></MyCart>
        },
        {
            path:'buyProducts',
            element:<BuyProducts></BuyProducts>,
        },
        {
            path:'userHome',
            element:<UserHome></UserHome>
        },
        {
            path:'adminHome',
            element:<AdminHome></AdminHome>
        },
        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path:'users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path:'addProducts',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
            path:'manageProducts',
            element:<AdminRoute><ManageProducts></ManageProducts></AdminRoute>
        },
        {
            path:'updateItems/:id',
            element:<AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
            loader:({params})=>fetch(`http://localhost:9000/products/${params.id}`)
        },
        {
            path:'paymentsHistory',
            element:<PaymentsHistory></PaymentsHistory>
        },
        {
            path:'userMessage',
            element:<AdminRoute><UserMessages></UserMessages></AdminRoute>,
            loader:()=>fetch(`http://localhost:9000/userMessage`)
        }
       ]
    }
])