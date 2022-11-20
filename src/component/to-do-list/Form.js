import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
function Form({ setInputText, setTodos, todos, inputText, status, setStatus }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText) {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: Math.random() * 10000
                }
            ]);
            setInputText('');
        }

    }

    const statusChangeHandler = (e) => {
        setStatus(e.target.value)
    }



    return (
        <form className="todo-form">
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <BsPlusCircleFill />
            </button>
            <div className="todo-select">
                <select name="todos" className="todo-filter" value={status} onChange={statusChangeHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
