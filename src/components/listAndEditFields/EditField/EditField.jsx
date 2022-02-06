import React from 'react';

const EditField = React.forwardRef((props,ref) => {

    const changeTodo = (event, ref, todoList) => {
        todoList[ref.current.id].todo = ref.current.innerHTML
        todoList[ref.current.id].title = ref.current.innerHTML.split('<')[0]
        // console.log(todoList[ref.current.id].title)
        document.querySelectorAll('.todo-text')[todoList.length - 1 - ref.current.id].innerHTML = todoList[ref.current.id].title
    }
    
    return (
        <div className={"edit-block"}>
            <div
                ref={ref}
                onKeyUp={event => {changeTodo(event, ref, props.todoList)}}
                className={"edit"} 
                contentEditable={true}
            />        
        </div>
    );
});

export default EditField;