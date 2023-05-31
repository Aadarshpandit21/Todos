import React from 'react'
import Counter from './components/counter/count';
import Navbar from './components/navbar/navbar';
import Todo from './components/todo/todo';
function App() {

  return (
    <>
      <Navbar />
      <Todo />
     <Counter />
    </>
  )
}

export default App
