// import React, { useState } from "react";

// const SearchFilterExample = () => {
//   const data = [
//     "Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry", "Fig", "Grapes",
//     "Honeydew", "Indian Fig", "Jackfruit", "Kiwi", "Lemon", "Mango", "Nectarine",
//     "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato"
//   ];

//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter logic
//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search Filter Example</h2>
//       <input
//         type="text"
//         placeholder="Search here..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "8px",
//           marginBottom: "10px",
//           width: "300px",
//           borderRadius: "5px",
//           border: "1px solid #ccc"
//         }}
//       />

//       <ul>
//         {filteredData.length > 0 ? (
//           filteredData.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchFilterExample;

import React, { useState } from 'react'

function App() {

  const dataList = [
    "Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry", "Fig", "Grapes",
    "Honeydew", "Indian Fig", "Jackfruit", "Kiwi", "Lemon", "Mango", "Nectarine",
    "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato"
  ];

  const[viewList, setViewList] = useState("");

  const dataFilter = dataList.filter((list) => {
    return list.toLowerCase().includes(viewList.toLowerCase())
  })


  return (
    <>
    <h1>Filter</h1>
    <input 
    type='text'
    placeholder='search here'
    value={viewList}
    onChange={(e) => setViewList(e.target.value)}
    />
    
    <ul>
      {
        dataFilter.length > 0 ? (
          dataFilter.map((list, index) => (
            <li key={index}>{list}</li>
          ))
        ):(
          <li>No result found</li>
        )
      }
    </ul>
    </>
  )
}

export default App