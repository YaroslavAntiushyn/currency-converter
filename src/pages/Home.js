import React from 'react'
import CurrencyInput from '.././components/CurrencyInput';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {

    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('USD');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get('https://api.apilayer.com/fixer/latest?apikey=3gZZkUZwuTErEyu0NDaNPENNnIfJ98o5')
            .then(response => {
                setRates(response.data.rates);
            })
    }, []);

    useEffect(() => {
        if (!!rates) {
            handleAmount1Change(1);
        }
    }, [rates]);

    function fix(number) {
        return number.toFixed(2)
    }

    function handleAmount1Change(amount1) {
        setAmount2(fix(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(amount1) {
        setAmount2(fix(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(fix(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(amount2) {
        setAmount1(fix(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }


    return (
        <main>
            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1}
            />
            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2}
            />

        </main>
    )
}
