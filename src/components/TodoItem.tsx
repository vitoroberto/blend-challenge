import { Check, Trash2 } from "lucide-react";
import { todoType } from "../context/TodoContext";

export function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: todoType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <li className="grid h-full min-h-[72px] grid-cols-6 rounded-lg border-2 border-[#4c9e45] text-sm text-zinc-900 shadow-[0_2px_8px_0px_rgba(0,0,0,0.6)]">
      <div
        className="col-span-5 mr-2 flex cursor-pointer items-center"
        onClick={() => toggleTodo(todo.id)}
      >
        <div className="mx-2">
          {todo.completed ? (
            <span className="inline-block h-6 w-6 rounded-[50%] border-2 border-[#4c9e45] bg-[#4c9e45]">
              <Check size={20} color="#fff" />
            </span>
          ) : (
            <span className="inline-block h-6 w-6 rounded-[50%] border-2 border-[#4c9e45]"></span>
          )}
        </div>
        <div className="max-w-[200px] break-words py-5 text-left sm:max-w-full">
          <p>{todo.title}</p>
        </div>
        <div />
        <div />
      </div>
      <button
        className="flex items-center justify-center border-l-2 border-[#4c9e45]"
        onClick={() => deleteTodo(todo.id)}
      >
        <Trash2 size={20} color="#4c9e45" />
      </button>
    </li>
  );
}
