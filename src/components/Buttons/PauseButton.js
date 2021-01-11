
export default function PauseButton() {

    function handleClick(){
        console.log("PAUSE CLICK")
    }

    return(
            <li><button className="pauseButton col-11" onClick={handleClick}><i className="far fa-pause-circle fa-2x"></i></button></li>
    )
}