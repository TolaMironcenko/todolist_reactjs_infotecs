import React from 'react';
import "./note.css"
import Dropdown from "../dropdown/Dropdown";

const Note = (props) => {

    const changeTodo = (e) => {
        e.target.classList.add('active-todo')
        const edit = document.querySelector('.edit')
        edit.id = e.target.id
        edit.style.display = 'block'
        edit.innerHTML = props.todo.todo
    }

    return (
        <div id={props.todo.id} onClick={e=>changeTodo(e)} className={'todo'}>
            <p id={props.todo.id} onClick={e=>changeTodo(e)} className={'todo-text'}>{props.todo.title}</p>
            <Dropdown id={props.todo.id}/>
            <button id={props.todo.id} className={'del-todo-btn'}>
                <img id={props.todo.id} className={'trash-icon'} src="https://img.icons8.com/material-rounded/24/000000/delete.png" alt={'delete'}/>
            </button>
        </div>
    );
};

export default Note;