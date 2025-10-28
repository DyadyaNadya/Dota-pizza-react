import React, { useState } from "react";
import '../styles/menu.css'
import arrow from '../images/arrow-down.svg'


export default function Navigation(){
    return(
        <nav class="menu">
    <ul>
        <li><a href="#" id="pizza">Пиццы</a></li>
        <li><a href="#" id="snack">Закуски</a></li>
        <li><a href="#">Соусы</a></li>
        <li><a href="#">Салаты</a></li>
        <li><a href="#">Десерты</a></li>
        <li><a href="#">Напитки</a></li>
        <li><a href="#">Игрушки</a></li>
        <li><a href="#">Комбо</a></li>
        <li><a href="#">Акции</a></li>
        <Dropdown/>

    </ul>
</nav>
    )
}


function Dropdown(){
    const [isVisible, setIsVisible] = useState(false);
    return (
        <li className="dropdown">Ещё <img src={arrow} alt="" />
        <ul class = "dropdown-menu">
                <li><a href="">Подарки</a></li>
                <li><a href="">Мерч</a></li>
                <li><a href="">Хиты</a></li>
                <li><a href="">Детям</a></li>
            </ul></li>
    )
}