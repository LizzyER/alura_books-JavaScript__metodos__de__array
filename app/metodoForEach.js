const inserirLivros = document.getElementById('livros');
const elementoValortotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirNaTela (ListaDeLivros) {
  elementoValortotalDeLivrosDisponiveis.innerHTML = ''
    inserirLivros.innerHTML = ''
    ListaDeLivros.forEach(livro => { 
      // let disponibilidade = verificarDiponibilidade (livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens': 'livro__imagens indisponivel'
        inserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p> 
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`        
    });
  };

  // tofixed ( linha 13) fixa o preço do livro em 2 numeros após a virgula :) 

