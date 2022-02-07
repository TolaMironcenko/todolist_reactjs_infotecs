import React from 'react';
import Note from '../../note/note';
import reactDom from 'react-dom';

const EditField = React.forwardRef((props,ref) => {

    const changeTodo = (event, ref, todoList) => {
        todoList[todoList.length - 1 - ref.current.id].todo = ref.current.innerHTML
        todoList[todoList.length - 1 - ref.current.id].title = ref.current.innerHTML.split('<')[0]
        // document.querySelectorAll('.todo-text')[todoList.length - 1 - ref.current.id].innerHTML = todoList[todoList.length - 1 - ref.current.id].title
        console.log(todoList[ref.current.id].todo, todoList[ref.current.id].title)
        console.log(todoList, ref.current.id)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        reactDom.render(
            todoList.map(todo =>
                <Note todoList={todoList} todo={todo} key={todo.id}/>
            ),
            document.querySelector('#root').querySelector('.list')
        )
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