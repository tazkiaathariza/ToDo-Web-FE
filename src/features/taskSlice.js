import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	data: [],
	status: 'idle',
	error: null
};

export const getTaskAsync = createAsyncThunk(
    'tasks/getTaskAsync',
	async (payload) => {
        const response = await axios.get(`https://todo-web-tbinar.herokuapp.com/tasks/${payload.id}`)
        const tasksData = await response
        const tasks = tasksData.data.data.taskdata
        return { tasks }
	}
);

// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//     const response = await axios.get(`https://todo-web-tbinar.herokuapp.com/tasks/`);
//     const data = await response.json();
//     return data;
// });


export const addNewTaskAsync = createAsyncThunk(
	'tasks/addNewTaskAsync',
	async (payload) => {
        const response = await axios.post(`https://todo-web-tbinar.herokuapp.com/task/create/${payload.id}`, {
            foreignKey: payload.foreignKey, 
            id_todo: payload.id_todo,
            title: payload.title,
        });
            const tasksData = await response
            const tasks = tasksData.data.data
            return { tasks }
	}
);

export const deleteTaskAsync = createAsyncThunk(
	'tasks/deleteTaskAsync',
	async (payload) => {
        await axios.post(`https://todo-web-tbinar.herokuapp.com/task/delete/${payload.id}`)
        return { id: payload.id };
	}
);

export const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const task = {
                id_todo: action.id_todo,
				title: action.payload.title,
			};
			state.push(task);
		},
		deleteTask: (state, action) => {
			return state.filter((task) => task.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getTaskAsync.pending]: (state, action) => {
			state.status = 'loading';
		},
		[addNewTaskAsync.pending]: (state, action) => {
			state.status = 'loading';
		},
		[deleteTaskAsync.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getTaskAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[addNewTaskAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todos);
			state.status = 'succeeded';
		},
		[deleteTaskAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		[getTaskAsync.failed]: (state, action) => {
			state.status = action.error.message;
		},
		[addNewTaskAsync.failed]: (state, action) => {
			state.status = action.error.message;
		},
		[deleteTaskAsync.failed]: (state, action) => {
			state.status = action.error.message;
		},
	},
});

export const { addTask, deleteTask } =  taskSlice.actions;

export default taskSlice.reducer;


