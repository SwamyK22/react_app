import React, { useState } from 'react'

function Demo() {
    const [val, setVal] = useState('');

    const debounce =(func, delay = 1000) => {
        let timeoutId;
        
        return function(...args) {
          clearTimeout(timeoutId);
          
          timeoutId = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      }
      
      
      const handleInput = (a) => {
        setVal(a)
      }
      
      const debouncedScroll = debounce(handleInput, 200);
      
      // Attach the debounced function as an event listener
      window.addEventListener('scroll', debouncedScroll);
  return (
    <div>
        <h4>{val}</h4>
        <input placeholder="Enter"/>
    </div>
  )
}

export default Demo