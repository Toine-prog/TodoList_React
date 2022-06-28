import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare, FaEdit, FaCheckSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';


function UseState() {

  const OnChangeItemText = (e) => {
    setItemToAdd(e.target.value);
  }

  const OnChangeItemEdit = (e) => {

  }
  
  const addItem = () => { 
    if(itemToAdd !== "") {
      setItems(prevItems => [...prevItems, {
        id: prevItems.length,
        value: itemToAdd,
        readOnly: true
      }]);
  
      setItemToAdd("")
    }
  }

  const deleteItem = (itemIdToDelete) => {

    setItems(items.filter(item => {
      return item.id !== itemIdToDelete;
    }));
  }

  const editItem = (itemIdToEdit, e) => {
    const newItems = items.map(item => {
      if(item.id === itemIdToEdit) {
        item.readOnly = !item.readOnly;
        item.value = e.target.value;
      }
      return item;
    });
    setItems(newItems);
  }

  const [items, setItems] = useState([]);
  const [itemToAdd, setItemToAdd] = useState("");

  return (
    <div className="box">
      <h1>Use State Todo List</h1>
      <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" value={itemToAdd} onChange={OnChangeItemText} />
          <Button variant="success" onClick={addItem}><FaPlusSquare /></Button>
        </div>
      </Form>
      <div className="listItems">
        {items && items.map((item) => {
          if(item.readOnly) {
            return (
              <div className="flexHorizontal" key={item.id}>
                <Form.Control value={item.value} readOnly={item.readOnly}/>
                <Button onClick={(e) => editItem(item.id, e)}><FaEdit /></Button>
                <Button variant="danger" onClick={() => deleteItem(item.id)}><ImBin /></Button>
            </div>
            )
          }
          else {
            return (
              <div className="flexHorizontal" key={item.id}>
                <Form.Control value={item.value} readOnly={item.readOnly}/>
                <Button variant="success" onClick={(e) => editItem(item.id, e)}><FaCheckSquare /></Button>
            </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default UseState