import React, { useContext } from "react";
import { UserContext } from "../App";
import { Outlet, Navigate } from "react-router";

export default function NoItemsInCart() {
    const {userCart, setNoItems} = useContext(UserContext)
    

    if (userCart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <Outlet/>
    )
}