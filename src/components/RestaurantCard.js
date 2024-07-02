const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard=({resData})=>{
    // (console.log(resData.data));
    const {time,name,cuisine,stars,costForTwo,img}=resData.data;
    
    return(
    <div className='res-card m-4 p-4 bg-gray-100 hover:bg-gray-200 hover:translate-y-[-3px] hover:transition-all hover:shadow-xl transition duration-600 ease-in-out leading-6 w-[250px] h-auto rounded-md cursor-pointer' >
      <img src={img} alt="logo" className='res-logo rounded-md w-[100%] h-[164px]'/>
    <h3 className="font-bold mt-3 mb-2 text-lg">{name}</h3>
    <h4>{cuisine}</h4>
    <h4>⭐{stars}  ({time})</h4>
    <h4>Rs {costForTwo} - Cost for two</h4>
    </div>
    )


    
}

export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolutem-2 p-2 rounded-md bg-black text-white ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}; 

export default RestaurantCard;