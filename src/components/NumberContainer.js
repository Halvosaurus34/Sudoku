import NotesButton from "./Buttons/NotesButton"
import EraseButton from "./Buttons/EraseButton"
import Numbers from "./Buttons/Numbers"
export default function NumberContainer(props) {


    function handleChildClick(event) {
        console.log("CONT EVENT: ",event)
        props.onChildClick(event)
    }

    return(<div className="numbersContainer">
        <Numbers></Numbers>
        <div className="notesAndEraser">
        <NotesButton onChildClick={handleChildClick}></NotesButton>
        <EraseButton></EraseButton>
        </div>
        </div>
    )
}