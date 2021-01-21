import { useDispatch, useSelector } from 'react-redux'

import List from './List';

import { deleteTask } from './actions'

function ListCotnainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => {
    return ({tasks: state.tasks})
  });

  function handleClick(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List tasks={tasks} onClick={handleClick} />
  );
}

export default ListCotnainer;
