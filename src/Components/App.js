import React, { useEffect, useState } from 'react';
import './style.css'

function App() {
    const [data, setData] = useState([]);
    const [val, setVal] = useState('');
    const fetchData = async () => {
        const value = await fetch('https://fakestoreapi.com/products')
            .then((val) => val.json())
        setData(value)
    }

    
    useEffect(() => {
        fetchData()
        rev()
    }, []);
    const rev = () => {
      let str = 'My country is india'
      const res = str.split(' ').map((x) => [...x].reverse().join('')).join(' ')
      console.log('====================================');
      console.log(res);
      console.log('====================================');

      const ans = 'abcdabc'.split('').reduce((p,c) => {
        const val = p[c] ?? 0
        return {
          ...p,
          [c]: val + 1
        }
      },{})

      console.log('====================================');
      console.log(ans);
      console.log('====================================');

    }
    return (
        <div className='container'>
          <input type='text' onChange={(e) => setVal(e.target.value)} />
            {data.map((x) => {
              if(x.title.startsWith(val)) {
                return (
                <h1 key={x.title}>{x.title}</h1>
                )
              }
            })}
        </div>
    );
}

export default App;
