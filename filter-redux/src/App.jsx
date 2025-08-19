// // src/App.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setSearchTerm } from "./itemSlice";

// function App() {
//   const dispatch = useDispatch();
//   const { list, searchTerm } = useSelector((state) => state.items);

//   const filteredList = list.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Redux Filter Example</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//         style={{ padding: "8px", width: "200px", marginBottom: "10px" }}
//       />
//       <ul>
//         {filteredList.length > 0 ? (
//           filteredList.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchItem } from './itemSlice'

function App() {

  const dispatch = useDispatch();
  const {list, searchItem} = useSelector((state) => state.items)


  const filterData = list.filter((items) => {
    return items.toLowerCase().includes(searchItem.toLowerCase())
  })


  return (
    <>
    <h1>Filter using Redux</h1>
    <input 
    type="text"
    placeholder='serach here'
    value={searchItem}
    onChange={(e) => dispatch(setSearchItem(e.target.value))}
    />

    {
      filterData.length > 0 ? (
        filterData.map((items, index) => (
          <li key={index}>{items}</li>
        ))
      ) :
      (
        <li>No result found</li>
      )
    }
    </>
  )
}

export default App