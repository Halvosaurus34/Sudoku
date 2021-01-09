import React, { useEffect,useState } from "react";

export default function NotesButton() {

    function handleClick(){
        console.log("click")
    }

    return(
        <button className="notesButton" onClick={handleClick}><i class="fas fa-pencil-alt fa-3x"></i></button>
    )
}