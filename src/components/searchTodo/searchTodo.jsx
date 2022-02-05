import React from 'react';
import "./searchTodo.css"

const searchTodo = (event) => {
    event.preventDefault();
    // обьявляем переменные переменные
    const input = event.target.value.toLowerCase();
    let list = document.querySelector('.list')
    const articles = document.querySelectorAll('.todo')
    const articlesTexts = list.querySelectorAll('.todo-text');

    // Прокручиваем все элементы списка и скрываем те, которые не соответствуют поисковому запросу
    for (let i = 0; i < articles.length; i++) {
    if (articlesTexts[i].innerHTML.toLowerCase().indexOf(input) > -1) {
            articles[i].style.display = "";
    } else {
            articles[i].style.display = "none";
        }
    }
}

const SearchTodo = () => {
    return (
        <input className={"search-input"} placeholder={"Имя заметки"} onKeyUp={searchTodo}/>
    );
};

export default SearchTodo;