import React, { useEffect, useState } from 'react';

const ListTask = () => {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);


    const handleChangeFn = (id) => {
        const selectedList = list.includes(id) ? 
        list.filter((x) => x !== id) : [...list, id]
        setList(selectedList)
    }

    const deleteSelected = () => {
        const value = data.filter((x) => !list.includes(x.id));
        setData(value);
        setList([])
    }
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const value = await res.json();
        setData(value.products)
    }
    useEffect(() => {
        fetchData()
    }, [])

    
    return (
        <div className='lists'>
            <div>
                <h3>List</h3> <button onClick={deleteSelected}>DeleteSelected</button>
            <ul>{data.map((x) => (
                <li key={x.id}>{x.title}
                <input type='checkbox' checked={list.includes(x.id)} onChange={() => handleChangeFn(x.id)}/>
                </li>
            ))}</ul>
            </div>
            <div>
            <h3>sub List</h3>
            <ul>{
                list.map((x)=> {
                    const selectedProduct = data.find((y) => y.id === x)
                    return <li key={x}>{selectedProduct?.title}</li>
                })
                }
            </ul>
            </div>
        </div>
    )
}

export default ListTask;