import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlusSquare, FaEdit } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';

function UseState() {
  return (
    <div className="box">
      <h1>Use State Todo List</h1>
      <Form>
        <div className="flexHorizontal">
          <Form.Control placeholder="Add an item" />
          <Button variant="success"><FaPlusSquare /></Button>
        </div>
      </Form>
      <div className="listItems">
        <div className="flexHorizontal">
          <Form.Control value="Add an item" />
          <Button><FaEdit /></Button>
          <Button variant="danger"><ImBin /></Button>
        </div>
        <div className="flexHorizontal">
          <Form.Control value="Add an item" />
          <Button><FaEdit /></Button>
          <Button variant="danger"><ImBin /></Button>
        </div>
      </div>
    </div>
  )
}

export default UseState