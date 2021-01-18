import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
// import SolveSudoku from "./SolveSudoku"
const puzzle = GenerateSudoku()

export default function SudokuBoard(props) {

    function handleChildClick(event) {
        console.log("CONT EVENT: ",event)
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