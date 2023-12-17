// why we need useEffect

import { useState } from "react";

const UseEffectNeed = () => {
  const [value, setValue] = useState(0);

  const helloWorld = () => {
    console.log("Hello There!!");
    // be careful, you will have infinite loop
    // setValue(value + 1);
  };
  helloWorld();
  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me!</button>
    </div>
  );
};
