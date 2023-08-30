import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import UserCart from "./UserCart";
import { UserContext } from "../App";

export default function Layout() {
    const {showCart} = useContext(UserContext)

    return (
        <div className="site-wrapper">
            <Header/>
            <main>
                <Outlet />
                {
                showCart ? <UserCart/> : null
                }
            </main>
            <Footer/>
        </div>
    )
}