import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editValue;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditValue('');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditValue('');
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>&nbsp;&nbsp;
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo}&nbsp;&nbsp;
                <button onClick={() => handleEditTodo(index)}>Edit</button>&nbsp;&nbsp;
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;