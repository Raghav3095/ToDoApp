import './App.css';
import Header from './MyComponents/Header' // without curly brackets because made with rfc
import { ToDo } from "./MyComponents/ToDo"; // inside curly brackets because made with rafc
import { Footer } from "./MyComponents/Footer";
import { AddToDo } from "./MyComponents/AddToDo";
import { About } from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todolist") === null) {
    initTodo = '';
  } else {
    initTodo = JSON.parse(localStorage.getItem("todolist"));
  }

  const onDelete = (todo) => {
    console.log("Deleting task", todo);

    setTodolist(todolist.filter((el) => {
      return el !== todo;
    }));

    localStorage.setItem("todolist", JSON.stringify(todolist));
  }

  const addItem = (title, description) => {
    console.log("Adding task", "Title:", title, "Description:", description);
    let sno;

    if (todolist.length === 0) {
      sno = 0;
    } else {
      sno = todolist[todolist.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }

    // Adding the submitted 'myTodo' object to the 'todolist' array
    setTodolist([...todolist, myTodo]);
    console.log(myTodo);

  }

  // This is passed into the 'ToDo' module as the property 'todo'
  // which calls 'ToDoElem' module to display by each property

  // setTodolist updates the todilist list and uses the updated state
  const [todolist, setTodolist] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist])

  return (
    <>
      <Router>
        {/* passing the title property to the Header module */}
        <Header title='My To-Do list Project' searchBar={false} />

        {/* adding a 'router' to 'switch' to the selected sections */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddToDo addItem={addItem} />
                {/* passing the todolist array to the ToDo module */}
                <ToDo todolist={todolist} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>

  );
}

export default App;
