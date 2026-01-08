import React, { useState } from "react";
import '../styles/modal.css'
import '../styles/SignUp.css'
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
                        <div className="confirm-section">
                            <button className={`sign-button deactivated`}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}