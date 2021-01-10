import Difficulty from "./Difficulty"
import Timer from "./Timer"

export default function DiffAndTimeBar() {
    return(<div className="diffAndTime">
        <div className="timeAndDiff">
        <Difficulty></Difficulty>
        <Timer></Timer>
        </div>
        
        </div>
    )
}