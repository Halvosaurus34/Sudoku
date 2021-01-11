export default function SixButton() {
    function handleSix(){
        console.log("six click")
    }
    return(
        <li className="sixButton" onClick={handleSix} key="six">6</li>
    )
}