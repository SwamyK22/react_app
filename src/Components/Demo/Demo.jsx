import React, { useEffect, useRef, useState } from 'react'
import Child from './Child'

function Demo() {
  const [name, setName] = useState('Swamy');
  const ref = useRef();
  const handle = (name) => {
    setName(name);
  };


  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={() => ref.current.onChange('hii')}>change child text</button>
      <Child ref={ref} onHandle={handle} />
    </div>
  )
}

export default Demo