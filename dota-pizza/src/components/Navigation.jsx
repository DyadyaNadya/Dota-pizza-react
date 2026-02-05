import React, { useEffect, useState } from "react";
import '../styles/menu.css'
import arrow from '../images/arrow-down.svg'
import Basket from '../components/Basket.jsx'


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
                {categories.map((category) => <li key={category} className="nav-menu-category"><a href="#">{category}</a></li>)}
                <Dropdown/>
                <BasketButton/>
                

            </ul>
        </nav>
    )
}

function BasketButton(){
    const [isVisible, setIsVisible] = useState(false);

    function handleVisible(){
        setIsVisible(true)
    }

    function handleClose(){
        setIsVisible(false)
    }

    return(
        <>
            <button className="basket-button" onClick={handleVisible}>
                <div className="dota-text">Корзина</div>
            </button>
            <Basket isOpen={isVisible} onClose={handleClose} />
        </>
    )
}

function Dropdown(){
    const [isVisible, setIsVisible] = useState(false);

   function handleVisible(){

   }
    return (
        <li className="dropdown" onMouseEnter={handleVisible}>Ещё <img src={arrow} alt="" />
        <ul className = "dropdown-menu">
                <li className="dota-text"><a href="">Подарки</a></li>
                <li className="dota-text"><a href="">Мерч</a></li>
                <li className="dota-text"><a href="">Хиты</a></li>
                <li className="dota-text"><a href="">Детям</a></li>
            </ul></li>
    )
}

