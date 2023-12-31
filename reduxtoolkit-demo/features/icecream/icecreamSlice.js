const createSlice = require('@reduxjs/toolkit').createSlice
const { cakeActions } = require('../cake/cakeSlice')

const initialState = {
    numberOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        rstocked: (state, action) => {
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
        builder.addCase(cakeActions.ordered, state => {
            state.numberOfIcecreams--
        })
    }

})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions