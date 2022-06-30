import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEdit, FaCheckSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';

const Todo = ({item, items, setItems}) => {
    const [editedItem, setEditedItem] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    
    const OnChangeEditingItem = (e) => {
        setEditedItem(e.target.value);
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

    return(
        <>
         {item.readOnly ?
        <div className="flexHorizontal" key={item.id}>
            <Form.Control value={item.value} readOnly={item.readOnly}/>
            <Button onClick={(e) => editItem(item.id)}><FaEdit /></Button>
            <Button variant="danger" onClick={() => deleteItem(item.id)}><ImBin /></Button>
        </div>
        :
        <div className="flexHorizontal" key={item.id}>
            <Form.Control value={item.readOnly ? item.value : editedItem} readOnly={item.readOnly} onChange={OnChangeEditingItem}/>
            <Button variant="success" onClick={() => validItem(item.id)}><FaCheckSquare /></Button>
        </div>
        }
        </>
    )
    
}

export default Todo