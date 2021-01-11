export default function OneButton() {
    function handleClick(){
        console.log("one click")
    }
    return(
        <li className="oneButton" onClick={handleClick} key="one">1</li>
    )
}