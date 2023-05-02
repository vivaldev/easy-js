import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [numbersArray, setNyNumbersArray] = useState(
    Array.from(Array(100).keys())
  );
  function fuzzBizz(num) {
    if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  }
  return (
    <>
      <div className="App">
        <div className="container">
          {numbersArray.map((num) => {
            return (
              <div className="box" key={num}>
                {fuzzBizz(num)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
