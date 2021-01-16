import SudokuBoard from "./components/SudokuBoard"
import ToolBar from "./components/ToolBar"
import './App.css';
import './components/Buttons/Buttons.css'
import DiffAndTimeBar from "./components/DiffAndTime";
import NumberContainer from "./components/NumberContainer"
import {useState} from "react"

function App() {

  const [notesenabled, setNotesEnabled] = useState(false)
  function handleChildClick(event) {
      console.log("PARENT EVENT:",event)
      setNotesEnabled(!event)
      console.log("CALLED BACK TOP PARENT", event, notesenabled)
  }

  return (
    <div className="App">
      <div className="container">
      <ToolBar></ToolBar>
      <SudokuBoard notesenabled={notesenabled}></SudokuBoard>
      <DiffAndTimeBar></DiffAndTimeBar>
      <NumberContainer onChildClick={handleChildClick} onChange={SudokuBoard}></NumberContainer>
      <div className="notesContainer">
      </div>
      </div>

    </div>
  );
}

export default App;
