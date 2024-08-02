// Com a mesma ideia que a FilterContext, eu criei um contexto para centralizar o estado dos to-dos e facilitar a passagem dos estados entre componentes, sendo assim, eu também evito "Prop Drilling" que é a passagem de dados entre  muitos componentes, que acaba dificultando a manutenção do código.
import React, { createContext, useEffect, useState } from "react";
import {
  deleteTodoApi,
  completeTodoApi,
  BASE_URL,
  createTodoApi,
} from "../services/Api";

// Aqui são a declaração dos tipos já que decidi usar TypeScript.
export type todoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoContextType = {
  todos: todoType[];
  createTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

// Aqui eu criei o contexto e passei undefined como default value.
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

// Aqui eu criei o provider, que vai ser responsável por controlar o estado dos to-dos.
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<todoType[]>([]);

  // Aqui eu criei um useEffect para que assim que a página carregar ele busque todos os todos da API e depois eu passo os dados para o useState do contexto.
  useEffect(() => {
    const getAllTodos = async () => {
      const response = await fetch(BASE_URL);

      const data = await response.json();

      setTodos(data);
    };
    getAllTodos();
  }, []);

  // Nessa função eu primerio faço a requisição para simular a criação de um novo to-do, depois eu altero o id do to-do para algum valor aleatório, nesse caso decidi usar a API de data do javascript apenas para faciliar, o motivo disso é que eu estou usando o id dos to-dos como chaves dos componentes e como cada chave do elemento de um componente precisa ser único, eu preciso fazer isso. E no fim eu adiciono o novo to-do no estado com os to-dos anteriores que vieram na requisição da API no useEffect.
  const createTodo = async (title: string) => {
    const newTodo = await createTodoApi(title);

    newTodo.id = Date.now();

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Nessa função eu faço a requisição para a API, depois eu faço uma iteração dos to-dos e quando o id do to-do for igual ao id passado no parâmetro eu faço a alteração do estado do to-do.
  const toggleTodo = async (id: number) => {
    await completeTodoApi(id);

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Nessa função eu faço a requisição para deletar o to-do e depois eu faço um filtro no estado dos to-dos que retorna todos os to-dos que tenham o id diferente do id do to-do que eu desejo deletar.
  const deleteTodo = async (id: number) => {
    await deleteTodoApi(id);

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
