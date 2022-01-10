import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
 

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (data) => {
        setTodos(td => [...td, { id: uuid(), task: data.task }]);
    }

    const removeTodo = e => {
        const id = e.target.parentElement.id;
        setTodos(todos.filter(todo => id !== todo.id ));
    };

    return (
        <main>
            <NewTodoForm addNewTodo={addNewTodo} />
            <div>
                {todos.map(t => (
                    <Todo 
                        key={t.id}
                        id={t.id}
                        task={t.task}
                        remove={removeTodo}
                    />
                ))}
            </div>
        </main>
    );
};


export default TodoList;