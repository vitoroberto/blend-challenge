import { Form } from "./components/Form";
import { SelectFilter } from "./components/SelectFilter";
import { TodoList } from "./components/TodoList";
import { TodoFilterProvider } from "./context/FilterContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="flex justify-center">
      <main className="mx-2 mt-12 flex w-full max-w-[736px] flex-col items-center justify-center gap-4 sm:mt-32">
        <h1 className="mb-10 text-3xl font-bold text-[#4c9e45]">
          Grupo Blend Challenge
        </h1>
        <TodoProvider>
          <Form />
          <TodoFilterProvider>
            <SelectFilter />
            <TodoList />
          </TodoFilterProvider>
        </TodoProvider>
      </main>
    </div>
  );
}

export default App;
