import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';

function App() {
  return (
    <div>
      <h1>TodoList Redux</h1>  
      <TodoList></TodoList>
    </div>
  );
}

export default App;
