import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../styles/menu.css'
import Main from "./main";



export default function App(){
    return(
        <>
            <Header/>
            <Navigation/>
            <Main/>
        </>
    )
} 