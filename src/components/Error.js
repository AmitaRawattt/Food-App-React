import { useRouteError } from "react-router";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>

        <h1>Oops!!!!!</h1>
        <h2 >Something went Wrong!!!!!!</h2>
        <h3>Error status: {err.status} - {err.statusText}</h3>
        </div>
    )
}
export default Error;