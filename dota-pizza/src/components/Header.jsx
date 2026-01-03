import React, { useState } from "react"
import logo from '../images/pizza.png'
import SignUp from "./Signup.jsx"
import '../styles/header.css'


export default function Header() {
    return (
        <header>
            <Logo size={100} />
            <h1 className="header__title">DotaPizza</h1>
            <DotaCoins/>
            <RegisterButton/>
        </header>
    )
}

function Logo({size}){
    return(
        <img src={logo} height={size} width={size} alt="pizza_logo" className="logo"  />
    )

}

function DotaCoins(){
    return(
        <button className="dota_button">
        <div className="dota_icon"></div>
        <span>Дотакоины</span>
        </button>
    )
}

function RegisterButton(){
    const [isWindow, setIsWindow] = useState(false)

    function openWindow(){
        setIsWindow(true)
    }
    function closeWindow(){
        setIsWindow(false)
    }

    
    return(
        <button className="register_button" onClick={openWindow}>
            Вход
        </button>
        
    )

}