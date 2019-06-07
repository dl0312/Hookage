import React from "react";
import useFullScreen from "../package/useFullScreen";

const UseFullScreen = () => {
  const onFulls = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullScreen, exitFullScreen } = useFullScreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://t1.daumcdn.net/cfile/tistory/990E89495A60716406" />
        <button onClick={exitFullScreen}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFullScreen}>FullScreen</button>
    </div>
  );
};

export default UseFullScreen;
