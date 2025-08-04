import {
  Edit,
  Save,
  Plus,
  CircleX,
  MessageCircleOff,
  Trash,
} from "lucide-react";
import TodoInput from "./TodoInput";

function TodoItem({
  item,
  onToggle,
  onDelete,
  onStartEdit,
  onCancelEdit,
  onUpdateEditText,
  onConfirmEdit,
  isComposing,
  setIsComposing,
}) {
  return (
    <li
      className={`todo-item ${item.completed ? "completed" : ""}`}
      key={item.id}
    >
      <label className="todo-content">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />
        {item.isEditing ? (
          <input
            type="text"
            value={item.editText}
            onChange={(e) => onUpdateEditText(item.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isComposing) {
                onConfirmEdit(item.id);
              }
            }}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        ) : (
          <span className="todo-text">{item.text}</span>
        )}
      </label>
      {item.isEditing ? (
        <>
          <button
            className="edit-btn"
            onClick={() => onConfirmEdit(item.id)}
            title="儲存編輯"
          >
            <Save
              className="icon"
              size={24}
              color="#c9d4e7"
              strokeWidth={2.6}
            />
          </button>
          <button
            className="edit-btn"
            onClick={() => onCancelEdit(item.id)}
            title="取消編輯"
          >
            <MessageCircleOff
              className="icon"
              size={24}
              color="#c9d4e7"
              strokeWidth={2.6}
            />
          </button>
        </>
      ) : (
        <button
          className="edit-btn"
          onClick={() => onStartEdit(item.id)}
          title="編輯"
        >
          <Edit className="icon" size={24} color="#c9d4e7" strokeWidth={2.6} />
        </button>
      )}
      <button
        className="delete-btn"
        onClick={() => onDelete(item.id)}
        title="刪除"
      >
        <CircleX className="icon" size={24} color="#c9d4e7" strokeWidth={2.6} />
      </button>
    </li>
  );
}

export default TodoItem;
