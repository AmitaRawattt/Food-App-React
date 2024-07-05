import { useState,useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header=()=>{
    const status=useOnlineStatus();
   const [btnName,setBtnName]=useState('Login');
const data=useContext(UserContext);
const {loggedInUser}=data;
const cartItems=useSelector((store)=>store.cart.items)
console.log('items',cartItems)

    return (
        <div className="flex header justify-between shadow-md m-2">
            <div className='logo-container'>

            <img src={LOGO_URL} alt="logo" className='logo w-32 m-1'/>
            </div>
          <div className='nav-items flex items-center'>

          
            <ul className='flex justify-between p-4 m-4 '>
                <li className='px-4'>Online Status {status === true?'✅':'🔴'}

                </li>
                <li className='px-4'><Link to='/'>Home</Link></li>
                <li className='px-4'><Link to='/about'>About us</Link></li>
                <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
                <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                <li className='px-4 font-bold '><Link to='/cart'>Cart 🛒 ({cartItems.length} items)</Link></li>
             
               <button className="login-btn" onClick={()=>{

                  btnName==='Login'? setBtnName('Logout') : setBtnName("Login");
               }
               }>{btnName}</button>
                 <li className='px-4 font-bold'>{loggedInUser}</li>
            </ul>
            </div>
        </div>
    )
}
export default Header;