function TodoInput({
  input,
  setInput,
  onKeyDown,
  isComposing,
  setIsComposing,
}) {
  return (
    <input
      type="text"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="請輸入代辦事項"
      onKeyDown={onKeyDown}
      onCompositionStart={() => setIsComposing(true)}
      onCompositionEnd={() => setIsComposing(false)}
    />
  );
}

export default TodoInput;
