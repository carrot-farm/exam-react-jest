import { useEffect } from "react";
import ListContainer from "./ListContainer";

import { useDispatch } from "react-redux";

import { setTasks } from "./actions";

import tasks from "./fixtures/tasks";

function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("> click");
    fetch("http://13.124.125.78:8080/test")
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>To - Do</h1>
      <button onClick={handleClick}>click</button>
      <ListContainer />
    </div>
  );
}

export default App;
