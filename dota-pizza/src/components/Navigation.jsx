import React, { useEffect, useState } from "react";
import '../styles/menu.css'
import arrow from '../images/arrow-down.svg'


let categories = ['Пиццы', 'Закуски', 'Соусы', 'Салаты', 'Десерты', 'Напитки', 'Игрушки', 'Комбо', 'Акции'] 


export default function Navigation(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        function handleScroll(){
            if(window.scrollY > (innerHeight / 2.3)){
                setScrolled(true)

            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <nav className={`menu ${scrolled ? 'fixed': ''}`}>
            <ul>
                {categories.map((category) => <li key={category}><a href="#">{category}</a></li>)}
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

