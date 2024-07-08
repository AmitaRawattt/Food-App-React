import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Test from './components/Test'

// import './tailwind.css';

import { Suspense,lazy } from 'react';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

const Grocery=lazy(()=>import('./components/Grocery'));
import Cart from './components/Cart';


const AppLayout =()=>{
    const [userInfo,setUserInfo]=useState();
    useEffect(()=>{
const data={
    name:"Amita Rawat"
}
setUserInfo(data.name);
    },[])

    return (
       <Provider store={appStore}> 
        <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className='app'>
            <Header></Header>
           <Outlet/>
        </div>
        </UserContext.Provider>
    </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Body/>
    },
        {
            path:'/about',
            element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/grocery',
        // element:<Grocery/>
        element:<Suspense fallback={(<h1>Loading............</h1>)}><Grocery/></Suspense>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
    {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
    },
,
{
    path:'/test',
    element:<Test/>
}
    ]
        },
        
        
])
const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);