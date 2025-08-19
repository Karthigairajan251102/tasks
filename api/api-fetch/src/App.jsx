import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const[products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:1000/api/products")
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      console.log("Error on fetching data", error);
    })
  }, [])
  return (
    <>
    <h1>API Fetch</h1>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
    {
     products && (
       products.map((prod) => (
        
          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "350px",
            borderRadius: "10px",
          }}>
            <img src={`http://localhost:1000/${prod.image}`}  
            style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px"}}
            />
            <h6>{prod.name}</h6>
            <h6>{prod.price}</h6>
          </div>
      ))
     )
    }
    </div>
    </>
  )
}

export default App