import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not easy" targetTime={3}></TimerChallenge>
        <TimerChallenge title="Getting tough" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Pros only" targetTime={10}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
