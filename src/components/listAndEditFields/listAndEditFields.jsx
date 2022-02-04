import React from 'react';
import "./listAndEditFields.css"
import Note from "../note/note";
import SearchTodo from "../searchTodo/searchTodo";

const ListAndEditFields = () => {
    return (
        <div className={"list-and-edit-fields"}>
            <div className={"todoList"}>
                <SearchTodo/>
                <div className={"list"}>
                    <Note title={'hello'}/>
                </div>
            </div>
            <div className={"edit-block"} >
                <div className={"edit"} contentEditable={true}/>
            </div>
        </div>
    );
};

export default ListAndEditFields;