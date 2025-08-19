// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ApiDataFetchAndSearch = () => {
//   const [data, setData] = useState([]); // API data
//   const [filteredData, setFilteredData] = useState([]); // Search results
//   const [searchTerm, setSearchTerm] = useState(""); // User input
//   const [loading, setLoading] = useState(true); // Loader

//   // Fetch data from API using axios
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//         setData(res.data);
//         setFilteredData(res.data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Search filter logic
//   useEffect(() => {
//     const results = data.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(results);
//   }, [searchTerm, data]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Axios API Fetch & Search</h2>
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "8px",
//           marginBottom: "10px",
//           width: "250px",
//           border: "1px solid #ccc",
//           borderRadius: "5px"
//         }}
//       />

//       {filteredData.length > 0 ? (
//         <ul>
//           {filteredData.map((user) => (
//             <li key={user.id}>
//               <strong>{user.name}</strong> — {user.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default ApiDataFetchAndSearch;


import React, { useEffect, useState } from 'react'
import axios from "axios";

function App() {


  const[list, setList] = useState([])
  const[filterList, setFilterList] = useState([])
  const[viewList, setViewList] = useState("")
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchList = async() =>{
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setList(res.data)
        setFilterList(res.data)
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false)
      }
    }
    fetchList()
  }, [])

  useEffect(() => {
    const result = list.filter((item) => {
      return item.name.toLowerCase().includes(viewList.toLowerCase())
    })
    setFilterList(result)
  },[viewList, list])

  if (loading) {
    setLoading(false)
  }

  return (
    <>
    <h1>Fetch API & Search</h1>
    <input
    type='text'
    placeholder='search here'
    value={viewList}
    onChange={(e) => setViewList(e.target.value)}
    />

    <ul>
      {
        filterList.length > 0 ? (
          filterList.map((user) => (
            <li key={user.id}>{user.name} {user.email}</li>
          ))
        ) : (
          <li>No result Found</li>
        )
      }
    </ul>
    </>
  )
}

export default App