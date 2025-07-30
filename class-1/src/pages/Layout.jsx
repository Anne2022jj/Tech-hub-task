import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="page-layout">
      <nav
        style={{ marginBottom: "20px", background: "skyblue" }}
        className="nav-1"
      >
        <Link to="/" className="key-nav">
          <b>Home</b>
        </Link>{" "}
        |{" "}
        <Link to="/posts" className="key-nav">
          <b>Posts</b>
        </Link>{" "}
        |{" "}
        <Link to="/users" className="key-nav">
          <b>Users</b>
        </Link>{" "}
        |{" "}
        <Link to="/todos" className="key-nav">
          <b>Todos</b>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
