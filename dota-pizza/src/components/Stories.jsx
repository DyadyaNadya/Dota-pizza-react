import React from "react";
import pudge from "../images/Pudge.png"

export default function Stories(){
    return(

    )
}

function Story({imageSrc}){
    return(
        <div className="story-wrapper">
            <img src={imageSrc} alt="" />
        </div>
    )
}