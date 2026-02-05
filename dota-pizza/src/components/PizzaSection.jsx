import React from "react";
import { useState } from "react";
import "../styles/card.css";
import '../styles/main.css'
import '../styles/section.css'
import '../styles/order.css'
import pizzapic from "../images/pizza.png";
import { pizzas } from "./Pizzas";
import OrderWindow from "./OrderWindow";


export default function PizzaSection(){
    return(
        <>
        <span class="category" id="pizzas">Пиццы</span>
        <div class="pizza-catalog_wrapper">
            {pizzas.map((pizza) => (<PizzaCard {...pizza}/>) )}
        </div>
        </>
    )
}


function PizzaCard({desciption, name }){
    const [showOrderWindow, setShowOrderWindow] = useState(false)

    function windowCreate(){
        setShowOrderWindow(true)
    }

    function windowClose(){
        setShowOrderWindow(false)
    }

    return(
        <>
            <div className="card" onClick={windowCreate}>
        <div className="img-pizza_wrapper">
            <img src= {pizzapic} alt="dgsddsdsdsg" />
        </div>
        <section className="description">
        <h1>{name}</h1>
            <div className="sub-description">{desciption}</div>
        </section></div>
        <OrderWindow isOpen={showOrderWindow} onClose={windowClose} pizzaName={name}/>
        </>
    )
}


