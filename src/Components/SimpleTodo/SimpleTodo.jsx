import React, { useEffect, useState } from 'react'

function SimpleTodo() {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        const res = await fetch('https://randomuser.me/api');
        const v = await res.json();
        setData(val => [...val, v.results[0]])
    }
    const deleteCard = (email) => {
        const index = data.findIndex((x) => x.email === email);
        setData(val => [...val.slice(0, index), ...val.slice(index + 1)])
    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <div style={{ backgroundColor: '#123', }}><button onClick={fetchData} className='addBtn'>Add Card</button>
    <div className='mainC'>
          {data.map((data) => (
              <div key={data.id.value} className='simpleCard'>
                  <img src={data?.picture.medium} alt="imgs" />
                  <h3><span className='nameTitle'>{data?.name.title}.</span> {data?.name.first} {data?.name.last} </h3>
                  <p><span>Email:</span> {data?.email} </p>
                  <p><span>DOB: </span>{data?.dob.date.slice(0, 10)} {'  '}<span> Age:</span>{data?.dob.age}</p>
                  <p><span>Gender: </span>{data?.gender}</p>
                  <p><span>Mobile: </span>{data?.cell}</p>
                  <p><span>City: </span>{data?.location.city} {'  '}<span> Country:</span>{data?.location.country}</p>
                  <button onClick={() => deleteCard(data.email)}>Delete</button>
              </div>
          ))}
      </div></div>
  )
}

export default SimpleTodo