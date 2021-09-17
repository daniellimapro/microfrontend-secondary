import React, { useState } from "react";

const App = ({ name }) => {
  const [count, setCount] = useState(0);
  return <h1>{name}</h1>;
};

export default App;
