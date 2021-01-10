export default function EightButton() {
    function handleEight(){
        console.log("eight click")
    }
    return(
        <li className="eightButton" onClick={handleEight}>8</li>
    )
}