import React from "react";
import MyHeader from "./components/header/myHeader";
import ListAndEditFields from "./components/listAndEditFields/listAndEditFields";
import './css/App.css'

const App = () => {

  let todoList = localStorage.getItem('todoList') == null ? [] : JSON.parse(localStorage.getItem('todoList'))

  // const addNewPost = () => {

  // }

  return (
      <div className={"App"}>
        <MyHeader todoList={todoList}/>
        <ListAndEditFields todoList={todoList}/>
      </div>
  );
}

export default App;
