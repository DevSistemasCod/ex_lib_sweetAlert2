function inicializar() {
  let botaoExibirAlerta = document.getElementById('btnExibirAlerta');
  if (botaoExibirAlerta instanceof HTMLButtonElement) {
    botaoExibirAlerta.addEventListener('click', function () {
      // @ts-ignore
      Swal.fire({
        title: 'Isso é um título',
        text: 'Aqui seria um possível texto, Acima temos um icone de sucesso',
        icon: 'success',
        //icon: "question"
        //icon: "error"
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
