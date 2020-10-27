import React, { useState } from "react";
import { render } from "react-dom";
import InfiniteCalendar, { Calendar, withRange } from "../../src";
import "../../styles.css";
import "./demo.css";

const Comp = () => {
  const [test, setTest] = useState("asdfas");
  const hello = "tset";

  const test1 = () => {
    setTest("testet");
    console.log(test);
  };

  return (
    <InfiniteCalendar
      Component={withRange(Calendar)}
      width={Math.min(window.innerWidth, 400)}
      selected={false}
      onSelect={test1}
    />
  );
};

render(<Comp />, document.querySelector("#demo"));
