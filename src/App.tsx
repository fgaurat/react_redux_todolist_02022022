import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import TodoForm from './features/todos/components/TodoForm';
import TodoFinalForm from './features/todos/components/TodoFinalForm';

function App() {
  return (
    <div>

      <h1>TodoForm</h1>
      <TodoForm></TodoForm>
      <h1>TodoFinalForm</h1>
      <TodoFinalForm></TodoFinalForm>
      <hr/>  
      <h1>TodoList Redux</h1>  
      <TodoList></TodoList>
    </div>
  );
}

export default App;
