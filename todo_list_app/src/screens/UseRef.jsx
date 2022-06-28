import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare, FaEdit, FaCheckSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';


function UseRef() {
  const OnChangeItemText = (e) => {
    setItemToAdd(e.target.value);
  }

  const OnChangeEditingItem = (e) => {
    setEditedItem(e.target.value);
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

  const deleteItem = (itemIdToDelete) => {

    setItems(items.filter(item => {
      return item.id !== itemIdToDelete;
    }));
  }

  const editItem = (itemIdToEdit) => {
    const newItems = items.map(item => {
      if(!isEditing) {
        if(item.id === itemIdToEdit) {
          item.readOnly = !item.readOnly;
          setEditedItem(item.value);
          setIsEditing(true);
        }
      }
      else {
        alert("An item is already being editing !");
      }
      return item;
    });
    setItems(newItems);
  }

  const validItem = (itemIdToValid) => {
    const newItems = items.map(item => {
      if(item.id === itemIdToValid) {
        item.readOnly = !item.readOnly;
        item.value = editedItem;
      }
      return item;
    });
    setItems(newItems);
    setIsEditing(false);
  }

  const [items, setItems] = useState([]);
  const [itemToAdd, setItemToAdd] = useState("");
  const [editedItem, setEditedItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="box">
      <h1>UseRef Todo List</h1>
      <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" value={itemToAdd} onChange={OnChangeItemText} autoFocus/>
          <Button variant="success" onClick={addItem}><FaPlusSquare /></Button>
        </div>
      </Form>
      <div className="listItems">
        {items && items.map((item) => {
          if(item.readOnly) {
            return (
              <div className="flexHorizontal" key={item.id}>
                <Form.Control value={item.value} readOnly={item.readOnly}/>
                <Button onClick={(e) => editItem(item.id)}><FaEdit /></Button>
                <Button variant="danger" onClick={() => deleteItem(item.id)}><ImBin /></Button>
            </div>
            )
          }
          else {
            return (
              <div className="flexHorizontal" key={item.id}>
                <Form.Control value={item.readOnly ? item.value : editedItem} readOnly={item.readOnly} onChange={OnChangeEditingItem}/>
                <Button variant="success" onClick={() => validItem(item.id)}><FaCheckSquare /></Button>
            </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default UseRef