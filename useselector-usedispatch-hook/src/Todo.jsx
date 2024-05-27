import React, { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error();
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'add', text: input });
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={handleKeyPress} 
        placeholder="Add a to-do" 
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'toggle', id: todo.id })}>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;