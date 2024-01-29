import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Child = ({ onHandle }, ref) => {
    const [text, setText] = useState("Hello");

    const onChange = (text) => {
        setText(text);
    };

    useImperativeHandle(ref, () => ({ onChange }));
    return (
        <div>
            <hr />
            <p>This is Child Text: {text}</p>
            <label htmlFor="name">Enter Name: </label>
            <input type='text' onChange={(e) => onHandle(e.target.value)} />
        </div>
    );
}

export default forwardRef(Child);
