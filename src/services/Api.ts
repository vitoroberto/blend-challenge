// Decidi criar um arquivo separado para as requisições da API, para manter o código mais organizado e de fácil manutenção.

// Aqui eu apenas criei uma constante que representa a URL base da API, para evitar erros quando for preciso reutilar a URL.
export const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// Nessa funcão primeiro eu verifico se o texto digitado pelo usuário é vazio. Se sim, eu dou um retorno vazio. Se não, eu faço a requisição para a API com o método POST.
export const createTodoApi = async (title: string) => {
  if (title.trim() === "") return;

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: title.trim(),
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// Nessa função eu fiz a requisição para a API, com o método DELETE, para deletar o todo.
export const deleteTodoApi = async (id: number) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Nessa função eu fiz a requisição para a API, com o método PATCH, para marcar o todo como concluído.
export const completeTodoApi = async (id: number) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
