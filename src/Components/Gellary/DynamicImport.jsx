import React, { useState } from 'react';
import './style.css';

const DynamicImport = () => {
    const [img, setImg] = useState('');
    return (
        <div>
            <button onClick={() => {
                (async () => {
                    const i = await import('../star.png');
                    const h = await i.default;
                    console.log('h', i);
                    setImg(h)
                })()
            }}>load image</button>
            <img src={img} alt='Hello' style={{ width: '100px', height: '100px' }} />
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong className='fancy-link'>Inventore nobis eius iure, modi aperiam nihil. Odio, iste libero?</strong> Natus iusto voluptas praesentium iure eveniet asperiores totam excepturi, harum vero doloremque?</p>
        </div>
    );
}

export default DynamicImport;
