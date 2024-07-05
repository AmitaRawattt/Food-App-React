import {createContext,useState} from 'react';

// const [demo,setDemo]=useState('Demo');
const UserContext=createContext({
    loggedInUser:"Default User",

});
export default UserContext;