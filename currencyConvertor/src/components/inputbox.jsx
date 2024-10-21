import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",

}){
    const amountInputId = useId()
    return(
        <div className='w-full flex items-center justify-center ' > 
            <div className='flex flex-col gap-2'>

                <div className='w-full sm:flex  sm:flex-col md:flex-row'>
                    {/* from box */}
                        <div className='flex flex-col gap-3 items-center justify-center p-4 border '>
                            <label className='text-lg font-bold' htmlFor={amountInputId}>{label}</label>
        
                            <input id={amountInputId} className='p-2 bg-slate-200 rounded' type='number' value={amount} disabled={amountDisable}  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                        </div>  
                
                     {/* select box */}
                     <div className='flex flex-col gap-1 p-4 items-center justify-center border '>
                     <label htmlFor="countries" className="block mb-2 text-lg font-bold">Select an option</label>
                        <select id="countries" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                         </select>
                     </div>
         
                </div>
            </div>
        </div>        
        
        
        
        
        
    )


}



export default InputBox;