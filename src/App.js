import generator from "sudoku"
import './App.css';

window.generator = generator

function generateSudoku() {
  const raw = generator.makepuzzle()
  const result = {rows: []}

  for (let i=0; i<9;i++) {
    const row = {cols: [], index: 1}

    for (let j=0; j<9;j++) {
      const value = raw[i*9+j]
      const col = {
        row:i,
        col:j,
        value: value,
        readonly: value !== null
      };
      row.cols.push(col)
    }
    result.rows.push(row)
  }
  return result
}

function App() {
  console.log(generateSudoku())
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
    </div>
  );
}

export default App;
