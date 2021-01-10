import NotesButton from "./Buttons/NotesButton"
import EraseButton from "./Buttons/EraseButton"
import Numbers from "./Buttons/Numbers"
export default function NumberContainer() {
    return(<div className="numbersContainer">
        <Numbers></Numbers>
        <div className="notesAndEraser">
        <NotesButton></NotesButton>
        <EraseButton></EraseButton>
        </div>
        </div>
    )
}