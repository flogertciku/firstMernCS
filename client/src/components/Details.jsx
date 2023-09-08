import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
const Details = ()=>{
    const [responseData, setResponseData] = useState({});
    const [loaded,setLoaded]=useState(false)
    const [numb,setNumb]=useState(0)
    const navigate = useNavigate()

    // using dns , we are calling http://www.example.com instead of 19.193.3.1
    const {id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(response => {console.log(response); setResponseData(response.data)  })
        .then(res=>setLoaded(true))
        .catch(err=>{console.log(err);console.log("err"); setResponseData("error")});
    },[]); 
    const deleteUser = ()=>{
        axios.delete(`http://localhost:8000/api/users/${id}`)
        .then(response => {console.log("pergjigje nga response"); setResponseData(response.data)  })
        .then(res=>navigate("/"))
        .catch(err=>{console.log(err);console.log("err"); setResponseData("error")});
    }
    return(
        <>
        {responseData !=="error" ? <h2>{responseData.firstName} {responseData.lastName}</h2> : "error"}
        <button onClick={()=>deleteUser(id)}>Delete {responseData.firstName}</button>
        
        </>
    )
}
export default Details;