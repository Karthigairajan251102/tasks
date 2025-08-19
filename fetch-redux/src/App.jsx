// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchItems, setSearchTerm } from "./itemSlice";

// function App() {
//   const dispatch = useDispatch();
//   const { filteredList, searchTerm, status } = useSelector(
//     (state) => state.items
//   );

//   useEffect(() => {
//     dispatch(fetchItems());
//   }, [dispatch]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Data Fetch + Search (Redux handles filtering)</h2>

//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//       />

//       {status === "loading" && <p>Loading...</p>}
//       {status === "failed" && <p>Error fetching data</p>}

//       <ul>
//         {filteredList.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setSearchItem, fetchItems } from './itemSlice'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch()
  const {filterData, searchItem, status} = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])


  return (
    <>
    <h1>Ftech using Redux</h1>
    <input 
    type="text"
    placeholder='search here'
    value={searchItem}
    onChange={(e) => dispatch(setSearchItem(e.target.value))} 
    />

    {status === "loading" && <p>Loading</p>}
    {status === "failed" && <p>Error Fetching Data</p>}

    <ul>
      {
        filterData.length > 0 ? (
          filterData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          <li>No result found</li>
        )
      }
    </ul>


    </>
  )
}

export default App