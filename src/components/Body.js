import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
    const PromotedRestaurantCard= withPromotedLabel(RestaurantCard);
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        console.log("Use Effect called");
        fetchData();
    },[]);
   const  fetchData=()=>{
    // const data=fetch()
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);


    };

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you are offline! Please check your INTERNET CONNECTYION</h1>

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className='body '>
            <div className='filter flex justify-between items-center '>
                <div>

                <button className="filter-btn px-4 py-1 bg-green-100 rounded-lg mx-3" onClick={()=>
                    {
                        console.log("Button clicked");
                        const filteredList= listOfRestaurant.filter(res=> res?.data?.stars > 4);
                        console.log(filteredList);
                    //  setListOfRestaurant(filteredList);
                    setFilteredRestaurant(filteredList);
                    //    <RestaurantCard resData={filteredList} key={filteredList.id}/>
                    }
                    }>Top Rated Restaurant ✨</button>

                </div>
                    <div className="search ">
                        <input type="text" value={searchText} className="search-box border border-solid border-black" onChange=
                        {
                         (e)=>{
                            setSearchText(e.target.value)
                         }
                        }/>
                        <button className="search-btn px-4 py-1 rounded-lg bg-green-100 m-4" onClick={()=>{
                            console.log(searchText);
                          const searchRestaurant= listOfRestaurant.filter((res)=> res.data.name.toLowerCase().includes
                          (searchText.toLowerCase()));
                         console.log(searchRestaurant);
                        //   setListOfRestaurant(searchRestaurant);
                        setFilteredRestaurant(searchRestaurant);

                        }}>Search</button>
                    </div>
            </div>
            <div className='res-container flex flex-wrap items-center justify-center '>
                {/* <RestaurantCard 
                resData={resList[0]}/> */}
            {filteredRestaurant.map(restaurant =>(
                <Link key={restaurant.data.id} to={'/restaurants/' + restaurant.data.id}>
                  {
                restaurant.data.promoted ? (<PromotedRestaurantCard resData={restaurant}/>):
                ( <RestaurantCard resData={restaurant}/>)
                } 
                    
                </Link>
            ))}
               
            </div>
        </div>
    )
    }
    export default Body;