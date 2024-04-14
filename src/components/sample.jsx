import React, { Fragment, useCallback, useState } from "react";
import HelloWorld from "./helloWorld";
import { useCountRenders } from "../hooks/useCountRenders";

const Sample = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  return (
    <Fragment>
      <HelloWorld increment={increment} />
      <div>Count: {count}</div>
    </Fragment>
  );
};

export default Sample;
