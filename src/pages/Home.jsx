import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState('');  

 
  const addTodo = (event) => {
    event.preventDefault(); 
   
    const newTodoItem = {
      id: Date.now(),  
      task: newTodo,  
    };

    setTodos([...todos, newTodoItem]); 
    console.log('Added Todo:', newTodo); 
    setNewTodo('');  
  };


  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos); 
    console.log('Deleted Todo ID:', id); 
  };


  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);

    const newTodo = prompt('Edit your to-do', todoToEdit.task);

    if (newTodo && newTodo !== todoToEdit.task) {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTodo } : todo 
      );
      setTodos(updatedTodos);  
      console.log('Updated Todo:', newTodo);  
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>

      
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}  
          placeholder="Enter a new todo"
        />
        <button type="submit">Add To-Do</button>
      </form>

      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>  
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
