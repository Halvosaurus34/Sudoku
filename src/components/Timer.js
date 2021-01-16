import ReactStopwatch from 'react-stopwatch';

const Timer = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({ formatted }) => {
      return (
        <span>TIME {formatted}</span>
      );
    }}
   />
);
 
export default Timer;
