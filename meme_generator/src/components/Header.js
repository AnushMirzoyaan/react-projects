import React from "react";
import img from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img alt="text" src={img} className="header-image" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4> 
        </header>
    )
}