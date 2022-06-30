import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare} from 'react-icons/fa';

const TodoForm = ({itemToAdd, handleChange, addItem}) => {
  return (
    <div>
        <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" value={itemToAdd} onChange={handleChange} />
          <Button variant="success" onClick={addItem}><FaPlusSquare /></Button>
        </div>
      </Form>
    </div>
  )
}

export default TodoForm