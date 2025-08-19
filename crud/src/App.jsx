import React, { useState } from "react";

function App() {
  // Initially empty array
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create
  const handleAdd = () => {
    if (!form.name || !form.email) {
      alert("All fields required!");
      return;
    }
    setUsers([...users, { ...form, id: Date.now() }]); // unique id
    setForm({ id: null, name: "", email: "" });
  };

  // Edit
  const handleEdit = (user) => {
    setIsEditing(true);
    setForm(user);
  };

  // Update
  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setIsEditing(false);
    setForm({ id: null, name: "", email: "" });
  };

  // Delete
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ReactJS CRUD Example</h2>

      {/* Form */}
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      {/* Table */}
      {users.length === 0 ? (
        <p>No users added yet!</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <button onClick={() => handleEdit(u)}>Edit</button>
                  <button onClick={() => handleDelete(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
