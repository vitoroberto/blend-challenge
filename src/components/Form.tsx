import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export function Form() {
  const [todoTitle, setTodoTitle] = useState("");

  const { createTodo } = useTodos();

  return (
    <form
      className="grid w-full gap-2 sm:grid-cols-6"
      onSubmit={(e) => {
        e.preventDefault();

        createTodo(todoTitle);
        setTodoTitle("");
      }}
    >
      <input
        className="w-full rounded-lg border-2 border-solid border-[#4c9e45] p-4 text-zinc-900 placeholder:text-[#808080] focus:border-[#4c9e45] focus:outline-none sm:col-span-5"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button
        className="rounded-lg bg-[#4c9e45] p-2 font-bold text-white transition duration-300 hover:bg-green-800"
        type="submit"
      >
        Criar
      </button>
    </form>
  );
}
