import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import resMenu from "../utils/mockRestaurantMenu";

import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
 
const RestaurantMenu=()=>{

// useEffect(()=>{
// fetchMenu();
// },[]);


// const [resInfo,setResInfo]=useState({});
const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);


// const fetchMenu=()=>{
//     console.log(resMenu,"resmenu");
//     const menuItem=resMenu.filter(item=>item?.data?.id === Number(resId));
//     console.log(menuItem[0]?.data,"qwertyui");
//     setResInfo(menuItem[0]?.data);
// }

// console.log(resInfo,"..............");
// const {name,items}=resInfo;
// console.log(name,"Namee");
// console.log(resInfo,"info");

const {name,other,items,cuisine,stars,
    costForTwo,
    time,accCards}=resInfo;
// console.log(items);
// console.log(accCards,"cardss");


if(!resInfo){
   return <Shimmer/>
}
    return(
    
        <div className="menu my-8 leading-6 mx-auto w-[50%] px-5 pb-4 rounded-md shadow-lg border border-solid border-gray-100">
        
            <h1 className="menu-name text-lg font-bold mt-3 mb-2">{name}</h1>
            <div>
                <h3 className="menu-text  ">⭐ {stars} <span className="font-semibold">• Rs {costForTwo} for two</span></h3>
                <h3 className="menu-text">{cuisine}</h3>
                <h3 className="menu-text mb-3">{time}</h3>
                <hr/> 
                 <p className="py-1 px-0">🚴🏻‍♀️ {other?.distance} km | Rs {other?.fee} Delivery fee will apply</p>
            </div>
                <hr /> 

             <ul >
                {accCards?.map((category,index)=>{
                    // console.log(category);
                    return (<li><RestaurantCategory key={category.id} categoryData={category}/></li>)
                    })}
                </ul>   
            <h2 className="mt-4 mb-2 font-bold text-lg">MENU</h2>

            <ul className="menu-list">
               { items?.map((menu)=>
               
                 (<li key={menu?.id} className="menu-item flex justify-between font-normal text-slate-700" ><span>{menu?.foodName}</span> <span>Rs {menu?.cost}</span></li>)

                 )}
                {/* <li>Biryani</li>
                <li>Burger</li>
                <li>Pasta</li> */}
            </ul>
        </div>
    )
    }
    export default RestaurantMenu;