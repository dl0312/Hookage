import React from "react";
import useNotification from "../useNotification";

const UseNotification = () => {
  const triggerNotification = useNotification("Shall we dance?", {
    body: "💃🏾🕺🏾"
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Notification</button>
    </div>
  );
};

export default UseNotification;
