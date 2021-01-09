import SudokuBoard from "./components/SudokuBoard"
import ToolBar from "./components/ToolBar"
import './App.css';
import DiffAndTimeBar from "./components/DiffAndTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
      <div className="container">
      <ToolBar></ToolBar>
      <SudokuBoard></SudokuBoard>
      <DiffAndTimeBar></DiffAndTimeBar>
      <div className="notesContainer">
      </div>
      </div>

    </div>
  );
}

export default App;
