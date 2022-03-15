import React, { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
   <span>{count}</span>
      <Button
        type="button"
        onClickHandler={() => setcount(count + 1)}
        buttonText="submit"
      />
    </div>
  );
};
export default App;
