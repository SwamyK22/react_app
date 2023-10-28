import { createAction } from "@reduxjs/toolkit"

// export const incremetAction = () => {
//     return {
//         type: 'Increment', payload: 1
//     }
// }
// export const decremetAction = () => {
//     return {
//         type: 'Decrement', payload: 1
//     }
// }

// redux Toolkit
export const incremetAction = createAction('Increment')
export const decremetAction = createAction('Decrement')