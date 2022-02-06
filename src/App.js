import React, {useState} from "react";
import MyHeader from "./components/header/myHeader";
import ListAndEditFields from "./components/listAndEditFields/listAndEditFields";
import './css/App.css'

const App = () => {

  const [todoList,setTodoList] = useState([])

  // const addNewPost = () => {

  // }

  return (
      <div className={"App"}>
        <MyHeader setTodoList={setTodoList} todoList={todoList}/>
        <ListAndEditFields todoList={todoList}/>
      </div>
  );
}

export default App;
