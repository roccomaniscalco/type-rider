import React, { useState } from "react";

const TextField = () => {
  const [currentValue, setCurrentValue] = useState("");

  return (
    <div>
      <h2>{currentValue}</h2>
      <input type="text" onChange={(e) => setCurrentValue(e.target.value)} />
    </div>
  );
};

export default TextField;
