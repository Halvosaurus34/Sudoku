import React from "react";
import PauseButton from "./Buttons/PauseButton"
import HintButton from "./Buttons/HintButton"
import SettingsButton from "./Buttons/SettingsButton"
import UndoButton from "./Buttons/UndoButton"

import "./Buttons/Buttons.css"

export default function NotesButton() {

  

    return(
        <ul className="toolBar">
            <PauseButton></PauseButton>
            <HintButton></HintButton>
            <SettingsButton></SettingsButton>
            <UndoButton></UndoButton>
        </ul>
    )
}