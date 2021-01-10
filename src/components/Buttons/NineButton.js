export default function NineButton() {
    function handleNine(){
        console.log("nine click")
    }
    return(
        <li className="nineButton" onClick={handleNine}>9</li>
    )
}
