import React, { useState } from "react"
import logo from '../images/pizza.png'
import SignUp from "./SignUp.jsx"
import '../styles/header.css'
import '../styles/signUp.css'


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
    const [showSignWindow, setShowSignWindow] = useState(false)

    function showWindowHandler(){
        setShowSignWindow(true)
    }

    function closeWindowHandler(){
        setShowSignWindow(false)
    }

    
    return(
        <>
            <button className="register_button" onClick={showWindowHandler}>
                Вход
            </button>
            <SignUp isOpen={showSignWindow} onClose={closeWindowHandler}/>
        </>
        
    )

}