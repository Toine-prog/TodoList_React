import React from 'react';
import { useState, useEffect } from 'react';
import { TodoForm, Todos } from '../components/TodoList'


function UseState() {

  const OnChangeItemText = (e) => {
    setItemToAdd(e.target.value);
  }
  
  const addItem = (e) => { 
    e.preventDefault();
    if(itemToAdd !== "") {
      setItems(prevItems => [...prevItems, {
        id: prevItems.length,
        value: itemToAdd,
        readOnly: true,
      }]);
      setItemToAdd("");
    }
  }

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [itemToAdd, setItemToAdd] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

  return (
    <div className="box">
      <h1>Use State Todo List</h1>
      <TodoForm itemToAdd={itemToAdd}  handleChange = {OnChangeItemText}  addItem = {addItem} />
      <Todos items={items} />
    </div>
  )
}

export default UseState