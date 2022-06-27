import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare, FaEdit } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';


function UseState() {

  const OnChangeItemText = (e) => {
    setItemToAdd(e.target.value);
  }
  
  const addItem = () => { 
    if(itemToAdd !== "") {
      setItems(prevItems => [...prevItems, {
        id: prevItems.length,
        value: itemToAdd
      }]);
  
      setItemToAdd("")
    }
  }

  const deleteItem = (itemIdToDelete) => {

    setItems(items.filter(item => {
      return item.id !== itemIdToDelete;
    }));
  }

  const [items, setItems] = useState([]);
  const [itemToAdd, setItemToAdd] = useState("");

  return (
    <div className="box">
      <h1>Use State Todo List</h1>
      <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" value={itemToAdd} onChange={OnChangeItemText}/>
          <Button variant="success" onClick={addItem}><FaPlusSquare /></Button>
        </div>
      </Form>
      <div className="listItems">
        {items && items.map((item) => {
            return (
              <div className="flexHorizontal" key={item.id}>
                <Form.Control value={item.value} />
                <Button><FaEdit /></Button>
                {/* <Button variant="danger" onClick={deleteItem(item.id)}><ImBin /></Button> */}
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default UseState