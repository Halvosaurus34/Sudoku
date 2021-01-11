export default function ThreeButton() {
    function handleThree(){
        console.log("three click")
    }
    return(
        <li className="threeButton" onClick={handleThree} key="three">3</li>
    )
}