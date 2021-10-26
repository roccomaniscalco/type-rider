import { createRef } from "react";

const map = new Map();

const setRef = (key) => {
  const ref = createRef();
  map.set(key, ref);
  return ref;
};

const getRef = (key) => map.get(key);

const useDynamicRef = () => {
  return [getRef, setRef];
};

export default useDynamicRef;
