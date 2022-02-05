import React from 'react';
import "./note.css"
import Dropdown from "../dropdown/Dropdown";

const Note = (props) => {
    return (
        <div className={'todo'}>
            <p className={'todo-text'}>{props.title}</p>
            <Dropdown/>
            <button className={'del-todo-btn'}>
                <img className={'trash-icon'} src="https://img.icons8.com/material-rounded/24/000000/delete.png" alt={'delete'}/>
            </button>
        </div>
    );
};

export default Note;