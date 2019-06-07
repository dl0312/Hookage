import React from "react";
import { useAxios } from "../package/useAxios";

const UseAxios = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  return (
    <div className="App">
      <button onClick={refetch}>refetch</button>
      <div>{data && JSON.stringify(data.data.data.movies)}</div>
      <h2>{error && "error"}</h2>
      <h2>{loading && "Loading"}</h2>
    </div>
  );
};

export default UseAxios;
