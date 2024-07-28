export function Form() {
  return (
    <form className="grid w-full gap-2 sm:grid-cols-6" action="">
      <input
        className="w-full rounded-lg border-2 border-solid border-[#4c9e45] p-4 text-zinc-900 placeholder:text-[#808080] focus:border-[#4c9e45] focus:outline-none sm:col-span-5"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button
        className="w-full rounded-lg bg-[#4c9e45] p-2 font-bold text-white transition duration-300 hover:bg-green-800"
        type="submit"
      >
        Criar
      </button>
    </form>
  );
}
