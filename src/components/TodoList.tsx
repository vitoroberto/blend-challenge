import { useContext } from "react";
import { TodoFilterContext } from "../context/FilterContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";
import { todoType } from "../context/TodoContext";

export function TodoList() {
  const { filter } = useContext(TodoFilterContext);

  const { todos, toggleTodo, deleteTodo } = useTodos();

  // Nessa função eu filtro os to-dos e eu retorno os to-dos que correspondem ao filtro, ou seja, se o filtro for "completed" eu retorno apenas os to-dos que estiverem concluídos, se o filtro for "not-completed" eu retorno apenas os to-dos que não estiverem concluídos, se não for nenhum dos dois eu retorno todos os to-dos.
  function handleFilter(todos: todoType) {
    if (filter === "completed") {
      return todos.completed === true;
    }

    if (filter === "not-completed") {
      return todos.completed === false;
    }

    return todos;
  }

  return (
    <ul className="grid w-full gap-3 pb-2">
      {todos
        .filter((todo) => handleFilter(todo))
        .map((todo) => (
          <TodoItem key={todo.id} {...{ todo, toggleTodo, deleteTodo }} />
        ))}
    </ul>
  );
}
