import React, { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../App"
import { auth } from "../../firebase"

export default function AuthRequired() {
    const {createUser} = useContext(UserContext)
    const user = sessionStorage.getItem('firebase:authUser:AIzaSyBPIoj-qEYzyrTSNVbsbv4d6wiEwePw29U:[DEFAULT]')

    if (!user) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}