import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { Todo } from '../../../../core/Todo';
import { getTodosAsync } from '../../slices/todoSlice';

import TodoRow from './TodoRow';

const TodoList = () => {
  console.log('TodoList render')
  const dispatch = useDispatch();
  const todos:Todo[] = useSelector((state:RootState) => state.todoList.todos)

  useEffect(() => {
    dispatch(getTodosAsync())
  },[])

  return <div>
    TodoList

    <table className="table">
      <thead></thead>
      <tbody>
      {todos.map((todo:Todo) => <TodoRow key={todo.id} todo={todo}></TodoRow>)}
      </tbody>

    </table>

  </div>;
};

export default TodoList;
