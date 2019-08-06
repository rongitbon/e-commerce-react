import React from 'react';

import './menu-item.scss';

const MenuItem = ({title, imageUrl}) => (
    <div className='menu-item'>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
                className='background-image'>
            </div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
);
export default MenuItem;