import React from "react";
import "../styles/basket.css"

export default function Basket({isOpen, onClose}){
    return(
        <>
        {isOpen && <div className="modal-window_overlay" onClick={onClose}>
            </div>}
            <section className="basket-section">
                
            </section>
        </>
    )
}