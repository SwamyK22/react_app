import React, { useEffect, useState } from 'react'

function Demo() {
    const [name, setName] = useState('Swamy')

    useEffect(() => {
        console.log(name);
    }, [])
  return (
    <div>Demo</div>
  )
}

export default Demo