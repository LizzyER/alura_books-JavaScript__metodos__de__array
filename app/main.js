 //arquivo responsavel por fazer as requisições dos livros da api
 let livros = [];
 const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
 getBuscaLivrosApi();


//será assincrona para q a função espere receber os livros do endpoint
async function getBuscaLivrosApi(){
   const res = await  fetch(endpointApi)
   livros = await res.json()
   let livrosDesconto = aplicarDesconto(livros)
   //console.table (livros) 
   exibirNaTela(livrosDesconto) 
 };

 