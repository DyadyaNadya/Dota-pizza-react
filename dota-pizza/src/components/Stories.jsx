import React from "react";
import pudge from "../images/Pudge.png"
import leftarrow from "../images/left-chevron.png"
import rightarrow from "../images/chevron.png"
import '../styles/stories.css'

export default function Stories(){
    return(
        <>
            <div className="stories-wrapper">
                <LeftArrow imageSrc={leftarrow} size={70}/>
            <div className="stories">
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
                <Story imageSrc= {pudge}/>
            </div>
                <RightArrow imageSrc={rightarrow} size={70}/>
            </div>
        </>
    )
}

function Story({imageSrc}){
    return(
        <div className="story-wrapper">
            <img src={imageSrc} alt="" />
        </div>
    )
}

function LeftArrow({imageSrc, size}){
    return(
        <img src={imageSrc} alt="" height={size} width={size}/>
    )
}

function RightArrow({imageSrc, size}){
    return(
        <img src={imageSrc} alt="" height={size} width={size} />
    )
}