import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}
