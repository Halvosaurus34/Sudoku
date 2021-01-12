import sudoku from "sudoku"

export default function generateSudoku() {
    var raw = sudoku.makepuzzle()
    var solved = sudoku.solvepuzzle(raw)
    // console.log(raw)
    // console.log(solved)
    const result = {rows: [],
    solution:solved,
    timeStart: new Date(),
    timeSolved: null}
    var ind = 1;
    for (let i=0; i<9;i++) {
      
      const row = {cols: [], index: ind}
      ind++
      for (let j=0; j<9;j++) {
        const value = raw[i*9+j]
        const col = {
          row:i+1,
          col:j+1,
          key:i*9+j,
          value: value === null ? '' : value+1,
          readOnly: value !== null,
          solved:(solved[i*9+j])+1,
          notes: ""
        };
        row.cols.push(col)
      }
      result.rows.push(row)
    }
    return result
  }
  