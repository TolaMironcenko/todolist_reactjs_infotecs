import React from 'react';
import "./searchTodo.css"

const searchTodo = (event) => {
    event.preventDefault();
    // обьявляем переменные переменные
    var input = event.target.value.toLowerCase();
    let list = document.querySelector('.list')
    const articles = document.querySelectorAll('.todo')
    var articlestexts = list.querySelectorAll('.todotext')

    // Прокручиваем все элементы списка и скрываем те, которые не соответствуют поисковому запросу
    for (var i = 0; i < articles.length; i++) {
    if (articlestexts[i].innerHTML.toLowerCase().indexOf(input) > -1) {
            articles[i].style.display = "";
    } else {
            articles[i].style.display = "none";
        }
    }
}

const SearchTodo = () => {
    return (
        <div>
            <input className={"search-input"} placeholder={"Имя заметки"} onKeyUp={searchTodo}/>
        </div>
    );
};

export default SearchTodo;