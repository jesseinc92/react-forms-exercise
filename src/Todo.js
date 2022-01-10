import React from 'react';


const Todo = ({ id, task, remove }) => {
    return (
        <div id={id}>
            <p>{task}</p>
            <button onClick={remove}>&times;</button>
        </div>
    )
}


export default Todo;