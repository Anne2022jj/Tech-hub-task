import {useEffect, useState } from "react";
import { useParams } from "react-router";

export default function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        setTodo(data)
      });
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h3>Todo #{todo.id}</h3>
      <p>{todo.title}</p>
      <p>Status: {todo.completed ? "✅ Completed" : "❌ Not completed"}</p>
    </div>
  );
}
