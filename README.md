# Redux Toolkit Project Todo

This project is a simple Todo application built using React and Redux Toolkit. It demonstrates how to set up a Redux store, create slices, and manage state in a React application.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ReduxToolkitProjectTodo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ReduxToolkitProjectTodo
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:

```sh
npm start
```
This will start the application on `http://localhost:3000`.

### Project Structure

- `src/`
  - `features/`
    - `todo/`
      - `todoSlice.js` - Contains the Redux slice for todos.
  - `store.js` - Configures the Redux store.
  - `App.js` - Main application component.
  - `index.js` - Entry point of the application.

### Redux Setup

The Redux store is configured in `src/store.js`:

```javascript
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})

export default store
```

The `todoSlice.js` defines the state and reducers for the todo items:

```javascript
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
```
### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.
