import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";


const ItemList =({data})=>{
const dispatch=useDispatch();

const handleAddItem=(item)=>{
//dispatch an actionl
console.log(item);
dispatch(addItem(item));
}

return(
    <div>
      
        {data?.map((item)=>{
      return( 
        <div key={item.id} className="p-2 m-2  border-b-2 border-b-gray-200">
            <div className="flex justify-between items-center leading-6">
                <div>

                <span className="font-semibold text-lg">{item?.itemName} - </span>
                <span className="text-md "> ₹ {item?.itemPrice}</span>
                </div>
                <button className=" text-md text-green-400 uppercase rounded-md shadow-md bg-white px-2 py-1"
                onClick={() => handleAddItem(item)} >Add +</button>
              
            </div>
            <p className="text-sm text-gray-500">{item.itemDesc}</p>
        </div>)})}
     
    </div>
)

}
export default ItemList;