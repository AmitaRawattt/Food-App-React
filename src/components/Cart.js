import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log('items',cartItems)
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        
   dispatch(clearCart())
    }

    return(
        <div className="my-8 leading-6 mx-auto w-[50%]  p-4 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Cart 🛒</h1>
            {cartItems.length > 0 ? (
                <div className="flex justify-between mb-3">
                    <h2 className="self-center font-bold text-blue-900">{cartItems.length} Items</h2>
                    <button className="shadow-lg p-3 rounded-lg bg-blue-300 text-white"
                    onClick={handleClearCart}
                    >Clear Cart🗑️</button>
                </div>
            ) : (
                <p className="text-center font-bold mt-4 text-red-600">No items in cart</p>
            )}
                 {
                    cartItems.length> 0 && cartItems?.map((item,index)=>{

                return(   <div key={index} className="flex flex-col mb-2 border-b">
                     <div className=" flex align-center">
                       <h2 className="font-bold text-lg">{item?.itemName}</h2>
                        <p className="self-center font-bold">- ₹{item?.itemPrice}</p>
                     </div>
                     <p className="mb-2">{item.itemDesc}</p>
                  </div>)
                    
                    })
                 }
                
        </div>
    )
}



export default Cart;