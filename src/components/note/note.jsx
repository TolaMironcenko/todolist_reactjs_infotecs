import React from 'react';
import "./note.css"
import Dropdown from "../dropdown/Dropdown";
import reactDom from 'react-dom';

const Note = (props) => {

    const changeTodo = (e) => {
        document.querySelectorAll('.active-todo').forEach(activeTodo=>activeTodo.classList.remove('active-todo'))
        e.target.classList.add('active-todo')
        const edit = document.querySelector('.edit')
        edit.id = e.target.id
        edit.style.display = 'block'
        edit.innerHTML = props.todo.todo
    }

    const deleteTodo = (e, todoList) => {
        todoList.splice(todoList.length - 1 - e.target.id, 1)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        reactDom.render(
            todoList.map(todo =>
                <Note todoList={todoList} todo={todo} key={todo.id}/>
            ),
            document.querySelector('#root').querySelector('.list')
        )
    }

    return (
        <div id={props.todo.id} onClick={e=>changeTodo(e)} className={'todo'}>
            <p id={props.todo.id} onClick={e=>changeTodo(e)} className={'todo-text'}>{props.todo.title}</p>
            <Dropdown id={props.todo.id}/>
            <button 
                onClick={e=>deleteTodo(e, props.todoList)} 
                id={props.todo.id} 
                className={'del-todo-btn'}
            >
                <img 
                    onClick={e=>deleteTodo(e, props.todoList)} 
                    id={props.todo.id} 
                    className={'trash-icon'} 
                    src="https://img.icons8.com/material-rounded/24/000000/delete.png" 
                    alt={'delete'}
                />
            </button>
        </div>
    );
};

export default Note;