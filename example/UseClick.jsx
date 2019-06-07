import React from "react";
import useClick from "../package/useClick";

const UseClick = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div>hi</div>
      <input ref={title} placeholder="la" />
    </div>
  );
};

export default UseClick;
