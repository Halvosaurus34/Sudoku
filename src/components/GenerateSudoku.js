import sudoku from "sudoku"

export default function generateSudoku() {
    const raw = sudoku.makepuzzle()
    const result = {rows: []}
    
    for (let i=0; i<9;i++) {
      
      const row = {cols: [], index: 1}
      
      for (let j=0; j<9;j++) {
        const value = raw[i*9+j]
        const col = {
          row:i,
          col:j,
          key:i*9+j,
          value: value,
          readonly: value !== null
        };
        row.cols.push(col)
      }
      result.rows.push(row)
    }
    return result
  }
  