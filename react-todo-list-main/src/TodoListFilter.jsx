function TodoListFilter({ list, filter, setFilter }) {
  if (list.filter((item) => item.id).length < 2) return null;
  return (
    <select
      id="filter"
      className="filter-select"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      title="篩選代辦清單"
    >
      <option value="all">全部</option>
      <option value="active">未完成</option>
      <option value="completed">已完成</option>
    </select>
  );
}
export default TodoListFilter;
