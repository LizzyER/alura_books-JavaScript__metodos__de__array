// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros);

const botoes = document.querySelectorAll('.btn');
 botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value 
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter (livro => livro.quantidade > 0): livros.filter(livro => livro.categoria == categoria)
    console.log(livrosFiltrados)
    exibirNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
      const valorTotal = calculoValorTotal(livrosFiltrados)
      exibirValorTotalNaTela (valorTotal)
    }
}; 

function exibirValorTotalNaTela (valorTotal) {
  elementoValortotalDeLivrosDisponiveis.innerHTML =  `  
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`  
}