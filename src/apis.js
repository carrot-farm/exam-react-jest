import axios from "axios";

const TAKS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTasks() {
  const { data } = await axios.get(TAKS_URL);
  return data;
}

export default {};
