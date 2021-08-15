let cards = [
{
    "imagem": "./Imagens/produtos/Camisas59/CamisaPSG7.jpg",
    "titulo": "Camisa",
    "preco": "PSG"
},
{
    "imagem": "./Imagens/produtos/Casacos/CasacoNikeCorta.jpg",
    "titulo": "Casaco Tommy",
    "preco": "Tommy Hilfiger"
},
{
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaManCity.jpg",
    "titulo": "Camisa Frio",
    "preco": "Manchester City"
},
{
    "imagem": "./Imagens/produtos/Camisas59/CamisaPSG6.jpg",
    "titulo": "Camisa",
    "preco": "PSG"
},
{
    "imagem": "./Imagens/produtos/CamisasBasquete/CamisaLakers.jpg",
    "titulo": "Camisa Basquete",
    "preco": "Lakers"
}
];

let cardHtml = '';

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let html = 
        '<div class="card">'+
            '<img src="'+card.imagem+'" alt="produto">'+
            '<div class="precos-paragrafo">'+
            '<p>'+card.titulo+'</p>'+
            '<p>'+card.preco+'</p>'+
            '</div>'+
        '</div>';
    cardHtml += html;
}
  
document.getElementById('card').innerHTML = cardHtml;
  