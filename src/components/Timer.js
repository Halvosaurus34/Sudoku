import StopWatch from 'react-compound-timer'

export default function Timer(){
  
      return (
        <div>
          TIME {" "}
        <StopWatch formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}>
        
          <StopWatch.Minutes/>:
          <StopWatch.Seconds />
        </StopWatch>
        </div>
);
      }
