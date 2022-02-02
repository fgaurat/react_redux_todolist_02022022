import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../../../core/Todo';
import { deleteTodoAsync } from '../../slices/todoSlice';


interface TodoProps {
    todo: Todo;
}

const TodoRow = ({todo}:TodoProps) => {
    console.log(`TodoRow ${todo.completed}`)
    const dispatch = useDispatch()
    return( 
    <tr >
        <td >{todo.id}</td>
        <td >{todo.title}</td>
        <td >{todo.completed}</td>
        <td>
            <button className='btn btn-danger' onClick={e => dispatch(deleteTodoAsync(todo.id))}>delete</button>
        </td>
      </tr>)
};

// export default TodoRow;
export default React.memo(TodoRow);
