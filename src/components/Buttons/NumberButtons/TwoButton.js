export default function TwoButton() {
    function handleTwo(){
        console.log("two click")
    }
    return(
        <li className="twoButton" onClick={handleTwo} key="two">2</li>
    )
}