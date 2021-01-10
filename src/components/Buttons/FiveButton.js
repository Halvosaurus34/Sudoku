export default function FiveButton() {
    function handleFive(){
        console.log("five click")
    }
    return(
        <li className="fiveButton" onClick={handleFive}>5</li>
    )
}
