import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import axios from 'axios'
import Tours from './Tours'
import Error from './Error'

const url = 'http://localhost:4000/tours'

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTours = async () => {
     await axios.get(url).then(res => {
       const data = res.data;
        setTours(data);
        setIsLoading(false);
     })
     .catch(err => {
       if(err.response) {
         if (err.response.status === 404)  {
          setIsLoading(false);
          setIsError(true);
    }else if(err.response.request) {
       console.log('Request failed', err.response.request)
    } else {
      console.log('Error', err.response.message)
    }
       }
     })
  }

  useEffect(() => {
     fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (isError) {
    return (
      <main>
        <Error/>
      </main>
    )
  }

  if(tours.length > 0) {
    return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
   )
  } else {
    return (
      <main>
        <div className="title">
            <h1>No Tours left</h1>
            <button className="btn" onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
    )
  }

  
}

export default App
