import React from "react";
import useNetwork from "../useNetwork";

const UseNetwork = () => {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "On Line" : "Off Line"}</h1>
    </div>
  );
};

export default UseNetwork;
