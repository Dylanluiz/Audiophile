import React, {createContext, useEffect, useState} from "react";
import data from "./data";
import Header from "./Components/Header";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AuthRequired from "./Components/AuthRequired";
import PageNotFound from "./pages/PageNotFound";


const UserContext = createContext()

export default function App() {
  const [createUser, setCreateUser] = useState(null)
  const [userUpdate, setUserUpdate] = useState(false)

  useEffect(() => {
    const isUser = localStorage.getItem('user')

    if (isUser) {
      setCreateUser(JSON.parse(isUser))
    }

  }, [userUpdate])


  const user = {setCreateUser, createUser, setUserUpdate}
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='login' element={<Login />}/>
            <Route path="headphones"/>
            <Route path="speakers"/>
            <Route path="earphones"/>
            
            <Route element={<AuthRequired />}>
              <Route path='account' element={<Account />}/>
            </Route>

            <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    
  )
}

export {UserContext}