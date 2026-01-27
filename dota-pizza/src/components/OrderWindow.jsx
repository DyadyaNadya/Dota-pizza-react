import React, { useState } from "react";
import '../styles/modal.css'
import '../styles/SignUp.css'
import { ingredients } from "./Ingredients.jsx";
import pizzapic from "../images/pizza.png";



export default function OrderWindow({isOpen, onClose, pizzaName}){
    if (!isOpen){
        return null;
    }

    return(
        <div className="modal-window_overlay" onClick={onClose}>
                <div className="order-window" onClick={(e) => e.stopPropagation()}>
                    <div className="img-wrapper">
                        <img src={pizzapic} alt="asdasd" />
                    </div>
                    <div className="list">
                        <div className="order-title-wrapper">
                            <h1>{pizzaName}</h1> 
                        </div>
                        <div className="add-ingredients">
                            <h2 className="ingr-title">Добавьте вкуса своей пицце</h2>
                            {ingredients.map((ingr, index) => <IngredientCard key={index} {...ingr}/>)}
                        </div>
                        <div className="confirm-section">
                            <button className={`sign-button deactivated`}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


function IngredientCard({name, image}){

    const [isSelected, setIsSelected] = useState(false);

    function hanldeSelect(){
        setIsSelected(prev => !prev)
    }

    const imgSrc = image || pizzapic

    return(
        <button className={`ingr-card ${isSelected ? 'selected' : ''}`} onClick={hanldeSelect}>
            <img src={imgSrc} alt={name} />
            <span className="ingr-name">{name}</span>
        </button>
    )
}