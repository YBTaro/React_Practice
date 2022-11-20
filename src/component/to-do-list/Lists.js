import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
function Lists({ todos, setTodos, filterTodos }) {

    const deleteHandler = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id
        )

        setTodos(newTodos)
    }

    const completeHandler = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id == id) {
                return {
                    ...todo,
                    completed: true
                }
            }
            else {
                return todo
            }
        });

        setTodos(newTodos);
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filterTodos.map((todo) => (
                        <li key={todo.id} className="todo">
                            <div className={`todo-content ${todo.completed && "todo-completed"}`}>{todo.text}</div>
                            <button className="todo-check-but" onClick={() => { completeHandler(todo.id) }}>
                                <AiOutlineCheck />
                            </button>
                            <button className="todo-delete-but" onClick={() => { deleteHandler(todo.id) }}>
                                <BsFillTrashFill />
                            </button>
                        </li>
                    ))

                }

            </ul>
        </div>
    )
}

export default Lists
