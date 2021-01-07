import GenerateSudoku from "./GenerateSudoku"
import SudokuField from "./SudokuField.js"
export default function SudokuBoard() {
    const puzzle = GenerateSudoku()
    console.log("Puzzle = " , puzzle.rows.map(e=>e.cols.map(e=>e.value)))
    return(
        <div>{puzzle.rows.map(row=>(
            <div className="row" key={row.index}> 
            {row.cols.map(field=>(
                <div className="col" key={field.col}>
                    {field.value}
                    </div>
            ))}
            </div>
        ))}
        </div>
    )
}