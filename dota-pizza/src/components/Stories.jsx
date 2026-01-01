import React, { useRef, useState } from "react";
import pudge from "../images/Pudge.png"
import leftarrow from "../images/left-chevron.png"
import rightarrow from "../images/chevron.png"
import '../styles/stories.css'

export default function Stories(){
    const containerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    function checkScroll(){
        const {scrollLeft, scrollWidth, clientWidth} = containerRef.current
        canScrollLeft(scrollLeft > 0)
        canScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
    
    
    return(
        <>
            <div className="stories-wrapper">
                <LeftArrow imageSrc={leftarrow} size={70}/>
            <div className="stories" ref={containerRef} onScroll={checkScroll}>
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
        <img src={imageSrc} alt="" height={size} width={size} style={{cursor: 'pointer'}}/>
    )
}

function RightArrow({imageSrc, size}){
    return(
        <img src={imageSrc} alt="" height={size} width={size} style={{cursor: 'pointer'}}/>
    )
}