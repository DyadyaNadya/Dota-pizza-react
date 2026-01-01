import React from "react";
import "../styles/card.css";
import '../styles/main.css'
import '../styles/section.css'
import pizza from "../images/pizza.png";
import { pizzas } from "./Pizzas";


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


function PizzaCard({desciption, name}){
    return(
        <div class="card">
    <div class="img-pizza_wrapper">
        <img src= {pizza} alt="dgsddsdsdsg" />
    </div>
    <h1>{name}</h1>
    <section class="description">
        {desciption}
    </section></div>
    )
}


