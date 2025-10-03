import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/add">Add User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route
          path="/add"
          element={<AddUserForm onAddUser={handleAddUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
