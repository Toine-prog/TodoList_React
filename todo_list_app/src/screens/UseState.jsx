import React from 'react';
import { useState, useEffect } from 'react';
import { TodoForm, Todos } from '../components/TodoList'


function UseState() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

  return (
    <div className="box">
      <h1>Use State Todo List</h1>
      <TodoForm setItems={setItems}/>
      <Todos items={items} setItems={setItems} />
    </div>
  )
}

export default UseState