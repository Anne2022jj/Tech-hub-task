import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import PostDetails from "./Pages/PostDetails";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import Todos from "./Pages/Todos";
import TodoDetails from "./Pages/TodoDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetails />} />

          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />

          <Route path="todos" element={<Todos />} />
          <Route path="todos/:todoId" element={<TodoDetails />} />

          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
