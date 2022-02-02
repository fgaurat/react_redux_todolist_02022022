


import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodoAsync } from '../../slices/todoSlice';

const TodoForm = () => {

    const [title, setTitle] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

    const dispatch = useDispatch()
    const onSubmit = (event:FormEvent)=>{
        
        dispatch(saveTodoAsync({title, completed}))
    }

    return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only' htmlFor='title'>Name</label>
			<input
				type='text'
				id="title"
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={title}
				onChange={(event) => setTitle(event.target.value)}/>
			
			<label className='sr-only' htmlFor='completed'>Completed ?</label>
			<input
              type="checkbox"
			  id="completed"
              onChange={(event) => setCompleted(event.target.checked)}
              checked={completed}
            />				
			<br/>
			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};


export default TodoForm;

