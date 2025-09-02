import React from 'react'

export default function InputField({
  label,
  amount,
  onAmountChange,
  currency = [],
  onCurrencyChange,
  selectCurrency = "usd",
  className = "",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
        <div className={`bg-white p-5 rounded-md text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={label}  className="text-zinc-600 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={label}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="00.00"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-zinc-600 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currency.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}
