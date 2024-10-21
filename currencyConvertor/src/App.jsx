import { useState } from "react";
import "./App.css";
import InputBox from "./components/inputbox";
import useCurrencyInfo from "./customhooks/currencyconvertorrhooks";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(from);
    setAmount(to);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="flex flex-col gap-2 h-fit p-4 shadow-4xl  border-[1px]">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(from) => setFrom(from)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div className="w-full flex items-center justify-center">
            <button
              className="bg-[#4CAF50] w-fit text-center hover:bg-[#3e8e6] text-white font-bold py-2 px-10 inline rounded"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(to) => setTo(to)}
            selectCurrency={to}
            amountDisable
          />
          <button
            className="w-full bg-[#3b8bdd] py-4 hover:bg-[#75afeb] hover:border"
            type="submit"
          >
            convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
