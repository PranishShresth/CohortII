import "./App.css";
import { useReducer } from "react";

const initialState = {
  player: "param",
  mp: 1000,
  hp: 1000,
  enemies: [],
};

function GameReducer(state, action) {
  switch (action.type) {
    case "SLASH":
      return { ...state, mp: state.mp - 100 };

    case "SMASH":
      return { ...state, hp: state.hp - 100, mp: state.mp - 100 };
    case "GET_BREAKING_BAD":
      return { ...state, enemies: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  // dispatch =- > updates ur state -> which updates ur UI
  // action

  const getEnemies = (enemies) => {
    return { type: "GET_BREAKING_BAD", payload: enemies };
  };
  const smashEnemies = () => {
    if (state.mp > 0) {
      return { type: "SMASH" };
    }
    return {};
  };
  const handleSmashEnemies = () => {
    dispatch(smashEnemies());
  };

  const handleGetEnemies = async () => {
    const req = await fetch("https://www.breakingbadapi.com/api/episodes");
    const data = await req.json();
    dispatch({ type: "GET_BREAKING_BAD", payload: data });
  };
  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={handleSmashEnemies}>Smash Enemies</button>{" "}
      <button onClick={() => dispatch({ type: "SLASH" })}>Slash enemies</button>
      <button onClick={handleGetEnemies}>Get enemies</button>
    </div>
  );
}

export default App;
