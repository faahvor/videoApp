import  { useState } from "react";

const Person = () => {
  // const [state, setState] = useState(initialValue);
  const [name, setName] = useState("Favour");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setName("Avuwa");
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>hello my name is {name}</h1>
      <button onClick={() => handleClick()} type="button">
        click me to change
      </button>
      <div className="flex gap-5">
        <button
          onClick={() => decrement()}
          className="bg-yellow-500 rounded-full px-5 py-2"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => increment()}
          className="bg-yellow-500 rounded-full px-5 py-2"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Person;
