import React, { useState } from "react";
import '../styles/menu.css'
import arrow from '../images/arrow-down.svg'


let categories = ['Пиццы', 'Закуски', 'Соусы', 'Салаты', 'Десерты', 'Напитки', 'Игрушки', 'Комбо', 'Акции'] 


export default function Navigation(){
    return(
        <nav class="menu">
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

function Slide(){
    const [scrollPos, setScrollPos] = useState(false)
    
    const {scrollTop, scrollHeight, clientHeight} = event.target
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);

		if (scrollRatio > 0.5) {
			setScrollPos(true);
		} else {
			setScrollPos(false);
		}

}