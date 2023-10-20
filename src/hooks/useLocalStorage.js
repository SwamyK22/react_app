import React, { useState } from 'react'

function useLocalStorage(key, inItVal) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : inItVal;
    })
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    const removeVal = (key) => {
        setStoredValue('');
        localStorage.removeItem(key)
    }

    return [storedValue, setValue, removeVal];
}

export default useLocalStorage