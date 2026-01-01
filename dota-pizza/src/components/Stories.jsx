import React, { useEffect, useRef, useState } from "react";
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
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
    

    function scrollLeft(){
        if (containerRef.current){
            containerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            })
            
        }
    }

    function scrollRight(){
        if (containerRef.current){
            containerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            })
            
        }
    }
 
    
    return(
        <>
            <div className="stories-wrapper">
                {canScrollLeft && <div onClick={scrollLeft}>
                    <LeftArrow imageSrc={leftarrow} size={40}/>
                </div>}
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
                {canScrollRight && <div onClick={scrollRight}>
                    <RightArrow imageSrc={rightarrow} size={40}/>
                </div>}
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
        <button className="stories-arrow"><img src={imageSrc} alt="" height={size} width={size} style={{cursor: 'pointer'}}/></button>
    )
}

function RightArrow({imageSrc, size}){
    return(
        <button className="stories-arrow"><img src={imageSrc} alt="" height={size} width={size} style={{cursor: 'pointer'}}/></button>
    )
}