import React, { useId } from "react";

// The props are self-explainery, just understand where we are using them.
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  isAmountDisable = false,
  isCurrencyDisable = false,
  className = "",
}) {
  // the useId hook creates a random id every time it is called. we are using this to bind the label and input element.
  const userInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={userInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label} {/* // lable variable is used here  */}
        </label>
        <input
          id={userInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder="Amount"
          disabled={
            isAmountDisable
          } /* // isAmountDisable variable is used here, which tell whether the input field can be change by the user. */
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(String(e.target.value)) // the onAmountChange function is defined at line 52 of App.jsx file
          } // this method is run when we change the value of the input field, it displays the new value
          autoComplete="off"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 text-lg bg-gray-100 cursor-pointer outline-none text-center"
          disabled={isCurrencyDisable}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // this is defined at the line 69 ..nice of App.jsx
        >
          {/* // this takes all the currency types and converts them into a dropdown list options */}
          {currencyOption.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox; // exporting this to the index.js in the current folder.
