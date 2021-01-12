import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
// import SolveSudoku from "./SolveSudoku"
const puzzle = GenerateSudoku()

export default function SudokuBoard(props) {

    // console.log("Puzzle = " , puzzle.rows)


    return(
        <div className="board">{puzzle.rows.map(row=>(
            <div className="row" key={row.index}> 
            {row.cols.map(field=>
                <SudokuField defaultValue={field.value} readOnly={field.readOnly} row={field.row} col={field.col} solved={field.solved} notesEnabled={props.notesEnabled}/>
                )}
            </div>
        ))}
        </div>
    )
}