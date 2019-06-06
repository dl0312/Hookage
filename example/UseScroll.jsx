import React from "react";
import useScroll from "../useScroll";

const UseScroll = () => {
  const { x, y } = useScroll();
  return (
    <div className="App" style={{ width: "1000vw", height: "1000vh" }}>
      <h1
        style={{
          position: "fixed",
          color:
            x > 100 ? (y > 100 ? "purple" : "red") : y > 100 ? "blue" : "black"
        }}
      >
        Scroll it!
      </h1>
    </div>
  );
};

export default UseScroll;
