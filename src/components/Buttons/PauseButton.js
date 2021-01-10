
export default function PauseButton() {

    function handleClick(){
        console.log("PAUSE CLICK")
    }

    return(
            <li><button className="pauseButton col-11" onClick={handleClick}><i class="far fa-pause-circle fa-3x"></i></button></li>
    )
}