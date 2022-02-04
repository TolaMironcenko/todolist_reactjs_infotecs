import React from 'react';
import "./listAndEditFields.css"
import SearchTodo from "../searchTodo/searchTodo";
import List from '../list/List';

const ListAndEditFields = () => {
    return (
        <div className={"list-and-edit-fields"}>
            <div className={"todoList"}>
                <SearchTodo/>
                <List/>
                <div id='drag'></div>
            </div>
            <div className={"edit-block"} >
                <div className={"edit"} contentEditable={true}/>
            </div>
        </div>
    );
};

export default ListAndEditFields;