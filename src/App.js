import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js'

class App extends Component {
  render() {
    const todoItems = [
      {
        createdOn: new Date("January 5, 2018"),
        title: "Birthday Party",
        status: "complete",
      },
      {
        createdOn: new Date("May 1, 2018"),
        description: "Ugh",
        title: "Do something I don't want to do",
        status: "started",
      },
      {
        createdOn: new Date("May 1, 2018"),
        description: "See how grooming is going and tell her that I love her.",
        title: "Call Jennifer",
        status: "complete",
      },
      {
        createdOn: new Date("May 1, 2018"),
        title: "Laundry",
      },
    ];

    const todoItemDisplay = todoItems.map(({createdOn, description, title, status}) => {
      return <TodoItem
               createdOn={createdOn}
               description={description}
               key={title}
               title={title}
               status={status} />
    });

    return (
      <div className="todo-items">
        {todoItemDisplay}
      </div>
    );
  }
}

export default App;
