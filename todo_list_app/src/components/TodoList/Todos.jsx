import React from 'react';
import { Todo } from './';

const Todos = ({items, setItems}) => {

  return (
    <div className="listItems">
        {items && items.map((item) => {
          return(
          <Todo item={item} items={items} setItems={setItems}/>
          )
        })}
      </div>
  )
}

export default Todos