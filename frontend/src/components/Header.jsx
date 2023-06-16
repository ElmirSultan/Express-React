import { useEffect, useState } from "react"
import "../components/header.css"
import { Link, useLocation } from "react-router-dom"
export const Header = () => {
    const [active,setActive] = useState("Home");
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActive("Home")
        } else if(location.pathname === "/add"){
            setActive("Add")
        }
    },[location])
    return (
        <div className="header">
            <Link to="/" className="logo">
                User Management System
            </Link>
            <div className="header-right">
                <Link to="/" className={`${active === "Home" ? "active" : ""}`}>Home</Link>
                <Link to="/add"  className={`${active === "Add" ? "active" : ""}`}>Add new user</Link>
            </div>
            
        </div>
    )
}
