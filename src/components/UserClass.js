import React from "react";
import { LOGO_URL } from "../utils/constants";

class UserClass extends React.Component{
constructor(props){
    super(props);
  
    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default"
      }
    };
// console.log('child1 const ')
}
async componentDidMount(){
  const data =await fetch("https://api.github.com/users/AmitaRawattt");
  const json =await data.json();
  console.log(json); 

//   console.log('child1 mount ')
  this.setState({
    userInfo:json,
  })

}
componentDidUpdate(){
    // console.log('child1 Updatde ')
}
render(){
    
    // console.log('child1 render')

    // const{name,contact,location}=this.props;
    const {count,count2}=this.state;
    const{name,location}=this.state.userInfo;
    return(
        <div className="user-card w-[450px] leading-10  p-4 shadow-lg rounded-lg border border-solid border-slate-200 font-bold text-xl my-12 mx-auto">
           
            <h2 >Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: amitaarawatt@gmail.com</h2>
        </div>
    )
}
}
export default UserClass;