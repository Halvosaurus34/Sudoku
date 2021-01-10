import sudoku from "sudoku"

export default function generateSudoku() {
    var raw = sudoku.makepuzzle()
    var solved = sudoku.solvepuzzle(raw)
    console.log(raw)
    console.log(solved)
    const result = {rows: []}
    var ind = 1;
    for (let i=0; i<9;i++) {
      
      const row = {cols: [], index: ind}
      ind++
      for (let j=0; j<9;j++) {
        const value = raw[i*9+j]
        const col = {
          row:i,
          col:j,
          key:i*9+j,
          value: value,
          readOnly: value !== null,
          solved:solved[i*9+j],
          notes: ""
        };
        row.cols.push(col)
      }
      result.rows.push(row)
    }
    return result
  }
  