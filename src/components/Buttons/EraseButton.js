
export default function EraseButton() {

    function handleClick(){
        console.log("erase click")
    }

    return(
        <button className="eraseButton" onClick={handleClick}><i className="fas fa-eraser fa-3x"></i></button>
    )
}