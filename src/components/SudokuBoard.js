import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
export default function SudokuBoard() {
    const puzzle = GenerateSudoku()
    // console.log("Puzzle = " , puzzle)
    return(
        <div className="board">{puzzle.rows.map(row=>(
            <div className="row" key={row.index}> 
            {row.cols.map(field=>SudokuField(field))}
            </div>
        ))}
        </div>
    )
}