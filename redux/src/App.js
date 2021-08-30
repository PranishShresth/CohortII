import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Bank App</h1>
      <pre>{JSON.stringify(store, null, 2)}</pre>
      <button
        onClick={() => {
          dispatch({ type: "WITHDRAW_MONEY" });
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEPOSIT_MONEY" });
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
