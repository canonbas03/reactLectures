import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X"></Player>
          <Player name="Player2" symbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
