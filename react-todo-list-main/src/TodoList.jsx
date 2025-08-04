import TodoItem from "./TodoItem";

function TodoList({ list, filter, ...handlers }) {
  const filterdList = list.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });
  return (
    <ul className="todo-list">
      {filterdList.map((item) => (
        <TodoItem key={item.id} item={item} {...handlers} />
      ))}
    </ul>
  );
}

export default TodoList;
