import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskSlice';

export default configureStore({
	reducer: {
		todos: taskReducer,
	},
});

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
