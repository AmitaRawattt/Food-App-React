import { useState } from "react";

const Test  =()=>{
    const [value,setValue]=useState({
        name:'',
        email:''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevState) =>(
            {
            ...prevState,
            [name]: value
        }
    )

);
    };
return (
    <div className="mx-auto p-10 flex flex-row gap-7 ">
         <input placeholder="name" className="p-2 border border-black" name="name" onInput={(e)=>{handleChange(e)}} ></input>
         <input placeholder="email" className="p-2 border border-black" name="email" onInput={(e)=>{handleChange(e)}}></input>
         <button onClick={()=>{
            console.log(value)
         }}>Submit</button>
    </div>
)
}
export default Test;