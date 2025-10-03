import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList({ users }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  let filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "name") {
    filteredUsers = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "email") {
    filteredUsers = [...filteredUsers].sort((a, b) =>
      a.email.localeCompare(b.email)
    );
  }

  return (
    <div>
      <h2>👥 Users</h2>

      {}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setSortBy("name")}>Sort by Name</button>
        <button onClick={() => setSortBy("email")}>Sort by Email</button>
        <button onClick={() => setSortBy("")}>Clear Sorting</button>
      </div>

      {}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} - {user.email} - {user.company?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
