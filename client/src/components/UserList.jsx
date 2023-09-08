import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios';
  import { useState,useEffect } from "react";



const UserList = ()=>{
    const [responseData, setResponseData] = useState([]);
    const [loaded,setLoaded]=useState(false)
    const [numb,setNumb]=useState(0)

    // using dns , we are calling http://www.example.com instead of 19.193.3.1
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(response => {console.log(response); setResponseData(response.data)  })
        .then(res=>setLoaded(true))
        .catch(err=>{console.log(err);console.log("err"); setResponseData("error")});
    },[]); 
    return(
        <>
       <Link to={`/userForm`}>Create User  </Link>
        {responseData.map((user,index)=>{
            return <div key={index}>

            <Link to={`/details/${index}`}>{user.firstName }  </Link>
            </div>
        })}
        </>
    )
}
export default UserList;