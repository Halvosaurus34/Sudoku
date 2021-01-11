export default function FourButton() {
    function handleFour(){
        console.log("four click")
    }
    return(
        <li className="fourButton" onClick={handleFour} key="four">4</li>
    )
}