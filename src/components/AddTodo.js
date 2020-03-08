import React, { useState, useContext } from 'react';
import TodoContext from '../context/todoContext';
import { v4 as uuidv4 } from 'uuid';
import { Form, Col, Button } from 'react-bootstrap';

const AddTodo = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  const [title, setTitle] = useState('');

  const onChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    title !== ''
      ? addTodo({ title, isCompleted: false, id: uuidv4() })
      : alert('Please provide todo title!');
    setTitle('');
  };

  return (
    <Form className='my-4' onSubmit={e => onSubmit(e)}>
      <Form.Row>
        <Col>
          <Form.Control
            type='text'
            placeholder='Add Todo'
            value={title}
            onChange={e => onChange(e)}
          />
        </Col>
        <Col>
          <Button variant='outline-primary' type='submit'>
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default AddTodo;
