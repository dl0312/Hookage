import React from "react";
import useFadeIn from "../package/useFadeIn";

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 5);
  const fadeInP = useFadeIn(5, 1);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <h1 {...fadeInP}>Hello</h1>
    </div>
  );
};

export default UseFadeIn;
