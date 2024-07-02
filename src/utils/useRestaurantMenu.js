
import { useEffect,useState } from "react";
import resMenu from "../utils/mockRestaurantMenu";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState({});

    useEffect(()=>{
        console.log('useEffect');
        fetchData();
    },[])

    const fetchData=()=>{
        console.log('fetch Data Called',resId);
        // console.log(resMenu,"resmenu");
        const menuItem=resMenu.filter(item=>item?.data?.id === Number(resId));
    
        setResInfo(menuItem[0]?.data);

    }
    return resInfo;
}
export default useRestaurantMenu;