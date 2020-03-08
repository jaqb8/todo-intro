import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import TodoState from './context/TodoState';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <TodoState>
      <Header />
      <Container>
        <AddTodo />
        <Todos />
      </Container>
    </TodoState>
  );
}

export default App;
