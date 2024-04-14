import React, { useCallback } from "react";
import { useCountRenders } from "../hooks/useCountRenders";

const HelloWorld = ({ increment }) => {
  useCountRenders();
  return (
    <button onClick={increment} style={{ backgroundColor: "cyan" }}>
      Increment
    </button>
  );
};

export default React.memo(HelloWorld);
