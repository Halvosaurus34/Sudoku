
export default function NotesButton() {

    function handleClick(){
        console.log("notes click")
    }

    return(
        <button className="notesButton" onClick={handleClick}><i class="fas fa-pencil-alt fa-3x"></i></button>
    )
}