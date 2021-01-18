import Timer from "./Timer"

export default function DiffAndTimeBar(props) {
    var difficulty =  "Easy"
    if (props.difficulty === 0){
        difficulty = "Easy"
    } else if (props.difficulty === 1){
        difficulty = "Medium"
    } else if (props.difficulty === 2){
        difficulty = "Intermediate"
    } else if (props.difficulty === 3){
        difficulty = "Hard"
    } else if (props.difficulty === 4){
        difficulty = "Expert"
    }
    return(<div className="diffAndTime">
        <div className="timeAndDiff">
        {difficulty}
        <Timer></Timer>
        </div>
        
        </div>
    )
}