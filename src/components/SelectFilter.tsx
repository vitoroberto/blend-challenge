import { SetStateAction, useContext } from "react";
import { TodoFilterContext, TodoFilterType } from "../context/FilterContext";

export function SelectFilter() {
  const { filter, setFilter } = useContext(TodoFilterContext);

  return (
    <div className="self-end">
      <select
        className="cursor-pointer rounded-lg border-2 border-[#4c9e45] bg-[#4c9e45] py-2 text-center text-sm font-bold text-white focus:border-[#4c9e45] focus:ring-[#4c9e45]"
        name="filter"
        id=""
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value as SetStateAction<TodoFilterType>)
        }
      >
        <option value="all">Todas</option>
        <option value="completed">Concluídas</option>
        <option value="not-completed">Não concluídas</option>
      </select>
    </div>
  );
}
