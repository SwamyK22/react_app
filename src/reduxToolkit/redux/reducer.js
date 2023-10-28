import { createSlice } from "@reduxjs/toolkit";
// const inItVal = {
//     count: 0
// }

// const reducer = (state = inItVal, { type, payload }) => {
//     switch (type) {
//         case incremetAction.type:
//             return { ...state, count: state.count + payload };
//         case decremetAction.type:
//             return { ...state, count: state.count - payload };

//         default:
//             return state;
//     }
// };

// //redux toolkit
// const reducer = createReducer({ count: 0 }, {
//     [incremetAction.type]: (state, action) => ({ ...state, count: state.count + action.payload }),
//     [decremetAction.type]: (state, action) => ({ ...state, count: state.count - action.payload })
// })

const reducer = createSlice({
    name: 'Counter',
    initialState: { count: 0 },
    reducers: {
        //action:function
        Increment: (state, action) => ({ ...state, count: state.count + action.payload }),
        Decrement: (state, action) => ({ ...state, count: state.count - action.payload })
    }
})

export const { Increment, Decrement } = reducer.actions
export default reducer.reducer;