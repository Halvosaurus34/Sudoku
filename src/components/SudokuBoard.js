import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
const puzzle = GenerateSudoku()

export default function SudokuBoard() {
    console.log("Puzzle = " , puzzle.rows)
    return(
        <div className="board">{puzzle.rows.map(row=>(
            <div className="row" key={row.index}> 
            {row.cols.map(field=>SudokuField(field))}
            </div>
        ))}
        </div>
    )
}