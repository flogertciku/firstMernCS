import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import UserList from './components/UserList'
import Details from './components/Details'
import UserForm from './components/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     
    
      <Routes>
      <Route exact path="/" element={<UserList></UserList>} />
        <Route exact path="/details/:id" element={<Details></Details>} />
        <Route exact path="/userForm" element={<UserForm></UserForm>} />
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App
