import React, { JSX, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

function TodoList(): JSX.Element {
  const { loading, todos, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {pages.map((p) => (
          <button
            style={{
              padding: 10,
              border: `4px solid ${p === page ? "gray" : "lightgray"}`,
              fontWeight: 700,
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            key={p}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
