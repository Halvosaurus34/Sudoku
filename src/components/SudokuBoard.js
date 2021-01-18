import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
import React, { useEffect } from "react";

export default function SudokuBoard(props) {
    const puzzle = GenerateSudoku()

    useEffect(()=> {
        props.onChildLoad(puzzle.difficulty)
    }, [])

    function handleChildClick(event) {
        props.onChildClick(event)
    }

    return(
        <div className="board">{puzzle.rows.map(row=>(
            <div className="row" key={row.index+10}> 
            {row.cols.map(field=>
                <SudokuField onChildClick={handleChildClick} defaultValue={field.value} solved={field.solved} box={field.box} readOnly={field.readOnly} row={field.row} col={field.col} notesenabled={props.notesenabled}/>
                )}
            </div>
        ))}
        </div>
    )
}