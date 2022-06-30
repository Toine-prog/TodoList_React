import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare} from 'react-icons/fa';

const TodoForm = ({setItems}) => {

    const [itemToAdd, setItemToAdd] = useState("");

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
    
  return (
    <div>
        <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" value={itemToAdd} onChange={OnChangeItemText} />
          <Button variant="success" onClick={addItem}><FaPlusSquare /></Button>
        </div>
      </Form>
    </div>
  )
}

export default TodoForm