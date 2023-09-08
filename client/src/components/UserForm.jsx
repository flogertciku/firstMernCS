import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UserForm = ()=>{
    
    const [firstName,setFirstName]=useState()
const [lastName,setLastName]=useState()
const navigate = useNavigate()

const createUser = (e)=>{
    e.preventDefault();
    
    // create a javascript object to hold all of the values
    const newUser = { 
        firstName: firstName, 
        lastName: lastName, 
       
    };
    axios.post('http://localhost:8000/api/users',newUser)
    .then(response => {console.log("pergjigje nga response");  })
    .then(res=>navigate("/"))
    .catch(err=>{console.log(err);console.log("err"); });
}

    return(
        <>
        <form onSubmit={createUser}>
            <label htmlFor="">FirstName</label>
            <input type="text"  onChange={ (e) => setFirstName(e.target.value) } />
            <label htmlFor="">LastName</label>
            <input type="text"  onChange={ (e) => setLastName(e.target.value) } />
        <button type="submit">Create User</button>

        </form>
        </>
    )
}
export default UserForm;