import React, { useEffect, useState } from "react";
import '../styles/menu.css'
import arrow from '../images/arrow-down.svg'


let categories = ['Пиццы', 'Закуски', 'Соусы', 'Салаты', 'Десерты', 'Напитки', 'Игрушки', 'Комбо', 'Акции'] 


export default function Navigation(){
    // const [isFixed, setIsFixed] = useState(false);
    // const [isBlurred, setIsBlurred] = useState(false);
    // const [navHeight, setNavHeight] = useState(0);

    // useEffect(() => {
    //     const menu = document.querySelector
    // })

    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = (e) =>{
        const {scrollTop, scrollHeight, clientHeight} = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        )
        setScrollPos(position)
    }


    return(
        <nav class="menu" onScroll={handleScroll} >
            <ul>
                {categories.map((catrgory) => <li><a href="#">{catrgory}</a></li>)}
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

