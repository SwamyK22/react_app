import React from 'react';
import useFetch from '../hooks/useFetch';
import useDarkMode from '../hooks/useDarkMode';
import { SpinnerDotted } from 'spinners-react'

const FetchHook = () => {
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    // const [isDarkMode, setIsDarkMode] = useDarkMode()
    console.log(data);
    console.log(error, 'error')
    // console.log('isDarkMode', isDarkMode);
    // const d = new Date();
    console.log(loading)
    if (loading) return <div style={{ display: 'flex', alignItems: 'center', width: '100vw', height: '100vh', justifyContent: 'center' }}>
        <SpinnerDotted size={200} thickness={80} color='red' />
    </div>
    return (
        <div>
            {
                data?.products.map((x) => (
                    <p key={x.id} style={{ textAlign: 'center' }}>{x.title}</p>
                ))
            }
        </div>
    );
}

export default FetchHook;
