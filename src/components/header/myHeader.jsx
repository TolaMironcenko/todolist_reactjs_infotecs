import React from 'react';
import "./myHeader.css"

const MyHeader = () => {
    return (
        <header className={"header"}>
            <button className={"create-todo-btn"}>Новая замтка</button>
            <button className={"create-todo-btn"}>Удалить все</button>
        </header>
    );
};

export default MyHeader;