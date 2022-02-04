import React from 'react';
import "./note.css"

const Note = (props) => {
    return (
        <div className={'todo'}>
            <p className={'todotext'}>{props.title}</p>
            <div className={'dropdown'}/>
        </div>
    );
};

export default Note;