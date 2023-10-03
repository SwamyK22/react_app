import React, { useRef, useState } from 'react';

function Home() {
  const [val, setVal] = useState(0);
  const ref = useRef()
  
  const changeVal = (a) => {
    
    const intervel = setInterval(() => setVal(x => {
      if(x === 1){
      clearInterval(intervel);
      }
      return x-1
    }), 1000);
    
  }
  console.log('====================================');
  console.log(typeof val);
  console.log('====================================');
  return (
    <div>
      <h1>{val}</h1>
      <input ref={ref} type='number' placeholder='Enter a Number' onChange={(e) => setVal(e.target.value)}/>
      <button onClick={changeVal}>submit</button>
    </div>
  );
}

export default Home;
