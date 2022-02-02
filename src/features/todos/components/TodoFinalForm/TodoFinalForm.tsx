import React, { FormEvent, Suspense } from 'react';
import { Form, Field,useFormState } from 'react-final-form'
import { useDispatch } from 'react-redux';
import { Todo } from '../../../../core/Todo';
import { saveTodoAsync } from '../../slices/todoSlice';


const TodoFinalForm = () => {

    const dispatch = useDispatch()
	
	const onSubmit = (todo:Todo)=>{
        dispatch(saveTodoAsync(todo))
    }

	const onValidate = (values:Todo)=>{
		const errors:any = {}
		if(!values.title){
			errors.title = 'Required'
		}
		return errors
	}

    return (
		<Form
			onSubmit={onSubmit}
			validate = {onValidate} 
			initialValues={{title: '', completed: false}}
			render={({ handleSubmit,submitting,pristine}) => (

					<form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
						<label className='sr-only' htmlFor='title'>Name</label>
						<Field name='title' component='input' className='form-control mb-2 mr-sm-2' placeholder='Add todo...'/>
						
						<label className='sr-only' htmlFor='completed'>Completed ?</label>
						<Field name='completed' component='input' type="checkbox" />
						<br/>
						<button type='submit' className='btn btn-primary mb-2' disabled={pristine || submitting}>
							Submit
						</button>
					</form>
			)
		}/>
	);
};

export default TodoFinalForm;
