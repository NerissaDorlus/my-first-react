import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>You clicked the button {count} times.</h1>
          <button onClick={() => count++}>Click Me!</button>
        </header>
      </div>
    </>
  );
}

export default App;
