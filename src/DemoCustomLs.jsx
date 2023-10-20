import React, { useRef } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function DemoCustomLs() {
    const [val, setVal, deleteVal] = useLocalStorage('name', 'Swamy');
    const ref = useRef();
    const [age, setAge, deleteFn] = useLocalStorage('age', 2)

    // console.log(k);

    const onSetFn = () => {
        setVal(ref.current.value);
        ref.current.value = '';
        // setAge(20)
        deleteFn('age')
    }
    return (
        <div>
            <h1>{val}</h1>
            <input ref={ref} />
            <button onClick={onSetFn}>set</button>
            <button onClick={() => deleteVal('name')}>delete</button>
        </div>
    )
}

export default DemoCustomLs