import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [textCount, setTextCount] = useState(0);

  const handleChange = (e) => {
    let text = e.target.value;

    let totalTextCount = text.length;

    let onlyTextCount = text.replace(/\s/g, "").length;

    setCount(totalTextCount);
    setTextCount(onlyTextCount);
  };

  return (
    <div className="background">
      <h1>😎글자를 센다.🙄</h1>
      <p className="content">🙆‍♀️공백 포함🙆‍♂️ : {count}</p>
      <p className="content">🙅‍♂️공백 미포함🙅‍♀️ : {textCount}</p>

      <textarea className="textBox" onChange={handleChange}></textarea>
    </div>
  );
}

export default App;
