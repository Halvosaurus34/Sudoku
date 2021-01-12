import Timer from "./Timer"

export default function DiffAndTimeBar(props) {
    const difficulty =  <div className="difficulty">Hard</div>

    return(<div className="diffAndTime">
        <div className="timeAndDiff">
        {difficulty}
        <Timer></Timer>
        </div>
        
        </div>
    )
}