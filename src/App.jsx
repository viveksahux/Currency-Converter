import './App.css'
import { useState } from 'react'
import InputField from './components/InputField'
import useCurrency from './hooks/useCurrency'

function App() {

  const [amount, setAmount] = useState(""); 
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full w-max-500 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[url(/currency.webp)]"
    >
        <div className="w-full">
            <div className="w-full max-w-2xl mx-auto rounded-lg p-7 backdrop-blur-sm bg-white/25">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputField
                            label="From"
                            amount={amount}
                            currency={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-zinc-700 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputField
                            label="To"
                            amount={convertedAmount}
                            currency={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
