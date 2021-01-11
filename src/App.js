import SudokuBoard from "./components/SudokuBoard"
import ToolBar from "./components/ToolBar"
import './App.css';
import './components/Buttons/Buttons.css'
import DiffAndTimeBar from "./components/DiffAndTime";
import NumberContainer from "./components/NumberContainer"
import {useState} from "react"

function App() {

  const [notesEnabled, setNotesEnabled] = useState(false)

  function handleChildClick(event) {
      console.log("PARENT EVENT:",event)
      setNotesEnabled(!event)
      console.log("CALLED BACK TOP PARENT", event, notesEnabled)
  }

  return (
    <div className="App">
      <div className="container">
      <ToolBar></ToolBar>
      <SudokuBoard notesEnabled={notesEnabled} ></SudokuBoard>
      <DiffAndTimeBar></DiffAndTimeBar>
      <NumberContainer onChildClick={handleChildClick} onChange={SudokuBoard}></NumberContainer>
      <div className="notesContainer">
      </div>
      </div>

    </div>
  );
}

export default App;
