import React, { useEffect, useState } from 'react'
import Form from './Form'
import Lists from './Lists'
import './Todolist.css'


function Todolist() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filterTodos, setFilterTodos] = useState([])

    useEffect(()=>{
        getLocalTodos();
        console.log('getlocal')
    },[])

    useEffect(() => {
        filterHandler();
        console.log('filter');
    }, [status, todos])

    useEffect(() => {
        saveLocalTodos();
        console.log('save');
    }, [todos])

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }


    }




    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilterTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilterTodos(todos)
        }
    }
    return (
        <div className="todo-body">
            <h1>My Todo List</h1>
            <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos}
                status={status} setStatus={setStatus} />
            <Lists filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todolist
