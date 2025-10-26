import React from "react"
import logo from '../images/pizza.png'
import '../styles/header.css'

export default function Header() {
    return (
        <header>
            <Logo size={100} />
            <h1 className="header__title">Dota Pizza</h1>
        </header>
    )
}

function Logo({size}){
    return(
        <img src={logo} height={size} width={size} alt="pizza_logo" className="logo"  />
    )

}