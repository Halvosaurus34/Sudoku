export default function FourButton() {
    function handleFour(){
        console.log("four click")
    }
    return(
        <li className="fourButton" onClick={handleFour}>4</li>
    )
}