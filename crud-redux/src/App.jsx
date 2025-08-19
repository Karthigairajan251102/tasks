// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, updateItem, deleteItem } from "./crudSlice";

// function App() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.crud.items);

//   const [form, setForm] = useState({ id: null, name: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.id) {
//       dispatch(updateItem(form));
//     } else {
//       dispatch(addItem({ name: form.name }));
//     }
//     setForm({ id: null, name: "" });
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>CRUD using React + Redux</h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           placeholder="Enter name"
//           required
//         />
//         <button type="submit">{form.id ? "Update" : "Add"}</button>
//       </form>

//       {/* List */}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}{" "}
//             <button onClick={() => setForm(item)}>Edit</button>
//             <button onClick={() => dispatch(deleteItem(item.id))}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import { addItem, updateItem, deleteItem } from './crudSlice'
import {useDispatch, useSelector} from "react-redux"


function App() {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.crud.items)

  const[form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    location: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.id) {
      dispatch(updateItem(form))
    } else {
      dispatch(addItem({name: form.name, email: form.email, location: form.location}))
    }
    setForm({id: null, name: "", email: "", location: ""})
  }

  return (
    <>
    <h1>CRUD using React and Redux</h1>

    <form  onSubmit={handleSubmit}>

      <input type="text"
      placeholder='enter name'
      value={form.name}
      onChange={(e) => setForm({...form, name: e.target.value})} />

      <input type="text"
      placeholder='enter email'
      value={form.email}
      onChange={(e) => setForm({...form, email: e.target.value})} />

      <input type="text"
      placeholder='enter name'
      value={form.location}
      onChange={(e) => setForm({...form, location: e.target.value})} />

      <button>{form.id ? "Update" : "Add"}</button>

    </form>

    {
      items.length === 0 ? (
        <p>No data found</p>
      ) : (
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.location}</td>
              <td>
                <button onClick={() => setForm(item)}>Edit</button>
                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
      )
    }
    </>
  )
}

export default App
