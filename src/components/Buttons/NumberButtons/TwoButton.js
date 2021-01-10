export default function TwoButton() {
    function handleTwo(){
        console.log("two click")
    }
    return(
        <li className="twoButton" onClick={handleTwo}>2</li>
    )
}