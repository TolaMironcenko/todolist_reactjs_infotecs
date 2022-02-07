import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
import Note from '../note/note';
import "./myHeader.css"
import reactDom from 'react-dom';

const MyHeader = (props) => {

    const CreateNewNote = (e, todoList) => {
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
        edit.id = todoList.length - 1
        localStorage.setItem('todoList', JSON.stringify(todoList))
        reactDom.render(
            props.todoList.map(todo =>
                <Note todo={todo} key={todo.id}/>
            ),
            document.querySelector('#root').querySelector('.list')
        )
    }

    const deleteAll = (e,todoList) => {
        e.preventDefault()
        todoList = []
        console.log(todoList)
        localStorage.clear()
        document.querySelector('#root').querySelector('.list').innerHTML = ''
        document.querySelector('#root').querySelector('.edit').style.display = 'none'
    }

    return (
        <header className={"header"}>
            <MyBtn onClick={e=>CreateNewNote(e,props.todoList)}>Новая заметка</MyBtn>
            <MyBtn onClick={e=>deleteAll(e,props.todoList)}>Удалить все</MyBtn>
        </header>
    );
};

export default MyHeader;