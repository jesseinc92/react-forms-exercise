import React, { useState } from 'react';


const NewTodoForm = ({ addNewTodo }) => {
    const INITIAL_STATE = { task: '' };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = e => {
        e.preventDefault();
        addNewTodo(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='todo'>Todo: </label>
                <input 
                    id='todo' 
                    name='task' 
                    type='text' 
                    value={formData.task} 
                    onChange={handleChange} 
                />
            </div>

            <button>Add Todo</button>
        </form>
    );
};


export default NewTodoForm;