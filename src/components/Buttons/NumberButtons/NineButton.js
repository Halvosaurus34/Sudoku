export default function NineButton() {
    function handleNine(){
        console.log("nine click")
    }
    return(
        <li className="nineButton" onClick={handleNine} key="nine">9</li>
    )
}
