import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

type initialState = {
    numberOfIcecreams: number
}

const initialState: initialState = {
    numberOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        rstocked: (state, action: PayloadAction<number>) => {
            state.numberOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIcecreams--
    //     }
    // }

    //update the state value of other reducer
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numberOfIcecreams--
        })
    }

})

export default icecreamSlice.reducer;
export const { ordered, rstocked } = icecreamSlice.actions