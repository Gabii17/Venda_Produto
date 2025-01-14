// Método simples: Alterando o título
document.getElementById('titulo').textContent = 'Loja Online - Produtos em Oferta';

// Método complexo: Adicionando o produto com nome, descrição, preço e imagem
const produto = document.getElementById('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Camiseta Estilosa';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Camiseta de algodão, confortável e com design moderno. Ideal para o seu dia a dia.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 49,90';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150'; // Substitua pela URL da imagem real
imagemProduto.alt = 'Imagem do produto';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);
