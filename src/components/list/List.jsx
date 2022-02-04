import React from 'react';
import Note from '../note/note';
import './List.css'

const List = () => {
    return (
        <div className={"list"}>
            <Note title={'hello'}/>
        </div>
    );
};

export default List;