import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../context/todoContext';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const TodoItem = ({ todo: { id, title, isCompleted } }) => {
  const todoContext = useContext(TodoContext);
  const { toggleCompleted, deleteTodo, editTodo } = todoContext;

  const [disabled, toggleDisabled] = useState(true);
  const [editedTitle, setEditedTitle] = useState({ ...title });

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  const styleCompleted = {
    textDecoration: 'line-through',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const styleNotCompleted = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const onChange = e => {
    setEditedTitle(e.target.value);
  };

  const onEdit = e => {
    if (!disabled) {
      editTodo({ id, editedTitle });
    }
    toggleDisabled(!disabled);
  };

  return (
    <InputGroup className='my-2'>
      <InputGroup.Prepend>
        <InputGroup.Checkbox
          onChange={e => toggleCompleted(id)}
        ></InputGroup.Checkbox>
      </InputGroup.Prepend>
      <FormControl
        type='text'
        onChange={e => onChange(e)}
        style={isCompleted ? styleCompleted : styleNotCompleted}
        placeholder='Edit todo title'
        value={editedTitle}
        disabled={disabled}
      />
      <InputGroup.Append>
        <Button
          onClick={e => onEdit(e)}
          variant={`outline-${disabled ? 'info' : 'success'}`}
        >
          {disabled ? 'Edit' : 'Save'}
        </Button>
        <Button onClick={e => deleteTodo(id)} variant='outline-danger'>
          X
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
