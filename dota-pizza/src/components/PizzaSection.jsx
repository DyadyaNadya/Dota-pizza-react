import React from "react";
import "../styles/card.css";
import '../styles/main.css'
import '../styles/section.css'
import pizza from "../images/pizza.png";

export default function PizzaSection(){
    return(
        <>
        <span class="category" id="pizzas">Пиццы</span>
        <div class="pizza-catalog_wrapper">
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        <PizzaCard desciption={"Вкуснейшая пицца от маэстро Паджини"} />
        </div>
        </>
    )
}


function PizzaCard({desciption}){
    return(
        <div class="card">
    <div class="img-pizza_wrapper">
        <img src= {pizza} alt="dgsddsdsdsg" />
    </div>
    <h1>Пицца-соблазницца</h1>
    <section class="description">
        {desciption}
    </section></div>
    )
}


