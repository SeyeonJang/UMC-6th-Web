import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, toggleTodos } from "../src/components/TodosReducer";

const TodoItem = ({ todo, onToggleHandler, onRemoveHandler }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggleHandler()}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemoveHandler()}>삭제</button>
    </div>
  );
};

function App() {
  const todos = useSelector((state) => state.todos);

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(inputText));
    setInputText("");
  };

  console.log(todos);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>

      <hr />

      {todos?.map((data, idx) => {
        return (
          <TodoItem
            key={idx}
            todo={data}
            onToggleHandler={() => {
              dispatch(toggleTodos(idx));
            }}
            onRemoveHandler={() => dispatch(removeTodos(idx))}
          />
        );
      })}
    </div>
  );
}

export default App;