function List({ tasks }) {
  return (
    <ul>
      {tasks.map(({id, title}) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default List;
