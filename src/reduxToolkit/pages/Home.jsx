import React, { useState } from 'react'
import Input from '../component/Input'
import { useDispatch, useSelector } from 'react-redux'
import { decremetAction, incremetAction } from '../redux/action';
import store from '../redux/store';
import { Decrement, Increment } from '../redux/reducer';

function Home() {
    const { count } = useSelector(state => state);
    // const dispatch = useDispatch()
    console.log('store.getState(', store.getState());
    return (
        <div>
            <button onClick={() => store.dispatch(Increment(1))}>Increment</button>
            <p>{count}</p>
            <button onClick={() => store.dispatch(Decrement(1))}>Decrement</button>
        </div>
    )
}

export default Home
