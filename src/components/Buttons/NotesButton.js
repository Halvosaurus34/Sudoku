import  {useState} from "react"

export default function NotesButton(props) {
    const [notesenabled, setNotesEnabled] = useState(false)
    function handleClick(){
        setNotesEnabled(!notesenabled)
        props.onChildClick(notesenabled)
    }
    
    return(
        <button  className="notesButton" onClick={handleClick}><i className="fas fa-pencil-alt fa-3x"></i></button>
    )
}

