import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import ItemList from "./itemList";

const RestaurantCategory=({categoryData,showItems,setShowIndex})=>{
    const {itemCard,title}=categoryData;
    // const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{

setShowIndex();

  }

    return (
    <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4  cursor-pointer">

       
           <div className="flex justify-between items-center" onClick={handleClick}>

           <span className="font-bold text-lg">{title} ({itemCard.length})</span> 
           <span>⬇</span>
           </div>
         <div>
             { showItems &&  <ItemList data={itemCard} />}
         </div>
     


    </div>
    )
}
export default RestaurantCategory;