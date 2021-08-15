let cards = [
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaReal.jpg",
    "titulo": "Real Madrid com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaJensReserva.jpg",
    "titulo": "Jens Reserva",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaAdidasAjax.jpg",
    "titulo": "Ajax com  bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaAdidasArsenal.jpg",
    "titulo": "Arsenal com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaAdidasColombia.jpg",
    "titulo": "F.F. Colombia com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaAdidasJuventus.jpg",
    "titulo": "Juventus com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaAdidasPreta.jpg",
    "titulo": "Adidas com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaCityPuma.jpg",
    "titulo": "City com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaJensReserva2.jpg",
    "titulo": "Jens Reserva escura",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaNike.jpg",
    "titulo": "Nike com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaNikeFrança.jpg",
    "titulo": "França com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaNikeInglaterra.jpg",
    "titulo": "Inglaterra com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaNikePSG2.jpg",
    "titulo": "PSG com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaJensReserva3.jpg",
    "titulo": "Jens reserva",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/justDoIt.jpg",
    "titulo": "Nike preta com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/JustDoItCinza.jpg",
    "titulo": "Nile cinza com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/JustDoItPreta.jpg",
    "titulo": "Nike vermelha com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/BermudaJensReserva4.jpg",
    "titulo": "Jens Reserva escura",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/NikeAirCinza.jpg",
    "titulo": "Nike Air cinza com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/NikeAirPreta.jpg",
    "titulo": "Nike Air Preta com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/bermudas/NikeAirVermelha.jpg",
    "titulo": "Nike Air vermelha com bolso",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  }
  
];








function pagination (page, total, limit) {
    var pageSize = Math.ceil(total/limit);

    var _pagination = {
        page: page,
        total: total,
        limit: limit,
        pages: pageSize
      };

    if(page > 1){
      var prev = page-1;
      _pagination.previous = prev;
    }

    var remaining = total - (page * limit);

    if(remaining > 0){
        _pagination.next = page + 1;
    }

    return _pagination;
  }

  function getUrlVars(){
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m, key, value){
        vars[key] = value;
    });
    return vars;
}

  var array = cards;
  var pageQuery = getUrlVars()["pagina"];
  var page = parseInt(pageQuery) || 1;
  var limit = 10;
  var offset = (page - 1) * limit;
  var total = array.length;
  var items = array.slice(offset, offset+limit);
  let paginationResults = pagination(page, total, limit)

  let cardHtml = '';

for (let i = 0; i < items.length; i++) {
  let card = items[i];
  let html = 
      '<div class="card">'+
      '<a href="'+card.link+'">'+'<img src="'+card.imagem+'" alt="produto">'+
        '<div class="precos-paragrafo">'+
          '<p>'+card.titulo+'</p>'+
          '<p>'+card.preco+'</p>'+
        '</div>'+'</a>'+
      '</div>';
  cardHtml += html;
}

document.getElementById('cards').innerHTML = cardHtml;

 

  let paginationItens = '';

  for (let i = 0; i < paginationResults.pages; i++) {
    let pageActive = i+1;
    let active = page == pageActive?'active':'';
    paginationItens += '<a href="bermudas.html?pagina='+pageActive+'" class="linkPaginacao '+active+'">'+pageActive+'</a>';
  }

  document.getElementById('pagination').innerHTML = paginationItens;