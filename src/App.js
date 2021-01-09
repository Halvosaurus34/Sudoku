import SudokuBoard from "./components/SudokuBoard"
import NotesButton from "./components/NotesButton"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
      <SudokuBoard></SudokuBoard>
      <NotesButton></NotesButton>

    </div>
  );
}

export default App;
