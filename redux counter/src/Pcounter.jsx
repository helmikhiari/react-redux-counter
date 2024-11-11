import React from "react";
import { useSelector } from "react-redux";

const Pcounter = () => {
  const counter = useSelector((state) => state.counter.value);
  return <span>{counter}</span>;
};

export default Pcounter;
