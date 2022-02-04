import React from 'react';
import "./searchTodo.css"

const SearchTodo = () => {
    return (
        <div>
            <input className={"search-input"} placeholder={"Имя заметки"}/>
        </div>
    );
};

export default SearchTodo;