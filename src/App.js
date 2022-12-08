// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our counter reducer.
import { withdraw, deposit, addInterest, addCharges } from "./store/balance";
// Importing the App.css file to add styling to our App component
import "./App.css";
import { useState } from "react";

function App() {
  //create local state for user input text field
  const [userInput, setUserInput] = useState(0);
  // The useSelector function allows us to find the needed slices of state we require.
  const balance = useSelector((state) => state.balance.value);
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();
  
  return (
    <div className="Parent">
      <div className="App">
        {/* Displaying the state or balance variable we have initiated earlier using the useSeletor function*/}
        <h1>Balance:{balance}</h1>
      </div>

      {/*User input text field for user to enter amount*/}
      <label>
      User Input:
      <input
        type="text"
        name="userInput"
        onChange={(e) => setUserInput(e.target.value)} value={userInput}
      />
      </label>

      <div className="Buttons">
        {/* Each time any of the buttons below are clicked upon, the global balance state is updated depending on the button.*/}
        <button onClick={() => dispatch(withdraw(Number(userInput)))}>Withdraw</button>
        <button onClick={() => dispatch(deposit(Number(userInput)))}>Deposit</button>
        <button onClick={() => dispatch(addInterest())}>Add Interest</button>
        <button onClick={() => dispatch(addCharges())}>Charges</button>
      </div>

    </div>
  );
}

export default App;
