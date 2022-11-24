import React from 'react';
import Todos from './Todos';

const Todo = () => {
    const todo=localStorage.getItem('AddTodo');
    const todoItems=JSON.parse(todo);
    
    return (
        <div>
          <h3>yhsoi os todo</h3>
          {
            todoItems.map(item=><Todos todo={item}></Todos>)
          }
        </div>
    );
};

export default Todo;