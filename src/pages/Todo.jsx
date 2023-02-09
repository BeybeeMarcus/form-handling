import React, { useState, useEffect } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.example.com/todos');
      const jsonData = await res.json();
      setTodos(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  function addTodo() {
    if (!input) {
      setError('Please enter a todo');
      return;
    }
    setError('');
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: input,
      status: false,
    };
    setTodos(oldTodos => [...oldTodos, item]);
    setInput('');
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function doneTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  return (
    <div className="App">
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Add to Do"
      />
      <button onClick={addTodo}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <hr />
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.status ? 'line-through' : '' }}
          >
            {todo.value}
            <button onClick={() => deleteTodo(todo.id)}>❌Delete</button>
            <button onClick={() => doneTodo(todo.id)}>
              {todo.status ? '↩️Undo' : '✔️Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;