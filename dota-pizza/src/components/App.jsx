import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../styles/menu.css'
import Main from "./main";
import Stories from "./Stories";



export default function App(){
    return(
        <>
            <Header/>
            <Stories/>
            <Navigation/>
            <Main/>
        </>
    )
} 