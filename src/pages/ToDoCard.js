import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAsync, getTaskAsync } from '../features/taskSlice';

const ToDoCard = ({ id_todo, foreignKey }) => {
	const dispatch = useDispatch();

	const DeleteTaskButton = () => {
		dispatch(deleteTaskAsync({ id_todo }));
	};

    useEffect(() => {
		dispatch(getTaskAsync({ foreignKey }));
	}, [dispatch, foreignKey]);

    const tasks = useSelector((state) => state.tasks);

	return (
    <>
        {tasks.map((task) => (
        <div className="myTask" id={ task.id_todo }>
            <p>{ task.title }</p>
            <button className="buttonDelete" onClick={ DeleteTaskButton }>
                Delete if you finish the task
            </button>
        </div>
        ))}
    </>
	);
};

export default ToDoCard;