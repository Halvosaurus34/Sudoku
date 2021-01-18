import SudokuBoard from "./components/SudokuBoard"
import ToolBar from "./components/ToolBar"
import './App.css';
import './components/Buttons/Buttons.css'
import DiffAndTimeBar from "./components/DiffAndTime";
import NumberContainer from "./components/NumberContainer"
import {useState} from "react"

function App() {

  const [notesenabled, setNotesEnabled] = useState(false)
  const [difficulty, setDifficulty] = useState()

  function handleChildClick(event) {
      setNotesEnabled(!event)
  }

  function handleChildLoad(diff){
    setDifficulty(diff)
  }

  return (
    <div className="App">
      <div className="container">
      <ToolBar></ToolBar>
      <SudokuBoard notesenabled={notesenabled} onChildLoad={handleChildLoad}></SudokuBoard>
      <DiffAndTimeBar difficulty={difficulty}></DiffAndTimeBar>
      <NumberContainer onChildClick={handleChildClick} onChange={SudokuBoard}></NumberContainer>
      <div className="notesContainer">
      </div>
      </div>

    </div>
  );
}

export default App;
