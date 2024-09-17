import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((resp) => setCurrencyInfo(resp[currency]));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
