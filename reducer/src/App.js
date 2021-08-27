import "./App.css";
import { useReducer } from "react";
import { GameProvider } from "./GameContext";
import Consumer from "./Consumer";

function Parent(props) {
  return <div className="parent">{props.children}</div>;
}
function App() {
  return (
    <div className="App">
      <GameProvider>
        <Parent>
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          <h1>I m here</h1>
        </Parent>

        <Consumer />

        {/* <button onClick={handleSmashEnemies}>Smash Enemies</button>{" "}
        <button onClick={() => dispatch({ type: "SLASH" })}>
          Slash enemies
        </button>
        <button onClick={handleGetEnemies}>Get enemies</button> */}
      </GameProvider>
    </div>
  );
}

export default App;
