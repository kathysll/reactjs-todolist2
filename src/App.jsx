import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify(newList));
    console.log('Persisted todos:', newList); //Debugging log 
  };

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos[newTodoList]; // Update state first
    console.log('Setting todos state:', newTodoList); // Debugging log
    persistData(newTodoList); // then persist data
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList); // Update state first
    console.log('Setting todos state after delete: ', newTodoList); // Debugging log
    persistData(newTodoList); // then persist data
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos);
      setTodos(parsedTodos);
      console.log('Loaded todos from localStorage: ', parsedTodos); //Debugging log
      }
  }, []);

  useEffect(() => {
      console.log('Updated todos satte: ', todos); //Debugging log
      },[todos]);

  return (
    <>
      <TodoInput 
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos} 
      />
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        todos={todos} 
      />
    </>
  );
}

export default App;
