export default function ThreeButton() {
    function handleThree(){
        console.log("three click")
    }
    return(
        <li className="threeButton" onClick={handleThree}>3</li>
    )
}