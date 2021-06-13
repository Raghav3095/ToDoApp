import React from 'react'
import { ToDoElem } from './ToDoElem'

export const ToDo = (props) => {
    return (
        <div className="container todostyle">
            <h3 className="text-center py-1">To-Do List</h3>
            {props.todolist.length === 0 ?
                <div className="text-center py-1">
                    No more tasks to do
                </div> :
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {props.todolist.map((todo) => {
                        return (<ToDoElem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                    })}
                </div>

            }
        </div>
    )
}

export default ToDo;