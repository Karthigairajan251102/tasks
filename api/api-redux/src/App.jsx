import React from 'react'
import { fetchData } from './productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const {items, status, error} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if(status === "loading") return <h6>Loading</h6>
  if(status === 'failed') return <h6>Error</h6>

  return (
    <>
    <h1>ApI Fetching using React and Redux</h1>
    {
      items.map((prod) => (
        <div>
          <img src={ `http://localhost:1000/${prod.image}`}  />
          <h4>{prod.name}</h4>
          <h4>{prod.price}</h4>
        </div>
      ))
    }
    </>
  )
}

export default App