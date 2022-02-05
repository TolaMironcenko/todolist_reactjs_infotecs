import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
    return (
        <div className={'dropdown'}>
            <button value={0} className={'drop-btn'}>ожидает</button>
            <div className={'dropdown-content'}>
                <button className={'flag-btn'}>ожидает</button>
                <button className={'flag-btn'}>в процессе</button>
                <button  className={'flag-btn'}>выполнена</button>
            </div>
        </div>
    );
};

export default Dropdown;