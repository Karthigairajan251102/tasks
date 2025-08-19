import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, deleteItem } from "./crudSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crud.items);

  const [form, setForm] = useState({ id: null, name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateItem(form));
    } else {
      dispatch(addItem({ name: form.name }));
    }
    setForm({ id: null, name: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>CRUD using React + Redux</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter name"
          required
        />
        <button type="submit">{form.id ? "Update" : "Add"}</button>
      </form>

      {/* List */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => setForm(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
