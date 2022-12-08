// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our counter reducer.
import { withdraw, deposit, addInterest, addCharges } from "./store/balance";
// Importing the App.css file to add styling to our App component
import "./App.css";
import { useState } from "react";

function App() {
  //create local state for withdraw and deposit input text fields
  const [userInputWithdraw, setUserInputWithdraw] = useState(0);
  const [userInputDeposit, setUserInputDeposit] = useState(0);
  // The useSelector function allows us to find the needed slices of state we require.
  const balance = useSelector((state) => state.balance.value);
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();
  // Event handler for submit buttion
  const handleSubmit = (event) => {
    //prevent default behaviour of form submission
    event.preventDefault();
    //dispatch user input to withdraw() in reducer
    dispatch(withdraw(Number(userInputWithdraw)));
    //reset withdraw text field to 0 
    setUserInputWithdraw(0)
    //dispath user input to deposit() in reducer
    dispatch(deposit(Number(userInputDeposit)));
    //reset deposit text field to 0
    setUserInputDeposit(0)
  };  

  return (
    <div className="Parent">
      <div className="App">
        {/* Displaying the state or balance variable we have initiated earlier using the useSeletor function*/}
        <h1>Balance:{balance}</h1>
      </div>

      <form className="Form" onClick={handleSubmit}>
        {/*User input text field to get amount to be withdraw*/}
        <label>
        Withdraw:
        <input
          type="text"
          name="withdraw"
          onChange={(e) => setUserInputWithdraw(e.target.value)} value={userInputWithdraw}
        />
        </label>
        {/*User input text field to get amount to be deposited*/}
        <label>
        Deposit:
        <input
          type="text"
          name="deposit"
          onChange={(e) => setUserInputDeposit(e.target.value)} value={userInputDeposit}
        />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="Buttons">
        {/* Each time any of the buttons below are clicked upon, the state will add interest or deduct charges depending on the button.*/}
        <button onClick={() => dispatch(addInterest())}>Add Interest</button>
        <button onClick={() => dispatch(addCharges())}>Charges</button>
      </div>

    </div>
  );
}

export default App;
