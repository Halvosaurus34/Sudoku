import  {useState} from "react"

export default function NotesButton(props) {
    const [notesEnabled, setNotesEnabled] = useState(false)

    function handleClick(){
        setNotesEnabled(!notesEnabled)
        props.onChildClick(notesEnabled)
    }
    
    return(
        <button className="notesButton" onClick={handleClick}><i class="fas fa-pencil-alt fa-3x"></i></button>
    )
}