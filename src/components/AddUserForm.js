// src/components/AddUserForm.js
import React, { useState } from "react";

export default function AddUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }
    const newUser = {
      id: Date.now(),
      name,
      email,
      company: { name: "Local User" },
    };
    onAddUser(newUser); // thërrasim funksionin nga App
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}
