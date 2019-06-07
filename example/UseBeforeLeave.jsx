import React from "react";
import useBeforeLeave from "../package/useBeforeLeave";

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return <div className="App" />;
};

export default UseBeforeLeave;
