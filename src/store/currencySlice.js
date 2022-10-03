import {createSlice} from '@reduxjs/toolkit';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currency: []
    },
    reducers: {
        handleAmount1Change(state, action) {
            state.currency.push({
                
            })
        },
        handleCurrency1Change(state, action) {},
        handleAmount2Change(state, action) {},
        handleCurrency2Change(state, action) {},
        fix(state, action) {},
    }
});
