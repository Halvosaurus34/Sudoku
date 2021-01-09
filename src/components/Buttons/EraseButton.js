import React, { useEffect,useState } from "react";

export default function EraseButton() {

    function handleClick(){
        console.log("click")
    }

    return(
        <button className="eraseButton" onClick={handleClick}><i class="fas fa-eraser fa-3x"></i></button>
    )
}