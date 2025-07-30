import {  useEffect, useState } from "react";
import { useParams } from "react-router";

export default function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        setUser(data)
      });
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
