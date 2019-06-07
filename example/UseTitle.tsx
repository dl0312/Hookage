import React from "react";
import useTitle from "../package/useTitle";

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

export default UseTitle;
