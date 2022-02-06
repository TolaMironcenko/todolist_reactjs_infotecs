import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
import Note from '../note/note';
import "./myHeader.css"

const MyHeader = (props) => {

    const CreateNewNote = (e, todoList, setTodoList) => {
        e.preventDefault()
        let NewNote = {
            title: 'New note',
            todo: 'New note',
            id: todoList.length,
            flag: 0,
        }
        todoList.unshift(NewNote)
        console.log(todoList)
        const edit = document.querySelector('.edit')
        edit.style.display = 'block'
        edit.innerHTML = NewNote.title
        edit.id = todoList.length-1
        setTodoList(todoList)
        document.querySelector('.list').innerHTML = todoList.map(todo =><Note todo={todo} key={todo.id}/>)
    }

    return (
        <header className={"header"}>
            <MyBtn onClick={e=>CreateNewNote(e,props.todoList,props.setTodoList)}>Новая заметка</MyBtn>
            <MyBtn>Удалить все</MyBtn>
        </header>
    );
};

export default MyHeader;