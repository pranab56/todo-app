import React from 'react';
import Todos from './Todos';

const Todo = (props) => {
  
  
    
    return (
        <div>
          <h3 className='text-center text-2xl'>All Todo List</h3>
      <Todos todo={props.todo[1]}></Todos>
        </div>
    );
};

export default Todo;