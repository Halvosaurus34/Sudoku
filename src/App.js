import SudokuBoard from "./components/SudokuBoard"
import NotesButton from "./components/Buttons/NotesButton"
import ToolBar from "./components/ToolBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
      <ToolBar></ToolBar>
      <SudokuBoard></SudokuBoard>
      <NotesButton></NotesButton>

    </div>
  );
}

export default App;
