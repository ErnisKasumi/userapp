// src/components/UserDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
  const { id } = useParams(); // marrim id nga URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
      <br />
      <Link to="/">⬅️ Back to Users</Link>
    </div>
  );
}
