import React from "react"; 
//import { useState } from "react";

export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
  const handleAddClick = () =>{
    if (todoValue.trim() === '') {
      return;
    }
    handleAddTodos(todoValue);
    setTodoValue('');
    console.log('Todo added: ', todoValue); // Debugging log
  };

  return (
    <header>
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        placeholder="Enter todo ....."
        aira-label="Todo Input"  
      />
      <button onClick={handleAddClick}>Add</button>
    </header>
  );
}
