export default function SevenButton() {
    function handleSeven(){
        console.log("seven click")
    }
    return(
        <li className="sevenButton" onClick={handleSeven}>7</li>
    )
}