import React, { useEffect, useRef } from "react";
import '../styles/main.css'
import '../styles/signUp.css'


export default function SignUp(){
    const windowRef = useRef(null)

    useEffect(() =>{
        function handleClickOutside(event){
            if (windowRef.current && !windowRef.current.contains(event.target)){
                onClose()
            }
        }

        function handleEscape(event){
            if (event.key === 'Escape'){
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // блокируем скролл
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto'; // восстанавливаем скролл
        };
    }, [isOpen, onClose])

    if (!isOpen)

    return(
        <div className="window-wrapper" ref={windowRef}>
            <form className="sign-window" method="post">
                <input type="number" placeholder="Номер должен начинаться на +7"/>
                <button className="sign-button deactivated">Отправить код</button>
            </form>
        </div>
    )
}