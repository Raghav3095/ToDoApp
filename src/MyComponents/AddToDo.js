import React from 'react';
import { useState } from 'react';

export const AddToDo = (props) => {
    // setting initial empty states for 'title' and 'description' to add to the list
    // this 'target' is given a value through the onChange property
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const submit = (el) => {
        el.preventDefault();
        if (!title) {
            alert("Title cannot be blank.")
        } else if (!description) {
            alert("Descripton cannot be blank.")
        } else if (!title && !description) {
            alert("Title and description cannot be blank.")
        } else {
            props.addItem(title, description);
        }

        setTitle('');
        setDesc('');
    }

    return (
        <div className="container">
            <h3 className="text-center my-3">Add your tasks</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(el) => { setTitle(el.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Task Description</label>
                    <input type="text" value={description} onChange={(el) => { setDesc(el.target.value) }} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add to list</button>
            </form>
        </div>
    )
}

export default AddToDo;