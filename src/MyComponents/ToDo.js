import React from 'react';
import { ModalAlert } from './ModalAlert';
import { ToDoElem } from './ToDoElem';
// import { ModalAlert } from "./ModalAlert";

export const ToDo = (props) => {
    return (
        <div className="container todostyle">
            <h3 className="text-center py-1">To-Do List</h3>
            {props.todolist.length === 0 ?
                <div className="text-center py-1">
                    <ModalAlert/>
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