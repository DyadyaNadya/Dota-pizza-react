import React, { useState } from "react";

export default function OrderWindow({isOpen, onClose}){
    if (!isOpen){
        return null;
    }

    return(
        <div className="sign-window_overlay" onClick={onClose}>
                <div className="sign-window" onClick={(e) => e.stopPropagation()}>
                    <form className="sign-form" method="post" onSubmit={handleSubmit}>
                        <div className="sign-window_header">
                            <div className="title-wrapper">
                                <h1>Вход</h1>
                                <button onClick={onClose}>X</button>
                            </div>
                            <h3>по номеру телефона</h3>
                        </div>
                        <div className="sign-input_wrapper">
                            +7<input type="phone"
                                     className="sign-input"
                                     id="input"
                                     placeholder="Допускаются только номера РФ"
                                     maxLength={10}
                                     value={phoneNumber}
                                     onChange={phoneHandler}
                                     /></div>
                         <button className={`sign-button ${!isValid ? 'deactivated' : ''}`}
                                 disabled = {!isValid}>Отправить код</button>
                        <span className="description">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и бла-бла-бла эту хрень никто не читает</span>
                    </form>
                </div>
            </div>
    )
}