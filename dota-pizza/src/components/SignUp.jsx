import React, { useEffect, useRef, useState } from "react";
import '../styles/main.css'
import '../styles/signUp.css'
import '../styles/modal.css'



export default function SignUp({isOpen, onClose}){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    function phoneHandler(e){
        const phone = e.target.value
        const digitsOnly = phone.replace(/\D/g, '')
        const limitedDigits = digitsOnly.slice(0,10)

        setPhoneNumber(limitedDigits)
        setIsValid(limitedDigits.length === 10);
    }

    function handleSubmit(e){
        e.preventDefualt()
        if (isValid){
            const fullNumber = `+7${phoneNumber}`
            console.log('Ваш номерок: ', fullNumber)
        }
    }

    if (!isOpen){
        return null
    }

    return(
            <div className="modal-window_overlay" onClick={onClose}>
                <div className="sign-window" onClick={(e) => e.stopPropagation()}>
                    <form className="sign-form" method="post" onSubmit={handleSubmit}>
                        <div className="modal-window_header">
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