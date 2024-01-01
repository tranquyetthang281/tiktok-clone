import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodoList = () => {
    setTodoList(prev => [...prev, todo])
    setTodo('')
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={todo} 
        onChange={e => setTodo(e.target.value)}/>
      <button onClick={addTodoList}>Add</button>
      <ul>
        {todoList.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
