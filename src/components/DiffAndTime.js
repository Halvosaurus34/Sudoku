import Difficulty from "./Difficulty"
import Timer from "./Timer"
import NotesButton from "./Buttons/NotesButton"


export default function DiffAndTimeBar() {
    return(<div className="diffAndTime">
        <div className="timeAndDiff">
        <Difficulty></Difficulty>
        <Timer></Timer>
        </div>
        <NotesButton></NotesButton>

        </div>
    )
}