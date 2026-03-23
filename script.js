// 1. Selecionar os elementos que vamos usar
const botao = document.getElementById('btn-cat');
const imagem = document.getElementById('cat-img');

// 2. Criar a função que busca a imagem na API
async function buscarGatinho() {
    try {
        // Mudamos o texto do botão enquanto carrega
        botao.innerText = "Carregando...";
        
        // Faz a chamada para a API
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        
        // Converte a resposta para JSON (formato de dado que o JS entende)
        const dados = await resposta.json();
        
        // A API retorna um array, pegamos a URL da primeira posição [0]
        imagem.src = dados[0].url;
        
        botao.innerText = "Ver novo gatinho!";
    } catch (erro) {
        alert("Ops! O gatinho fugiu. Tente novamente.");
        botao.innerText = "Tentar de novo";
    }
}

// 3. Ouvir o clique do botão
botao.addEventListener('click', buscarGatinho);

// (Opcional) Já carregar um gatinho ao abrir a página
buscarGatinho();