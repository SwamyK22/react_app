import React from 'react';

const Input = (props) => {
    const { lable, placeholder } = props;
    return (
        <div className='inpBox'>
            <label>{lable}</label>
            <input className='inp' placeholder={placeholder} />
        </div>
    );
}

export default Input;
