import "./App.css";
import { useState } from "react";
//importing custom Input Component
import { InputBox } from "./components";

//importing custom hook
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(""); // sets the value of user input component
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const currencyInfo = useCurrencyInfo(from); // gets the details of currency exchange rate using the custom hook
  const [convertedAmount, setConvertedAmount] = useState(0); // sets the value of output component
  const options = Object.keys(currencyInfo); // holds all the currency names

  // this function swaps the values of the fields when the button is clicked.
  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  // this function converts the values of inputs
  function convert() {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3));
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }} // when a form is submitted it goes to a url or a page. we are stopping that and calling our exchange function
          >
            <div className="w-full mb-1">
              <InputBox
                b
                // passing props to the components
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(selectedCurrency) =>
                  setFrom(selectedCurrency)
                }
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2.5 py-1.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                // passing props to the components
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(selectedCurrency) => setTo(selectedCurrency)}
                selectedCurrency={to}
                isAmountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-medium px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
