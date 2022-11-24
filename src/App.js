import React from 'react';
import { Route, Routes } from 'react-router';
import AddTodo from './component/AddTodo';
import Done from './component/Done';
import Todo from './component/Todo';
import Todos from './component/Todos';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AddTodo/>}></Route>
        <Route path='/todos' element={<Todos></Todos>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/done' element={<Done></Done>}></Route>
      </Routes>
      

    </div>
  );
};

export default App;