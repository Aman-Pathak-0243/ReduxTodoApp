
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <h1 className='title_'>Todo App Using Redux Tool Kit</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
