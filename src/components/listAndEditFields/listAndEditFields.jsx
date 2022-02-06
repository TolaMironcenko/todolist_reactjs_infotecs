import EditField from './EditField/EditField';
import { useRef } from "react";
import "./listAndEditFields.css"
import TodoList from "./TodoList/TodoList";

const ListAndEditFields = (props) => {

    const todoRef = useRef() 

    return (
        <div className={"list-and-edit-fields"}>
            <TodoList todoList={props.todoList}/>
            <EditField todoList={props.todoList} ref={todoRef}/>
        </div>
    );
};

export default ListAndEditFields;