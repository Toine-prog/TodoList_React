import React from 'react';
import { useState } from 'react';
import { Todo } from './';

const Todos = ({items, setItems}) => {

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

  return (
    <div className="listItems">
        {items && items.map((item) => {
          return(
          <Todo 
            item={item} 
            editItem={editItem} 
            deleteItem={deleteItem} 
            validItem={validItem} 
            editedItem={editedItem} 
            OnChangeEditingItem={OnChangeEditingItem}
          />
          )
        })}
      </div>
  )
}

export default Todos