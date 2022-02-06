import React from 'react';
import './MyBtn.module.css'

const MyBtn = (props) => {
    return (
        <button {...props} className={"create-todo-btn"}>{props.children}</button>
    );
};

export default MyBtn;