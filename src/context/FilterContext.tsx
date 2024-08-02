// Decidi criar um contexto para o filtro de TO-DOS, dessa forma eu facilito a manutenção do código e a reutilização do estado do filtro entre componentes e evito "Prop Drilling"..
import { createContext, useState } from "react";

export type TodoFilterType = "all" | "completed" | "not-completed";

type TodoFilterContextType = {
  filter: TodoFilterType;
  setFilter: React.Dispatch<React.SetStateAction<TodoFilterType>>;
};

// Aqui eu criei o contexto em si, e passei o valor "all" como default.
export const TodoFilterContext = createContext<TodoFilterContextType>({
  filter: "all",
  setFilter: () => {},
});

// Aqui eu criei o provider, que vai ser responsável por controlar o estado do filtro.
export const TodoFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = useState<TodoFilterType>("all");

  return (
    <TodoFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </TodoFilterContext.Provider>
  );
};
