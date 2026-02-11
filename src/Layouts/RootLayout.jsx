import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"



function RootLayout() {
    return (
        <>
            <Navbar />
            <main className="p-6">
                <Outlet />
            </main>
        </>
    )
}
export default RootLayout