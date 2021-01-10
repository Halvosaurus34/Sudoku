import { useStopwatch } from 'react-timer-hook';

export default function Timer() {
    const {
      seconds,
      minutes,
    } = useStopwatch({ autoStart: true });
      
      
        return (
            <div className="timer">
              <div >
               TIME: <span>{minutes}</span>:<span>{seconds}</span>
              </div>
            </div>
          );
        }
