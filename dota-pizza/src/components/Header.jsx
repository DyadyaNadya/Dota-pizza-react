import React from "react"
import logo from '../images/pizza.png'
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
    return(
        <button className="register_button">
            Вход
        </button>
    )

}