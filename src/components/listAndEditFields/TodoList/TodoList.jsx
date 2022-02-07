import React from 'react';
import SearchTodo from "../../searchTodo/searchTodo";
import Note from "../../note/note";
import './TodoList.css'

const TodoList = (props) => {

    return (
        <div className={"todoList"}>
            <SearchTodo/>
            <div className="list">
                {props.todoList.map(todo =>
                            <Note todoList={props.todoList} todo={todo} key={todo.id}/>
                )}
            </div>
            <div id='drag'/>
        </div>
    );
};

export default TodoList;
