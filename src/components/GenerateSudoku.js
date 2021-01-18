import sudoku from "sudoku"

export default function generateSudoku() {
    var raw = sudoku.makepuzzle()
    var solved = sudoku.solvepuzzle(raw)
    const difficulty = sudoku.ratepuzzle(raw, 1)
    var ind = 1;
    
    const result = {rows: [],
    solution:solved,
    timeStart: new Date(),
    timeSolved: null,
    difficulty:difficulty}

    for (let i=0; i<9;i++) {
      const row = {cols: [], index: ind}
      ind++
      for (let j=0; j<9;j++) {
        const rowe = i+1
        const coll = j+1
        function box(){
          if (row < 4 && coll < 4){
            return 1
          } else if (rowe < 4 && coll > 3 && coll < 7){
            return 2
          } else if (rowe < 4 && coll > 6) {
            return 3
          } else if (rowe > 3 && rowe < 7 && coll < 4){
            return 4
          } else if (rowe > 3 && rowe < 7 && coll > 3 && coll < 7){
            return 5
          } else if (rowe > 3 && rowe< 7 && coll > 6){
            return 6
          } else if (rowe > 6 && coll < 4){
            return 7
          } else if (rowe > 6 && coll > 3 && coll < 7){
            return 8
          } else if (rowe > 6 && coll > 6) {
            return 9
          }
        }
        const value = raw[i*9+j]
        const col = {
          rowe:rowe,
          col:coll,
          box: box(),
          key:i*9+j,
          value: value === null ? '' : value+1,
          readOnly: value !== null,
          solved:(solved[i*9+j])+1,
        }
        row.cols.push(col)
      }
      result.rows.push(row)
    }
    return result
  }
  