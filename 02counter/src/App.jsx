import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  function addNumber() {
    // Becausing of batching done by react the counter will not jump by 3 instead it will  increment only one time.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // To overCome the batching we can use callback function.
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);

  }
  function decrementNumber() {
    // Becausing of batching done by react the counter will not jump by 3 instead it will  decrement only one time.
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    // To overCome the batching we can use callback function.
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);

  }
  return (
    <>
      <h1>Code With me: {counter}</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addNumber}>Increment Counter : {counter}</button>{" "}
      <button onClick={decrementNumber}>Decrement Counter: {counter}</button>
      <footer>Counter Footer: {counter}</footer>
    </>
  )
}

export default App
