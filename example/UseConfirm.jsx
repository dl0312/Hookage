import React from "react";
import useConfirm from "../useConfirm";

const UseConfirm = () => {
  const deleteWorld = () => console.log("Confirm");
  const abort = () => console.log("Canceled");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirm;
