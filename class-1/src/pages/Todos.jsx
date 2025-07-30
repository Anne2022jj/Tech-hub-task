import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </div>
      ))}
    </div>
  );
}
