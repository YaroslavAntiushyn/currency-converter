import React from 'react'
import CurrencyInput from '.././components/CurrencyInput';
import { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";

export default function Home() {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('USD');
    // const [rates, setRates] = useState([]);


    const url = `https://api.apilayer.com/fixer/latest?apikey=3gZZkUZwuTErEyu0NDaNPENNnIfJ98o5`;
    const { data, isLoading, error } = useFetch(url);
  
    useEffect(() => {
        if (!!data.rates) {
            function init() {
                handleAmount1Change(1);
              }
              init();
        }
    }, [data.rates]);

    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>error</p>;
    }

    // useEffect(() => {
    //     axios.get('https://api.apilayer.com/fixer/latest?apikey=3gZZkUZwuTErEyu0NDaNPENNnIfJ98  o5')
    //         .then(response => {
    //             setRates(response.data.rates);
    //         })
    // }, []);



    function fix(number) {
        return number.toFixed(2)
    }

    function handleAmount1Change(amount1) {
        setAmount2(fix(amount1 * data.rates[currency2] / data.rates[currency1]));
        setAmount1(amount1);
    }
    
    function handleAmount2Change(amount2) {
        setAmount1(fix(amount2 * data.rates[currency1] / data.rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(fix(amount1 * data.rates[currency2] / data.rates[currency1]));
        setCurrency1(currency1);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(fix(amount2 * data.rates[currency1] / data.rates[currency2]));
        setCurrency2(currency2);
    }

    return (
        <main>
            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(data.rates)}
                amount={amount1}
                currency={currency1}
            />
            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(data.rates)}
                amount={amount2}
                currency={currency2}
            />

        </main>
    )
}
