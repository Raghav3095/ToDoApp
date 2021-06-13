import React from 'react'

export const ToDoElem = ({ todo, onDelete }) => {
    return (
        <>
            <div className="py-3">
                <div className="card text-center border-dark h-100">
                    <div className="card-body">
                        <h4 className="card-title">{todo.title}</h4>
                        <p className="card-text">{todo.description}</p>
                        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoElem;