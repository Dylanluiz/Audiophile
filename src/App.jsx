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
import ProductLayout from "./Components/ProductLayout";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import NoItemsInCart from "./Components/NoItemsInCart";

const UserContext = createContext()

export default function App() {
  const [createUser, setCreateUser] = useState(null)
  const [userUpdate, setUserUpdate] = useState(false)
  const [userCart, setUserCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [isCheckedOut, setIsCheckedOut] = useState(false)
  const [noItems, setNoItems] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   const cart = localStorage.getItem('cart')

  //   if (!cart) {
  //     localStorage.setItem('cart', JSON.stringify(userCart))
  //   } else {
  //     const userCartData = localStorage.getItem('cart')
  //   }

  // }, [])

  useEffect(() => {
    const isUser = sessionStorage.getItem('firebase:authUser:AIzaSyBPIoj-qEYzyrTSNVbsbv4d6wiEwePw29U:[DEFAULT]')

    if (isUser) {
      setCreateUser(JSON.parse(isUser))
    }

  }, [userUpdate])

    const headphoneData = data.map(item => {
      if (item.category === 'headphones') {
          return item
      } 
  }).filter(item => item !== undefined).reverse()

  const earphoneData = data.map(item => {
    if (item.category === 'earphones') {
      return item
    }
  }).filter(item => item !== undefined).reverse()

  const speakerData = data.map(item => {
    if (item.category === 'speakers') {
      return item
    }
  }).filter(item => item !== undefined).reverse()

  const user = {
            setCreateUser, 
            createUser, 
            setUserUpdate, 
            userCart, 
            setUserCart, 
            setShowCart, 
            showCart, 
            isCheckedOut, 
            setIsCheckedOut,
            noItems,
            setNoItems,
            setIsMenuOpen,
            isMenuOpen
          }

  const docBody = document.documentElement

  function noScoll() {
      if (showCart) {
        docBody.classList.add('no-scroll')
      } else if (!showCart) {
        docBody.classList.remove('no-scroll')
      }
  }
  
  noScoll()

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='login' element={<Login />}/>
            <Route element={<NoItemsInCart/>}>
              <Route path="/checkout" element={<Checkout/>}/>
            </Route>
            <Route path="/products" element={<ProductLayout/>}>
               <Route 
                  path="headphones" 
                  element={<ProductPage data={headphoneData} 
                  category='headphones' />}/>
               <Route 
                  path="speakers"
                  element={<ProductPage data={speakerData} 
                  category='speakers'/>}
                  />
               <Route 
                  path="earphones"
                  element={<ProductPage data={earphoneData} 
                  category='earphones'/>} 
                  />
                <Route path="headphones/:id" element={<Product/>}/>
                <Route path="speakers/:id" element={<Product/>}/>
                <Route path="earphones/:id" element={<Product/>}/>
            </Route>
            
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