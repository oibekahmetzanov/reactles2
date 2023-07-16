import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");

  const onAddTask = () => {
    const task = {
      text: value,
      description: desc,
    };
    setState([...state, task]);
    console.log(state);
  };

  const onDelete = (item) => {
    setState(state.filter((el) => el.text !== item.text));
    console.log(state);
  };

  return (
    <div className="App">
      {/* <form> */}
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="title"
        />
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
        />
      </div>
      <input onClick={onAddTask} type="submit" />
      {/* </form> */}
      <div>
        {state.map((item, i) => {
          return (
            <div key={i}>
              <div>{item.text}</div>
              <div>{item.description}</div>
              <input onClick={() => onDelete(item)} type="submit" value={"delete"} />
              <input type="submit" value="important" />
              <input type="submit" value="done" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;