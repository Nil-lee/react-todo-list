import { useEffect, useState } from "react";
import "./App.css";
import {
  Edit,
  Save,
  Plus,
  CircleX,
  MessageCircleOff,
  Trash,
} from "lucide-react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoListFilter from "./TodoListFilter";
import TodoList from "./TodoList";

function App() {
  const [list, setList] = useState(() => {
    try {
      const stored = localStorage.getItem("todo-list");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("localStorage解析錯誤", err);
      return [];
    }
  });

  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  const handleClick = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: Date.now().toString(36).substring(2, 8),
        text: input.trim(),
        completed: false,
        isEditing: false,
        editText: input.trim(),
      };
      setList([newItem, ...list]);
      setInput("");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing) {
      handleClick();
    }
  };
  const deleteList = (idToDelete) => {
    setList(list.filter((item) => item.id !== idToDelete));
  };

  const deleteAllCompletedList = () => {
    setList(list.filter((item) => item.completed !== true));
  };

  const toggleCompleted = (idToToggle) => {
    const updatedList = list.map((item) =>
      item.id === idToToggle ? { ...item, completed: !item.completed } : item
    );
    const sortedList = [
      ...updatedList.filter((item) => !item.completed),
      ...updatedList.filter((item) => item.completed),
    ];
    setList(sortedList);
  };

  const startEdit = (idToEdit) => {
    setList(
      list.map((item) =>
        item.id === idToEdit ? { ...item, isEditing: true } : item
      )
    );
  };

  const cancelEdit = (idToCancel) => {
    setList(
      list.map((item) =>
        item.id === idToCancel
          ? { ...item, isEditing: false, editText: item.text }
          : item
      )
    );
  };

  const updateEditText = (idToEdit, newText) => {
    setList(
      list.map((item) =>
        item.id === idToEdit ? { ...item, editText: newText.trim() } : item
      )
    );
  };

  const confirmEdit = (idToEdit) => {
    setList(
      list.map((item) =>
        item.id === idToEdit
          ? { ...item, text: item.editText, isEditing: false }
          : item
      )
    );
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <TodoListFilter list={list} filter={filter} setFilter={setFilter} />
      </div>

      <h2>React Todo List</h2>

      <div className="input-container">
        <TodoInput
          input={input}
          setInput={setInput}
          onKeyDown={onKeyDown}
          isComposing={isComposing}
          setIsComposing={setIsComposing}
        />

        <button onClick={handleClick} title="新增代辦事項">
          <Plus className="icon" size={22} color="#c9d4e7" strokeWidth={2.6} />
        </button>

        {list.filter((item) => item.completed).length >= 3 && (
          <button onClick={deleteAllCompletedList} title="刪除所有已完成事項">
            <Trash
              className="icon"
              size={20}
              color="#c9d4e7"
              strokeWidth={2.6}
            />
          </button>
        )}
      </div>

      <TodoList
        list={list}
        filter={filter}
        onToggle={toggleCompleted}
        onDelete={deleteList}
        onStartEdit={startEdit}
        onCancelEdit={cancelEdit}
        onUpdateEditText={updateEditText}
        onConfirmEdit={confirmEdit}
        isComposing={isComposing}
        setIsComposing={setIsComposing}
      />
    </div>
  );
}

export default App;
