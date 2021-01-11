export default function SevenButton() {
    function handleSeven(){
        console.log("seven click")
    }
    return(
        <li className="sevenButton" onClick={handleSeven} key="seven">7</li>
    )
}