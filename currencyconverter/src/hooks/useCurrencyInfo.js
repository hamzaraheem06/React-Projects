import { useEffect, useState } from "react";

// this custom hook call an API which returns the information i.e exchange rates for a particular currency which we will pass using the currency variable declared in line 9.
function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  // useEffect hook is used when we want to run a particular code when any change in the variable or state occurs, which we will mention in the second param in an array. In this case, it is the currency variable.
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((resp) => setCurrencyInfo(resp[currency]));
  }, [currency]);
  // then callbacks convert the result and return the detail for the currency which we store in currencyInfo variable.

  return currencyInfo;
}

export default useCurrencyInfo;
