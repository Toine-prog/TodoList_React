import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEdit, FaCheckSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';

const Todo = ({item, editItem, deleteItem, validItem, editedItem, OnChangeEditingItem}) => {
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
}

export default Todo