import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left</div>
    </>
  )
}

export default App;