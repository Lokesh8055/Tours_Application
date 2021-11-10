import React, { useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import Tours from "./Tours";
import Error from "./Error";
import useFetch from "./useFetch";

const url = "http://localhost:4000/tours";
const fetchTours = async () => {
  return await axios.get(url);
};

const App = () => {
  const props = {
    name: "tours",
    fetchData: fetchTours,
  };
  const { isLoading, isError, data: tours } = useFetch(props);

  const removeTour = (id) => {
    return tours?.data.filter((tour) => tour.id !== id);
  };

  return (
    <>
      <main>
        {isLoading && <Loading />}
        {isError && <Error />}
        {tours?.data.length > 0 ? (
          <Tours tours={tours?.data} removeTour={removeTour} />
        ) : (
          <div className="title">
            <h1>No Tours left</h1>
            <button className="btn" onClick={() => fetchTours()}>
              Refresh
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
