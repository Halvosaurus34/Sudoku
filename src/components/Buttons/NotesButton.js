import  {useState} from "react"

export default function NotesButton(props) {
    const blue = {background: "#60a3bc"}
    const green = {background: "#75eb8f"}

    const [notesenabled, setNotesEnabled] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [style, setStyle] = useState()
    
    function handleClick(){
        if (isSelected === false){
            setIsSelected(true)
            setStyle(green)
        } else{
            setIsSelected(false)
            setStyle(blue)

        }
        setNotesEnabled(!notesenabled)
        props.onChildClick(notesenabled)
    }
    
    return(
        <button style={style}  className="notesButton" onClick={handleClick}><i className="fas fa-pencil-alt fa-3x"></i></button>
    )
}

