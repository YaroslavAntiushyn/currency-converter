import React from 'react'
import PropTypes from 'prop-types'

export default function CurrencyInput(props) {
    CurrencyInput.propTypes = {
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        currencies: PropTypes.array,
        onAmountChange: PropTypes.func,
    }

    return (
        <div className='current'>
            <input type="text" maxlength="12" value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
            <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    );

}
